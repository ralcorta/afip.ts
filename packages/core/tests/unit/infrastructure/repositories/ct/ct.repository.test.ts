import { CtRepository } from "@infrastructure/repositories/ct/ct.repository";
import { SoapClient } from "@infrastructure/soap/soap-client";
import { BaseSoapRepositoryConstructorConfig } from "@infrastructure/types/soap-repository.types";
import { ICTServiceSOAPSoap } from "@infrastructure/soap/contracts/CTService/ServiceSoap";
import { WsdlPaths } from "@infrastructure/soap/config/wsdl-path.types";
import { Endpoints } from "@infrastructure/soap/config/endpoints.types";

jest.mock("@infrastructure/soap/soap-client");

describe("CtRepository", () => {
  let repository: CtRepository;
  let mockSoapClient: jest.Mocked<ICTServiceSOAPSoap>;
  let mockConfig: BaseSoapRepositoryConstructorConfig;
  const expectedAuth = {
    authRequest: {
      token: "token",
      sign: "sign",
      cuitRepresentada: 12345678901,
    },
  };

  beforeEach(() => {
    mockSoapClient = {
      dummyAsync: jest.fn(),
      autorizarComprobanteAsync: jest.fn(),
      consultarUltimoComprobanteAutorizadoAsync: jest.fn(),
      consultarComprobanteTipoPVentaNroAsync: jest.fn(),
      consultarPuntosVentaAsync: jest.fn(),
      consultarTiposComprobantesAsync: jest.fn(),
      consultarMonedasAsync: jest.fn(),
      consultarCotizacionAsync: jest.fn(),
      consultarTiposDocumentoAsync: jest.fn(),
      consultarPaisesAsync: jest.fn(),
      consultarCUITsPaisesAsync: jest.fn(),
      consultarTiposIVAAsync: jest.fn(),
      consultarTiposDatosAdicionalesAsync: jest.fn(),
      consultarTiposTributoAsync: jest.fn(),
      consultarCondicionesIVAAsync: jest.fn(),
      consultarNovedadesAsync: jest.fn(),
      consultarFormasPagoAsync: jest.fn(),
      consultarTiposItemAsync: jest.fn(),
      consultarCodigosItemTurismoAsync: jest.fn(),
      consultarRelacionEmisorReceptorAsync: jest.fn(),
      consultarTiposCuentaAsync: jest.fn(),
      consultarTiposTarjetaAsync: jest.fn(),
      setEndpoint: jest.fn(),
      describe: jest.fn().mockReturnValue({
        Service: {
          ServiceSoap12: {},
        },
      }),
    } as never;

    (SoapClient.prototype.createClient as jest.Mock).mockResolvedValue(
      mockSoapClient,
    );
    jest.spyOn(SoapClient.prototype, "setEndpoint").mockImplementation(() => {});

    const mockAuthRepository = {
      login: jest.fn().mockResolvedValue({ token: "token", sign: "sign" }),
      getAuthParams: jest.fn().mockReturnValue({
        Auth: { Token: "token", Sign: "sign", Cuit: 12345678901 },
      }),
    } as never;

    mockConfig = {
      authRepository: mockAuthRepository,
      cuit: 12345678901,
      production: false,
    };

    repository = new CtRepository(mockConfig);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("dummy", () => {
    it("delegates to SOAP dummyAsync", async () => {
      const mockResponse = { dummyReturn: {} };
      mockSoapClient.dummyAsync.mockResolvedValue([mockResponse] as never);

      const result = await repository.dummy();

      expect(result).toEqual(mockResponse);
      expect(mockSoapClient.dummyAsync).toHaveBeenCalledWith({});
    });
  });

  describe("autorizarComprobante", () => {
    it("delegates to SOAP autorizarComprobanteAsync", async () => {
      const mockResponse = { autorizarComprobanteReturn: {} };
      mockSoapClient.autorizarComprobanteAsync.mockResolvedValue([mockResponse] as never);
      const input = {};

      const result = await repository.autorizarComprobante(input as never);

      expect(result).toEqual(mockResponse);
      expect(mockSoapClient.autorizarComprobanteAsync).toHaveBeenCalledWith({ ...input, ...expectedAuth });
    });
  });

  describe("consultarUltimoComprobanteAutorizado", () => {
    it("delegates to SOAP consultarUltimoComprobanteAutorizadoAsync", async () => {
      const mockResponse = { consultarUltimoComprobanteAutorizadoReturn: {} };
      mockSoapClient.consultarUltimoComprobanteAutorizadoAsync.mockResolvedValue([mockResponse] as never);
      const input = {};

      const result = await repository.consultarUltimoComprobanteAutorizado(input as never);

      expect(result).toEqual(mockResponse);
      expect(mockSoapClient.consultarUltimoComprobanteAutorizadoAsync).toHaveBeenCalledWith({ ...input, ...expectedAuth });
    });
  });

  describe("consultarComprobanteTipoPVentaNro", () => {
    it("delegates to SOAP consultarComprobanteTipoPVentaNroAsync", async () => {
      const mockResponse = { consultarComprobanteReturn: {} };
      mockSoapClient.consultarComprobanteTipoPVentaNroAsync.mockResolvedValue([mockResponse] as never);
      const input = {};

      const result = await repository.consultarComprobanteTipoPVentaNro(input as never);

      expect(result).toEqual(mockResponse);
      expect(mockSoapClient.consultarComprobanteTipoPVentaNroAsync).toHaveBeenCalledWith({ ...input, ...expectedAuth });
    });
  });

  describe("consultarPuntosVenta", () => {
    it("delegates to SOAP consultarPuntosVentaAsync", async () => {
      const mockResponse = { consultarPuntosVentaReturn: {} };
      mockSoapClient.consultarPuntosVentaAsync.mockResolvedValue([mockResponse] as never);

      const result = await repository.consultarPuntosVenta();

      expect(result).toEqual(mockResponse);
      expect(mockSoapClient.consultarPuntosVentaAsync).toHaveBeenCalledWith({ ...expectedAuth });
    });
  });

  describe("consultarTiposComprobantes", () => {
    it("delegates to SOAP consultarTiposComprobantesAsync", async () => {
      const mockResponse = { consultarTiposComprobantesReturn: {} };
      mockSoapClient.consultarTiposComprobantesAsync.mockResolvedValue([mockResponse] as never);

      const result = await repository.consultarTiposComprobantes();

      expect(result).toEqual(mockResponse);
      expect(mockSoapClient.consultarTiposComprobantesAsync).toHaveBeenCalledWith({ ...expectedAuth });
    });
  });

  describe("consultarMonedas", () => {
    it("delegates to SOAP consultarMonedasAsync", async () => {
      const mockResponse = { consultarMonedasReturn: {} };
      mockSoapClient.consultarMonedasAsync.mockResolvedValue([mockResponse] as never);

      const result = await repository.consultarMonedas();

      expect(result).toEqual(mockResponse);
      expect(mockSoapClient.consultarMonedasAsync).toHaveBeenCalledWith({ ...expectedAuth });
    });
  });

  describe("consultarCotizacion", () => {
    it("delegates to SOAP consultarCotizacionAsync", async () => {
      const mockResponse = { consultarCotizacionReturn: {} };
      mockSoapClient.consultarCotizacionAsync.mockResolvedValue([mockResponse] as never);
      const input = {};

      const result = await repository.consultarCotizacion(input as never);

      expect(result).toEqual(mockResponse);
      expect(mockSoapClient.consultarCotizacionAsync).toHaveBeenCalledWith({ ...input, ...expectedAuth });
    });
  });

  describe("consultarTiposDocumento", () => {
    it("delegates to SOAP consultarTiposDocumentoAsync", async () => {
      const mockResponse = { consultarTiposDocumentoReturn: {} };
      mockSoapClient.consultarTiposDocumentoAsync.mockResolvedValue([mockResponse] as never);

      const result = await repository.consultarTiposDocumento();

      expect(result).toEqual(mockResponse);
      expect(mockSoapClient.consultarTiposDocumentoAsync).toHaveBeenCalledWith({ ...expectedAuth });
    });
  });

  describe("consultarPaises", () => {
    it("delegates to SOAP consultarPaisesAsync", async () => {
      const mockResponse = { consultarPaisesReturn: {} };
      mockSoapClient.consultarPaisesAsync.mockResolvedValue([mockResponse] as never);

      const result = await repository.consultarPaises();

      expect(result).toEqual(mockResponse);
      expect(mockSoapClient.consultarPaisesAsync).toHaveBeenCalledWith({ ...expectedAuth });
    });
  });

  describe("consultarCUITsPaises", () => {
    it("delegates to SOAP consultarCUITsPaisesAsync", async () => {
      const mockResponse = { consultarCUITsPaisesReturn: {} };
      mockSoapClient.consultarCUITsPaisesAsync.mockResolvedValue([mockResponse] as never);

      const result = await repository.consultarCUITsPaises();

      expect(result).toEqual(mockResponse);
      expect(mockSoapClient.consultarCUITsPaisesAsync).toHaveBeenCalledWith({ ...expectedAuth });
    });
  });

  describe("consultarTiposIVA", () => {
    it("delegates to SOAP consultarTiposIVAAsync", async () => {
      const mockResponse = { consultarTiposIVAReturn: {} };
      mockSoapClient.consultarTiposIVAAsync.mockResolvedValue([mockResponse] as never);

      const result = await repository.consultarTiposIVA();

      expect(result).toEqual(mockResponse);
      expect(mockSoapClient.consultarTiposIVAAsync).toHaveBeenCalledWith({ ...expectedAuth });
    });
  });

  describe("consultarTiposDatosAdicionales", () => {
    it("delegates to SOAP consultarTiposDatosAdicionalesAsync", async () => {
      const mockResponse = { consultarTiposDatosAdicionalesReturn: {} };
      mockSoapClient.consultarTiposDatosAdicionalesAsync.mockResolvedValue([mockResponse] as never);

      const result = await repository.consultarTiposDatosAdicionales();

      expect(result).toEqual(mockResponse);
      expect(mockSoapClient.consultarTiposDatosAdicionalesAsync).toHaveBeenCalledWith({ ...expectedAuth });
    });
  });

  describe("consultarTiposTributo", () => {
    it("delegates to SOAP consultarTiposTributoAsync", async () => {
      const mockResponse = { consultarTiposTributoReturn: {} };
      mockSoapClient.consultarTiposTributoAsync.mockResolvedValue([mockResponse] as never);

      const result = await repository.consultarTiposTributo();

      expect(result).toEqual(mockResponse);
      expect(mockSoapClient.consultarTiposTributoAsync).toHaveBeenCalledWith({ ...expectedAuth });
    });
  });

  describe("consultarCondicionesIVA", () => {
    it("delegates to SOAP consultarCondicionesIVAAsync", async () => {
      const mockResponse = { consultarCondicionesIVAReturn: {} };
      mockSoapClient.consultarCondicionesIVAAsync.mockResolvedValue([mockResponse] as never);

      const result = await repository.consultarCondicionesIVA();

      expect(result).toEqual(mockResponse);
      expect(mockSoapClient.consultarCondicionesIVAAsync).toHaveBeenCalledWith({ ...expectedAuth });
    });
  });

  describe("consultarNovedades", () => {
    it("delegates to SOAP consultarNovedadesAsync", async () => {
      const mockResponse = { ConsultarNovedadesReturn: {} };
      mockSoapClient.consultarNovedadesAsync.mockResolvedValue([mockResponse] as never);

      const result = await repository.consultarNovedades();

      expect(result).toEqual(mockResponse);
      expect(mockSoapClient.consultarNovedadesAsync).toHaveBeenCalledWith({ ...expectedAuth });
    });
  });

  describe("consultarFormasPago", () => {
    it("delegates to SOAP consultarFormasPagoAsync", async () => {
      const mockResponse = { consultarFormasPagoReturn: {} };
      mockSoapClient.consultarFormasPagoAsync.mockResolvedValue([mockResponse] as never);

      const result = await repository.consultarFormasPago();

      expect(result).toEqual(mockResponse);
      expect(mockSoapClient.consultarFormasPagoAsync).toHaveBeenCalledWith({ ...expectedAuth });
    });
  });

  describe("consultarTiposItem", () => {
    it("delegates to SOAP consultarTiposItemAsync", async () => {
      const mockResponse = { consultarTiposItemReturn: {} };
      mockSoapClient.consultarTiposItemAsync.mockResolvedValue([mockResponse] as never);

      const result = await repository.consultarTiposItem();

      expect(result).toEqual(mockResponse);
      expect(mockSoapClient.consultarTiposItemAsync).toHaveBeenCalledWith({ ...expectedAuth });
    });
  });

  describe("consultarCodigosItemTurismo", () => {
    it("delegates to SOAP consultarCodigosItemTurismoAsync", async () => {
      const mockResponse = { consultarCodigosItemTurismoReturn: {} };
      mockSoapClient.consultarCodigosItemTurismoAsync.mockResolvedValue([mockResponse] as never);

      const result = await repository.consultarCodigosItemTurismo();

      expect(result).toEqual(mockResponse);
      expect(mockSoapClient.consultarCodigosItemTurismoAsync).toHaveBeenCalledWith({ ...expectedAuth });
    });
  });

  describe("consultarRelacionEmisorReceptor", () => {
    it("delegates to SOAP consultarRelacionEmisorReceptorAsync", async () => {
      const mockResponse = { consultarRelacionEmisorReceptorReturn: {} };
      mockSoapClient.consultarRelacionEmisorReceptorAsync.mockResolvedValue([mockResponse] as never);

      const result = await repository.consultarRelacionEmisorReceptor();

      expect(result).toEqual(mockResponse);
      expect(mockSoapClient.consultarRelacionEmisorReceptorAsync).toHaveBeenCalledWith({ ...expectedAuth });
    });
  });

  describe("consultarTiposCuenta", () => {
    it("delegates to SOAP consultarTiposCuentaAsync", async () => {
      const mockResponse = { consultarTiposCuentaReturn: {} };
      mockSoapClient.consultarTiposCuentaAsync.mockResolvedValue([mockResponse] as never);

      const result = await repository.consultarTiposCuenta();

      expect(result).toEqual(mockResponse);
      expect(mockSoapClient.consultarTiposCuentaAsync).toHaveBeenCalledWith({ ...expectedAuth });
    });
  });

  describe("consultarTiposTarjeta", () => {
    it("delegates to SOAP consultarTiposTarjetaAsync", async () => {
      const mockResponse = { consultarTiposTarjetaReturn: {} };
      mockSoapClient.consultarTiposTarjetaAsync.mockResolvedValue([mockResponse] as never);
      const input = {};

      const result = await repository.consultarTiposTarjeta(input as never);

      expect(result).toEqual(mockResponse);
      expect(mockSoapClient.consultarTiposTarjetaAsync).toHaveBeenCalledWith({ ...input, ...expectedAuth });
    });
  });

  describe("client caching", () => {
    it("reuses the cached SOAP client on consecutive calls", async () => {
      mockSoapClient.consultarTiposComprobantesAsync.mockResolvedValue([
        { consultarTiposComprobantesReturn: {} },
      ] as never);

      await repository.consultarTiposComprobantes();
      await repository.consultarTiposComprobantes();

      expect(SoapClient.prototype.createClient).toHaveBeenCalledTimes(1);
    });
  });

  describe("production endpoints", () => {
    it("uses production WSDL and endpoint", async () => {
      repository = new CtRepository({ ...mockConfig, production: true });
      mockSoapClient.dummyAsync.mockResolvedValue([
        { dummyReturn: {} },
      ] as never);

      await repository.dummy();

      expect(SoapClient.prototype.createClient).toHaveBeenCalledWith(
        WsdlPaths.WSCT,
        expect.objectContaining({ forceSoap12Headers: false }),
      );
      expect(SoapClient.prototype.setEndpoint).toHaveBeenCalledWith(
        mockSoapClient,
        Endpoints.WSCT,
      );
    });
  });

  describe("testing endpoints", () => {
    it("uses homologation WSDL and endpoint", async () => {
      mockSoapClient.dummyAsync.mockResolvedValue([
        { dummyReturn: {} },
      ] as never);

      await repository.dummy();

      expect(SoapClient.prototype.createClient).toHaveBeenCalledWith(
        WsdlPaths.WSCT_TEST,
        expect.objectContaining({ forceSoap12Headers: false }),
      );
      expect(SoapClient.prototype.setEndpoint).toHaveBeenCalledWith(
        mockSoapClient,
        Endpoints.WSCT_TEST,
      );
    });
  });
});
