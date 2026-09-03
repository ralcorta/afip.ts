import {
  ICtDummyOutput,
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
} from "@application/dto/ct";

export interface ICtRepositoryPort {
  dummy(): Promise<ICtDummyOutput>;

  autorizarComprobante(
    input: IautorizarComprobanteInput,
  ): Promise<IautorizarComprobanteOutput>;

  consultarUltimoComprobanteAutorizado(
    input: IconsultarUltimoComprobanteAutorizadoInput,
  ): Promise<IconsultarUltimoComprobanteAutorizadoOutput>;

  consultarComprobanteTipoPVentaNro(
    input: IconsultarComprobanteTipoPVentaNroInput,
  ): Promise<IconsultarComprobanteTipoPVentaNroOutput>;

  consultarPuntosVenta(): Promise<IconsultarPuntosVentaOutput>;

  consultarTiposComprobantes(): Promise<IconsultarTiposComprobantesOutput>;

  consultarMonedas(): Promise<IconsultarMonedasOutput>;

  consultarCotizacion(
    input: IconsultarCotizacionInput,
  ): Promise<IconsultarCotizacionOutput>;

  consultarTiposDocumento(): Promise<IconsultarTiposDocumentoOutput>;

  consultarPaises(): Promise<IconsultarPaisesOutput>;

  consultarCUITsPaises(): Promise<IconsultarCUITsPaisesOutput>;

  consultarTiposIVA(): Promise<IconsultarTiposIVAOutput>;

  consultarTiposDatosAdicionales(): Promise<IconsultarTiposDatosAdicionalesOutput>;

  consultarTiposTributo(): Promise<IconsultarTiposTributoOutput>;

  consultarCondicionesIVA(): Promise<IconsultarCondicionesIVAOutput>;

  consultarNovedades(): Promise<IconsultarNovedadesOutput>;

  consultarFormasPago(): Promise<IconsultarFormasPagoOutput>;

  consultarTiposItem(): Promise<IconsultarTiposItemOutput>;

  consultarCodigosItemTurismo(): Promise<IconsultarCodigosItemTurismoOutput>;

  consultarRelacionEmisorReceptor(): Promise<IconsultarRelacionEmisorReceptorOutput>;

  consultarTiposCuenta(): Promise<IconsultarTiposCuentaOutput>;

  consultarTiposTarjeta(
    input: IconsultarTiposTarjetaInput,
  ): Promise<IconsultarTiposTarjetaOutput>;
}
