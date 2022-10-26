import { Client } from "soap";
import { AfipContext } from "../afip-context";
import { AccessTicket } from "../auth/access-ticket";
import { AfipAuth } from "../auth/afip-auth";
import { HandlerMethodEnum } from "../auth/handler-method.enum";
import { WSAuthParam, WSAuthTokens } from "../auth/types";
import { EndpointsEnum } from "../endpoints.enum";
import { ServiceNamesEnum } from "../soap/service-names.enum";
import { SoapClientFacade, SoapClientParams } from "../soap/soap-client-facade";
import { WsdlPathEnum } from "../soap/wsdl-path.enum";

type AfipServiceSoapParam = SoapClientParams & {
  url: EndpointsEnum;
  url_test?: EndpointsEnum;
  wsdl_test?: WsdlPathEnum;
} & { serviceName: ServiceNamesEnum };

export class AfipService<T extends Client> {
  private _soapCliente?: T;
  private _tokens?: WSAuthTokens;
  private readonly _serviceName: ServiceNamesEnum;
  private readonly _afipAuth: AfipAuth;

  constructor(
    protected readonly context: AfipContext,
    private _soapParams: AfipServiceSoapParam
  ) {
    this._afipAuth = new AfipAuth(context);
    this._serviceName = this._soapParams.serviceName;
    this._tokens = this.context.authTokens;

    if (!this.context.production) {
      this._soapParams.url = this._soapParams.url_test ?? this._soapParams.url;
      this._soapParams.wsdl =
        this._soapParams.wsdl_test ?? this._soapParams.wsdl;
    }
  }

  public setTokens(tokens: WSAuthTokens): void {
    this._tokens = tokens;
  }

  protected async soapClient(): Promise<T> {
    if (!this._soapCliente) {
      this._soapCliente = await SoapClientFacade.create<T>({
        wsdl: this._soapParams.wsdl,
        options: {
          disableCache: true,
          ...this._soapParams.options,
        },
      });
      this._soapCliente.setEndpoint(this._soapParams.url);
    }

    return this._soapCliente;
  }

  public async logIn(): Promise<WSAuthTokens> {
    if (!this._tokens) {
      if (this.context.handleTicket)
        throw new Error(
          "Tokens are not defined yet. Set it when Afip class is instanced."
        );

      let ticket = await this._afipAuth.getLocalAccessTicket(this._serviceName);
      if (!ticket) {
        ticket = await this._afipAuth.getAccessTicket(this._serviceName);
        await this._afipAuth.saveLocalAccessTicket(ticket, this._serviceName);
      }
      this._tokens = ticket.getAuthKeyProps();
    }

    return this._tokens;
  }

  /**
   * Send request to AFIP WSAA and return the auth object required for protected services
   *
   * @param params Parameters to send
   **/
  protected async getAuthTokens(): Promise<WSAuthParam> {
    if (this._tokens) {
      if (AccessTicket.hasExpired(this._tokens.expirationDate)) {
        if (this.context.handleTicket) {
          throw new Error("Tokens expired.");
        }
      } else {
        return {
          Auth: {
            Cuit: this.context.cuit,
            Sign: this._tokens.sign,
            Token: this._tokens.token,
          },
        };
      }
    }

    this._tokens = await this.logIn();

    return {
      Auth: {
        Token: this._tokens.token,
        Sign: this._tokens.sign,
        Cuit: this.context.cuit,
      },
    };
  }
}
