import { SoapClientFacade } from "../soap/soap-client-facade";
import { WsdlPathResolver } from "../soap/wsdl-path-resolver";
import { IAccessTicket } from "../interfaces";
import moment from "moment";
import { ILoginCmsSoap } from "../soap/interfaces/LoginCMSService/LoginCms";
import { Parser } from "../utils/parser";
import forge from "node-forge";
import { AccessTicket } from "./access-ticket";
import { EndpointsEnum } from "../endpoints.enum";
import { ServiceNamesEnum } from "../soap/service-names.enum";
import { WSAuthParam } from "./ws-auth-param";
import { WsdlPathEnum } from "../soap/wsdl-path.enum";
import { GetAccessTicketParam } from "./get-access-ticket-param";

export class AfipAuthenticator {
  private static async getAuthClient(prod = false) {
    return SoapClientFacade.create<ILoginCmsSoap>({
      wsdl: prod ? WsdlPathEnum.WSFE : WsdlPathEnum.WSFE_TEST,
    });
  }

  /**
   * Tokent request authorization
   * @param serviceName
   * @returns
   */
  private static getTRA(serviceName: ServiceNamesEnum) {
    const date = new Date();
    return {
      loginTicketRequest: {
        $: { version: "1.0" },
        header: [
          {
            uniqueId: [Math.floor(date.getTime() / 1000)],
            generationTime: [new Date(date.getTime() - 600000).toISOString()],
            expirationTime: [new Date(date.getTime() + 600000).toISOString()],
          },
        ],
        service: [serviceName],
      },
    };
  }

  /**
   * Sign tokent request authorization
   * @param serviceName
   * @param cert
   * @param key
   */
  private static signTRA(traXml: string, cert: string, key: string): string {
    const p7 = forge.pkcs7.createSignedData();
    p7.content = forge.util.createBuffer(traXml, "utf8");
    p7.addCertificate(cert);
    p7.addSigner({
      authenticatedAttributes: [
        {
          type: forge.pki.oids.contentType,
          value: forge.pki.oids.data,
        },
        {
          type: forge.pki.oids.messageDigest,
        },
        {
          type: forge.pki.oids.signingTime,
          value: new Date() as any,
        },
      ],
      certificate: cert,
      digestAlgorithm: forge.pki.oids.sha256,
      key: key,
    });
    p7.sign();
    const bytes = forge.asn1.toDer(p7.toAsn1()).getBytes();
    return Buffer.from(bytes, "binary").toString("base64");
  }

  /**
   * Get token authorization
   * @param serviceName
   * @param cert
   * @param key
   * @returns
   */
  public static async getAccessTicket({
    serviceName,
    cert,
    key,
    prod = false,
  }: GetAccessTicketParam): Promise<IAccessTicket> {
    // Create amd sign TRA
    const traXml = await Parser.jsonToXml(
      AfipAuthenticator.getTRA(serviceName)
    );
    const signedTRA = AfipAuthenticator.signTRA(traXml, cert, key);

    // Request TR
    const client = await AfipAuthenticator.getAuthClient(prod);
    const [loginCmsResult] = await client.loginCmsAsync({ in0: signedTRA });
    return new AccessTicket(loginCmsResult.loginCmsReturn);
  }

  /**
   * Check if ticket access is valid by expiration date
   * @param ta
   * @returns
   */
  public static checkAccessTicket(ta: IAccessTicket): boolean {
    return moment(ta.getExpiration()).isBefore(new Date());
  }

  /**
   * Make auth soap object for afip ws.
   *
   * @param string SOAP Service to use
   * @return Auth object with data required for WS protected
   **/
  public static async getWSAuthParam(
    cuit: number,
    ticket: IAccessTicket
  ): Promise<WSAuthParam> {
    return {
      Auth: {
        Token: ticket.getToken(),
        Sign: ticket.getSign(),
        Cuit: cuit,
      },
    };
  }

  /**
   * Authenticate and get WS Auth param object at the same time.
   *
   * @param string SOAP Service to use
   * @return Auth object with data required for WS protected
   **/
  public static async authAndGetWsAuthParam(
    cuit: number,
    ticketParam: GetAccessTicketParam
  ): Promise<WSAuthParam> {
    const ticket = await AfipAuthenticator.getAccessTicket(ticketParam);
    return AfipAuthenticator.getWSAuthParam(cuit, ticket);
  }
}
