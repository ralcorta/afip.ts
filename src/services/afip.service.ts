import { Client } from "soap";
import { AfipContext } from "../afip-context";
import { AfipAuthenticator } from "../auth/afip-auth";
import { EndpointsEnum } from "../endpoints.enum";
import { WSAuthParam } from "../auth/ws-auth-param";
import { ServiceNamesEnum } from "../soap/service-names.enum";
import {
  SoapClient,
  SoapClientFacade,
  SoapClientParams,
} from "../soap/soap-client-facade";
import { WsdlPathEnum } from "../soap/wsdl-path.enum";

export class AfipService<T extends Client> {
  private _soapCliente?: SoapClient<T>;

  constructor(
    protected readonly context: AfipContext,
    private _soapParams: SoapClientParams & {
      url: EndpointsEnum;
      url_test?: EndpointsEnum;
      wsdl_test?: WsdlPathEnum;
    }
  ) {
    const { production } = this.context;
    if (!production) {
      this._soapParams.url = this._soapParams.url_test ?? this._soapParams.url;
      this._soapParams.wsdl =
        this._soapParams.wsdl_test ?? this._soapParams.wsdl;
    }
  }

  protected async soapClient(): Promise<SoapClient<T>> {
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

  /**
   * Send request to AFIP WSAA and return the auth object required for protected services
   *
   * @param serviceName SOAP service name to execute
   * @param params Parameters to send
   **/
  async getAuth(serviceName: ServiceNamesEnum): Promise<WSAuthParam> {
    return await AfipAuthenticator.authAndGetWsAuthParam(this.context.cuit, {
      serviceName,
      cert: this.context.cert,
      key: this.context.key,
      prod: this.context.production,
    });
  }
}
