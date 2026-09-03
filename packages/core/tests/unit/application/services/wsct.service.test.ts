import { WsctService } from "@application/services/wsct.service";
import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";

describe("WsctService", () => {
  let service: WsctService;
  let mockRepository: jest.Mocked<ICtRepositoryPort>;

  beforeEach(() => {
    mockRepository = {
      dummy: jest.fn(),
      autorizarComprobante: jest.fn(),
      consultarUltimoComprobanteAutorizado: jest.fn(),
      consultarComprobanteTipoPVentaNro: jest.fn(),
      consultarPuntosVenta: jest.fn(),
      consultarTiposComprobantes: jest.fn(),
      consultarMonedas: jest.fn(),
      consultarCotizacion: jest.fn(),
      consultarTiposDocumento: jest.fn(),
      consultarPaises: jest.fn(),
      consultarCUITsPaises: jest.fn(),
      consultarTiposIVA: jest.fn(),
      consultarTiposDatosAdicionales: jest.fn(),
      consultarTiposTributo: jest.fn(),
      consultarCondicionesIVA: jest.fn(),
      consultarNovedades: jest.fn(),
      consultarFormasPago: jest.fn(),
      consultarTiposItem: jest.fn(),
      consultarCodigosItemTurismo: jest.fn(),
      consultarRelacionEmisorReceptor: jest.fn(),
      consultarTiposCuenta: jest.fn(),
      consultarTiposTarjeta: jest.fn(),
    } as jest.Mocked<ICtRepositoryPort>;

    service = new WsctService(mockRepository);
  });

  it("dummy delegates to repository", async () => {
    const expected = { dummyReturn: {} };
    mockRepository.dummy.mockResolvedValue(expected as never);

    const result = await service.dummy();

    expect(result).toEqual(expected);
  });

  it("autorizarComprobante delegates to repository", async () => {
    const input = {} as never;
    const expected = { autorizarComprobanteReturn: {} };
    mockRepository.autorizarComprobante.mockResolvedValue(expected as never);

    const result = await service.autorizarComprobante(input);

    expect(result).toEqual(expected);
  });

  it("consultarUltimoComprobanteAutorizado delegates to repository", async () => {
    const input = {} as never;
    const expected = { consultarUltimoComprobanteAutorizadoReturn: {} };
    mockRepository.consultarUltimoComprobanteAutorizado.mockResolvedValue(expected as never);

    const result = await service.consultarUltimoComprobanteAutorizado(input);

    expect(result).toEqual(expected);
  });

  it("consultarComprobanteTipoPVentaNro delegates to repository", async () => {
    const input = {} as never;
    const expected = { consultarComprobanteReturn: {} };
    mockRepository.consultarComprobanteTipoPVentaNro.mockResolvedValue(expected as never);

    const result = await service.consultarComprobanteTipoPVentaNro(input);

    expect(result).toEqual(expected);
  });

  it("consultarPuntosVenta delegates to repository", async () => {
    const expected = { consultarPuntosVentaReturn: {} };
    mockRepository.consultarPuntosVenta.mockResolvedValue(expected as never);

    const result = await service.consultarPuntosVenta();

    expect(result).toEqual(expected);
  });

  it("consultarTiposComprobantes delegates to repository", async () => {
    const expected = { consultarTiposComprobantesReturn: {} };
    mockRepository.consultarTiposComprobantes.mockResolvedValue(expected as never);

    const result = await service.consultarTiposComprobantes();

    expect(result).toEqual(expected);
  });

  it("consultarMonedas delegates to repository", async () => {
    const expected = { consultarMonedasReturn: {} };
    mockRepository.consultarMonedas.mockResolvedValue(expected as never);

    const result = await service.consultarMonedas();

    expect(result).toEqual(expected);
  });

  it("consultarCotizacion delegates to repository", async () => {
    const input = {} as never;
    const expected = { consultarCotizacionReturn: {} };
    mockRepository.consultarCotizacion.mockResolvedValue(expected as never);

    const result = await service.consultarCotizacion(input);

    expect(result).toEqual(expected);
  });

  it("consultarTiposDocumento delegates to repository", async () => {
    const expected = { consultarTiposDocumentoReturn: {} };
    mockRepository.consultarTiposDocumento.mockResolvedValue(expected as never);

    const result = await service.consultarTiposDocumento();

    expect(result).toEqual(expected);
  });

  it("consultarPaises delegates to repository", async () => {
    const expected = { consultarPaisesReturn: {} };
    mockRepository.consultarPaises.mockResolvedValue(expected as never);

    const result = await service.consultarPaises();

    expect(result).toEqual(expected);
  });

  it("consultarCUITsPaises delegates to repository", async () => {
    const expected = { consultarCUITsPaisesReturn: {} };
    mockRepository.consultarCUITsPaises.mockResolvedValue(expected as never);

    const result = await service.consultarCUITsPaises();

    expect(result).toEqual(expected);
  });

  it("consultarTiposIVA delegates to repository", async () => {
    const expected = { consultarTiposIVAReturn: {} };
    mockRepository.consultarTiposIVA.mockResolvedValue(expected as never);

    const result = await service.consultarTiposIVA();

    expect(result).toEqual(expected);
  });

  it("consultarTiposDatosAdicionales delegates to repository", async () => {
    const expected = { consultarTiposDatosAdicionalesReturn: {} };
    mockRepository.consultarTiposDatosAdicionales.mockResolvedValue(expected as never);

    const result = await service.consultarTiposDatosAdicionales();

    expect(result).toEqual(expected);
  });

  it("consultarTiposTributo delegates to repository", async () => {
    const expected = { consultarTiposTributoReturn: {} };
    mockRepository.consultarTiposTributo.mockResolvedValue(expected as never);

    const result = await service.consultarTiposTributo();

    expect(result).toEqual(expected);
  });

  it("consultarCondicionesIVA delegates to repository", async () => {
    const expected = { consultarCondicionesIVAReturn: {} };
    mockRepository.consultarCondicionesIVA.mockResolvedValue(expected as never);

    const result = await service.consultarCondicionesIVA();

    expect(result).toEqual(expected);
  });

  it("consultarNovedades delegates to repository", async () => {
    const expected = { ConsultarNovedadesReturn: {} };
    mockRepository.consultarNovedades.mockResolvedValue(expected as never);

    const result = await service.consultarNovedades();

    expect(result).toEqual(expected);
  });

  it("consultarFormasPago delegates to repository", async () => {
    const expected = { consultarFormasPagoReturn: {} };
    mockRepository.consultarFormasPago.mockResolvedValue(expected as never);

    const result = await service.consultarFormasPago();

    expect(result).toEqual(expected);
  });

  it("consultarTiposItem delegates to repository", async () => {
    const expected = { consultarTiposItemReturn: {} };
    mockRepository.consultarTiposItem.mockResolvedValue(expected as never);

    const result = await service.consultarTiposItem();

    expect(result).toEqual(expected);
  });

  it("consultarCodigosItemTurismo delegates to repository", async () => {
    const expected = { consultarCodigosItemTurismoReturn: {} };
    mockRepository.consultarCodigosItemTurismo.mockResolvedValue(expected as never);

    const result = await service.consultarCodigosItemTurismo();

    expect(result).toEqual(expected);
  });

  it("consultarRelacionEmisorReceptor delegates to repository", async () => {
    const expected = { consultarRelacionEmisorReceptorReturn: {} };
    mockRepository.consultarRelacionEmisorReceptor.mockResolvedValue(expected as never);

    const result = await service.consultarRelacionEmisorReceptor();

    expect(result).toEqual(expected);
  });

  it("consultarTiposCuenta delegates to repository", async () => {
    const expected = { consultarTiposCuentaReturn: {} };
    mockRepository.consultarTiposCuenta.mockResolvedValue(expected as never);

    const result = await service.consultarTiposCuenta();

    expect(result).toEqual(expected);
  });

  it("consultarTiposTarjeta delegates to repository", async () => {
    const input = {} as never;
    const expected = { consultarTiposTarjetaReturn: {} };
    mockRepository.consultarTiposTarjeta.mockResolvedValue(expected as never);

    const result = await service.consultarTiposTarjeta(input);

    expect(result).toEqual(expected);
  });
});
