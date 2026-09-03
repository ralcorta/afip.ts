import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";
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
import { CtDummyUseCase } from "@application/use-cases/wsct/dummy.use-case";
import { AutorizarComprobanteUseCase } from "@application/use-cases/wsct/autorizar-comprobante.use-case";
import { ConsultarUltimoComprobanteAutorizadoUseCase } from "@application/use-cases/wsct/consultar-ultimo-comprobante-autorizado.use-case";
import { ConsultarComprobanteTipoPVentaNroUseCase } from "@application/use-cases/wsct/consultar-comprobante-tipo-p-venta-nro.use-case";
import { ConsultarPuntosVentaUseCase } from "@application/use-cases/wsct/consultar-puntos-venta.use-case";
import { ConsultarTiposComprobantesUseCase } from "@application/use-cases/wsct/consultar-tipos-comprobantes.use-case";
import { ConsultarMonedasUseCase } from "@application/use-cases/wsct/consultar-monedas.use-case";
import { ConsultarCotizacionUseCase } from "@application/use-cases/wsct/consultar-cotizacion.use-case";
import { ConsultarTiposDocumentoUseCase } from "@application/use-cases/wsct/consultar-tipos-documento.use-case";
import { ConsultarPaisesUseCase } from "@application/use-cases/wsct/consultar-paises.use-case";
import { ConsultarCUITsPaisesUseCase } from "@application/use-cases/wsct/consultar-cuits-paises.use-case";
import { ConsultarTiposIVAUseCase } from "@application/use-cases/wsct/consultar-tipos-iva.use-case";
import { ConsultarTiposDatosAdicionalesUseCase } from "@application/use-cases/wsct/consultar-tipos-datos-adicionales.use-case";
import { ConsultarTiposTributoUseCase } from "@application/use-cases/wsct/consultar-tipos-tributo.use-case";
import { ConsultarCondicionesIVAUseCase } from "@application/use-cases/wsct/consultar-condiciones-iva.use-case";
import { ConsultarNovedadesUseCase } from "@application/use-cases/wsct/consultar-novedades.use-case";
import { ConsultarFormasPagoUseCase } from "@application/use-cases/wsct/consultar-formas-pago.use-case";
import { ConsultarTiposItemUseCase } from "@application/use-cases/wsct/consultar-tipos-item.use-case";
import { ConsultarCodigosItemTurismoUseCase } from "@application/use-cases/wsct/consultar-codigos-item-turismo.use-case";
import { ConsultarRelacionEmisorReceptorUseCase } from "@application/use-cases/wsct/consultar-relacion-emisor-receptor.use-case";
import { ConsultarTiposCuentaUseCase } from "@application/use-cases/wsct/consultar-tipos-cuenta.use-case";
import { ConsultarTiposTarjetaUseCase } from "@application/use-cases/wsct/consultar-tipos-tarjeta.use-case";

export class WsctService {
  private readonly dummyUseCase: CtDummyUseCase;
  private readonly autorizarComprobanteUseCase: AutorizarComprobanteUseCase;
  private readonly consultarUltimoComprobanteAutorizadoUseCase: ConsultarUltimoComprobanteAutorizadoUseCase;
  private readonly consultarComprobanteTipoPVentaNroUseCase: ConsultarComprobanteTipoPVentaNroUseCase;
  private readonly consultarPuntosVentaUseCase: ConsultarPuntosVentaUseCase;
  private readonly consultarTiposComprobantesUseCase: ConsultarTiposComprobantesUseCase;
  private readonly consultarMonedasUseCase: ConsultarMonedasUseCase;
  private readonly consultarCotizacionUseCase: ConsultarCotizacionUseCase;
  private readonly consultarTiposDocumentoUseCase: ConsultarTiposDocumentoUseCase;
  private readonly consultarPaisesUseCase: ConsultarPaisesUseCase;
  private readonly consultarCUITsPaisesUseCase: ConsultarCUITsPaisesUseCase;
  private readonly consultarTiposIVAUseCase: ConsultarTiposIVAUseCase;
  private readonly consultarTiposDatosAdicionalesUseCase: ConsultarTiposDatosAdicionalesUseCase;
  private readonly consultarTiposTributoUseCase: ConsultarTiposTributoUseCase;
  private readonly consultarCondicionesIVAUseCase: ConsultarCondicionesIVAUseCase;
  private readonly consultarNovedadesUseCase: ConsultarNovedadesUseCase;
  private readonly consultarFormasPagoUseCase: ConsultarFormasPagoUseCase;
  private readonly consultarTiposItemUseCase: ConsultarTiposItemUseCase;
  private readonly consultarCodigosItemTurismoUseCase: ConsultarCodigosItemTurismoUseCase;
  private readonly consultarRelacionEmisorReceptorUseCase: ConsultarRelacionEmisorReceptorUseCase;
  private readonly consultarTiposCuentaUseCase: ConsultarTiposCuentaUseCase;
  private readonly consultarTiposTarjetaUseCase: ConsultarTiposTarjetaUseCase;

