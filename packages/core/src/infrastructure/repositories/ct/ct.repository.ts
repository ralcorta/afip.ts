import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";
import { BaseSoapRepository } from "../../soap/base-soap-repository";
import { BaseSoapRepositoryConstructorConfig } from "@infrastructure/types/soap-repository.types";
import { ArcaServiceNames } from "@application/types/service-name.types";
import { WsdlPaths } from "@infrastructure/soap/config/wsdl-path.types";
import { Endpoints } from "@infrastructure/soap/config/endpoints.types";
import {
  mapWsctAuth,
  wsctExcludeMethods,
} from "@infrastructure/soap/config/auth-mappers";
import {
  ICTServiceSOAPSoap,
  IdummyOutput as ICtDummyOutput,
  IautorizarComprobanteInput,
  IautorizarComprobanteOutput,
  IconsultarUltimoComprobanteAutorizadoInput,
  IconsultarUltimoComprobanteAutorizadoOutput,
  IconsultarComprobanteTipoPVentaNroInput,
  IconsultarComprobanteTipoPVentaNroOutput,
  IconsultarPuntosVentaOutput,
  IconsultarTiposComprobantesOutput,
  IconsultarMonedasOutput,
  IconsultarCotizacionInput,
  IconsultarCotizacionOutput,
  IconsultarTiposDocumentoOutput,
  IconsultarPaisesOutput,
  IconsultarCUITsPaisesOutput,
  IconsultarTiposIVAOutput,
  IconsultarTiposDatosAdicionalesOutput,
  IconsultarTiposTributoOutput,
  IconsultarCondicionesIVAOutput,
  IconsultarNovedadesOutput,
  IconsultarFormasPagoOutput,
  IconsultarTiposItemOutput,
  IconsultarCodigosItemTurismoOutput,
  IconsultarRelacionEmisorReceptorOutput,
  IconsultarTiposCuentaOutput,
  IconsultarTiposTarjetaInput,
  IconsultarTiposTarjetaOutput,
} from "@infrastructure/soap/contracts/CTService/ServiceSoap";