  constructor(private readonly repository: ICtRepositoryPort) {
    this.dummyUseCase = new CtDummyUseCase(this.repository);
    this.autorizarComprobanteUseCase = new AutorizarComprobanteUseCase(
      this.repository,
    );
    this.consultarUltimoComprobanteAutorizadoUseCase =
      new ConsultarUltimoComprobanteAutorizadoUseCase(this.repository);
    this.consultarComprobanteTipoPVentaNroUseCase =
      new ConsultarComprobanteTipoPVentaNroUseCase(this.repository);
    this.consultarPuntosVentaUseCase = new ConsultarPuntosVentaUseCase(
      this.repository,
    );
    this.consultarTiposComprobantesUseCase =
      new ConsultarTiposComprobantesUseCase(this.repository);
    this.consultarMonedasUseCase = new ConsultarMonedasUseCase(this.repository);
    this.consultarCotizacionUseCase = new ConsultarCotizacionUseCase(
      this.repository,
    );
    this.consultarTiposDocumentoUseCase = new ConsultarTiposDocumentoUseCase(
      this.repository,
    );
    this.consultarPaisesUseCase = new ConsultarPaisesUseCase(this.repository);
    this.consultarCUITsPaisesUseCase = new ConsultarCUITsPaisesUseCase(
      this.repository,
    );
    this.consultarTiposIVAUseCase = new ConsultarTiposIVAUseCase(
      this.repository,
    );
    this.consultarTiposDatosAdicionalesUseCase =
      new ConsultarTiposDatosAdicionalesUseCase(this.repository);
    this.consultarTiposTributoUseCase = new ConsultarTiposTributoUseCase(
      this.repository,
    );
    this.consultarCondicionesIVAUseCase = new ConsultarCondicionesIVAUseCase(
      this.repository,
    );
    this.consultarNovedadesUseCase = new ConsultarNovedadesUseCase(
      this.repository,
    );
    this.consultarFormasPagoUseCase = new ConsultarFormasPagoUseCase(
      this.repository,
    );
    this.consultarTiposItemUseCase = new ConsultarTiposItemUseCase(
      this.repository,
    );
    this.consultarCodigosItemTurismoUseCase =
      new ConsultarCodigosItemTurismoUseCase(this.repository);
    this.consultarRelacionEmisorReceptorUseCase =
      new ConsultarRelacionEmisorReceptorUseCase(this.repository);
    this.consultarTiposCuentaUseCase = new ConsultarTiposCuentaUseCase(
      this.repository,
    );
    this.consultarTiposTarjetaUseCase = new ConsultarTiposTarjetaUseCase(
      this.repository,
    );
  }

  async dummy(): Promise<ICtDummyOutput> {
    return this.dummyUseCase.execute();
  }

  async autorizarComprobante(
    input: IautorizarComprobanteInput,
  ): Promise<IautorizarComprobanteOutput> {
    return this.autorizarComprobanteUseCase.execute(input);
  }

  async consultarUltimoComprobanteAutorizado(
    input: IconsultarUltimoComprobanteAutorizadoInput,
  ): Promise<IconsultarUltimoComprobanteAutorizadoOutput> {
    return this.consultarUltimoComprobanteAutorizadoUseCase.execute(input);
  }

  async consultarComprobanteTipoPVentaNro(
    input: IconsultarComprobanteTipoPVentaNroInput,
  ): Promise<IconsultarComprobanteTipoPVentaNroOutput> {
    return this.consultarComprobanteTipoPVentaNroUseCase.execute(input);
  }

  async consultarPuntosVenta(): Promise<IconsultarPuntosVentaOutput> {
    return this.consultarPuntosVentaUseCase.execute();
  }

  async consultarTiposComprobantes(): Promise<IconsultarTiposComprobantesOutput> {
    return this.consultarTiposComprobantesUseCase.execute();
  }

  async consultarMonedas(): Promise<IconsultarMonedasOutput> {
    return this.consultarMonedasUseCase.execute();
  }

  async consultarCotizacion(
    input: IconsultarCotizacionInput,
  ): Promise<IconsultarCotizacionOutput> {
    return this.consultarCotizacionUseCase.execute(input);
  }

  async consultarTiposDocumento(): Promise<IconsultarTiposDocumentoOutput> {
    return this.consultarTiposDocumentoUseCase.execute();
  }

  async consultarPaises(): Promise<IconsultarPaisesOutput> {
    return this.consultarPaisesUseCase.execute();
  }

  async consultarCUITsPaises(): Promise<IconsultarCUITsPaisesOutput> {
    return this.consultarCUITsPaisesUseCase.execute();
  }

  async consultarTiposIVA(): Promise<IconsultarTiposIVAOutput> {
    return this.consultarTiposIVAUseCase.execute();
  }

  async consultarTiposDatosAdicionales(): Promise<IconsultarTiposDatosAdicionalesOutput> {
    return this.consultarTiposDatosAdicionalesUseCase.execute();
  }

  async consultarTiposTributo(): Promise<IconsultarTiposTributoOutput> {
    return this.consultarTiposTributoUseCase.execute();
  }

  async consultarCondicionesIVA(): Promise<IconsultarCondicionesIVAOutput> {
    return this.consultarCondicionesIVAUseCase.execute();
  }

  async consultarNovedades(): Promise<IconsultarNovedadesOutput> {
    return this.consultarNovedadesUseCase.execute();
  }

  async consultarFormasPago(): Promise<IconsultarFormasPagoOutput> {
    return this.consultarFormasPagoUseCase.execute();
  }

  async consultarTiposItem(): Promise<IconsultarTiposItemOutput> {
    return this.consultarTiposItemUseCase.execute();
  }

  async consultarCodigosItemTurismo(): Promise<IconsultarCodigosItemTurismoOutput> {
    return this.consultarCodigosItemTurismoUseCase.execute();
  }

  async consultarRelacionEmisorReceptor(): Promise<IconsultarRelacionEmisorReceptorOutput> {
    return this.consultarRelacionEmisorReceptorUseCase.execute();
  }

  async consultarTiposCuenta(): Promise<IconsultarTiposCuentaOutput> {
    return this.consultarTiposCuentaUseCase.execute();
  }

  async consultarTiposTarjeta(
    input: IconsultarTiposTarjetaInput,
  ): Promise<IconsultarTiposTarjetaOutput> {
    return this.consultarTiposTarjetaUseCase.execute(input);
  }
}