export class CtRepository
  extends BaseSoapRepository
  implements ICtRepositoryPort
{
  private serviceClient?: ICTServiceSOAPSoap;

  constructor(config: BaseSoapRepositoryConstructorConfig) {
    super(config);
  }

  private async getClient(): Promise<ICTServiceSOAPSoap> {
    if (this.serviceClient) {
      return this.serviceClient;
    }

    const wsdlName = this.production
      ? WsdlPaths.WSCT
      : WsdlPaths.WSCT_TEST;
    const endpoint = this.production
      ? Endpoints.WSCT
      : Endpoints.WSCT_TEST;

    const { client, soapVersion } =
      await this.createSoapClient<ICTServiceSOAPSoap>(wsdlName, {
        forceSoap12Headers: false,
      });

    this.soapClient.setEndpoint(client, endpoint);

    this.serviceClient = this.createAuthenticatedProxy(client, {
      serviceName: ArcaServiceNames.WSCT,
      soapVersion,
      authMapper: mapWsctAuth,
      excludeMethods: wsctExcludeMethods,
    });

    return this.serviceClient;
  }

  async dummy(): Promise<ICtDummyOutput> {
    const client = await this.getClient();
    const [output] = await client.dummyAsync({});
    return output;
  }

  async autorizarComprobante(
    input: IautorizarComprobanteInput,
  ): Promise<IautorizarComprobanteOutput> {
    const client = await this.getClient();
    const [output] = await client.autorizarComprobanteAsync(input);
    return output;
  }

  async consultarUltimoComprobanteAutorizado(
    input: IconsultarUltimoComprobanteAutorizadoInput,
  ): Promise<IconsultarUltimoComprobanteAutorizadoOutput> {
    const client = await this.getClient();
    const [output] = await client.consultarUltimoComprobanteAutorizadoAsync(input);
    return output;
  }

  async consultarComprobanteTipoPVentaNro(
    input: IconsultarComprobanteTipoPVentaNroInput,
  ): Promise<IconsultarComprobanteTipoPVentaNroOutput> {
    const client = await this.getClient();
    const [output] = await client.consultarComprobanteTipoPVentaNroAsync(input);
    return output;
  }

  async consultarPuntosVenta(): Promise<IconsultarPuntosVentaOutput> {
    const client = await this.getClient();
    const [output] = await client.consultarPuntosVentaAsync({});
    return output;
  }

  async consultarTiposComprobantes(): Promise<IconsultarTiposComprobantesOutput> {
    const client = await this.getClient();
    const [output] = await client.consultarTiposComprobantesAsync({});
    return output;
  }

  async consultarMonedas(): Promise<IconsultarMonedasOutput> {
    const client = await this.getClient();
    const [output] = await client.consultarMonedasAsync({});
    return output;
  }

  async consultarCotizacion(
    input: IconsultarCotizacionInput,
  ): Promise<IconsultarCotizacionOutput> {
    const client = await this.getClient();
    const [output] = await client.consultarCotizacionAsync(input);
    return output;
  }

  async consultarTiposDocumento(): Promise<IconsultarTiposDocumentoOutput> {
    const client = await this.getClient();
    const [output] = await client.consultarTiposDocumentoAsync({});
    return output;
  }

  async consultarPaises(): Promise<IconsultarPaisesOutput> {
    const client = await this.getClient();
    const [output] = await client.consultarPaisesAsync({});
    return output;
  }

  async consultarCUITsPaises(): Promise<IconsultarCUITsPaisesOutput> {
    const client = await this.getClient();
    const [output] = await client.consultarCUITsPaisesAsync({});
    return output;
  }

  async consultarTiposIVA(): Promise<IconsultarTiposIVAOutput> {
    const client = await this.getClient();
    const [output] = await client.consultarTiposIVAAsync({});
    return output;
  }

  async consultarTiposDatosAdicionales(): Promise<IconsultarTiposDatosAdicionalesOutput> {
    const client = await this.getClient();
    const [output] = await client.consultarTiposDatosAdicionalesAsync({});
    return output;
  }

  async consultarTiposTributo(): Promise<IconsultarTiposTributoOutput> {
    const client = await this.getClient();
    const [output] = await client.consultarTiposTributoAsync({});
    return output;
  }

  async consultarCondicionesIVA(): Promise<IconsultarCondicionesIVAOutput> {
    const client = await this.getClient();
    const [output] = await client.consultarCondicionesIVAAsync({});
    return output;
  }

  async consultarNovedades(): Promise<IconsultarNovedadesOutput> {
    const client = await this.getClient();
    const [output] = await client.consultarNovedadesAsync({});
    return output;
  }

  async consultarFormasPago(): Promise<IconsultarFormasPagoOutput> {
    const client = await this.getClient();
    const [output] = await client.consultarFormasPagoAsync({});
    return output;
  }

  async consultarTiposItem(): Promise<IconsultarTiposItemOutput> {
    const client = await this.getClient();
    const [output] = await client.consultarTiposItemAsync({});
    return output;
  }

  async consultarCodigosItemTurismo(): Promise<IconsultarCodigosItemTurismoOutput> {
    const client = await this.getClient();
    const [output] = await client.consultarCodigosItemTurismoAsync({});
    return output;
  }

  async consultarRelacionEmisorReceptor(): Promise<IconsultarRelacionEmisorReceptorOutput> {
    const client = await this.getClient();
    const [output] = await client.consultarRelacionEmisorReceptorAsync({});
    return output;
  }

  async consultarTiposCuenta(): Promise<IconsultarTiposCuentaOutput> {
    const client = await this.getClient();
    const [output] = await client.consultarTiposCuentaAsync({});
    return output;
  }

  async consultarTiposTarjeta(
    input: IconsultarTiposTarjetaInput,
  ): Promise<IconsultarTiposTarjetaOutput> {
    const client = await this.getClient();
    const [output] = await client.consultarTiposTarjetaAsync(input);
    return output;
  }
}
