import { describe, expect, it, beforeAll } from "@jest/globals";
import type { Arca } from "@arcasdk/core";
import { createArcaForWsctHomologation } from "./utils/homologation-arca-register";
import { expectNonEmptyString } from "./utils/wsfe-expect";

const enableIntegration = process.env.ENABLE_INTEGRATION_TESTS === "true";
const describeOrSkip = enableIntegration ? describe : describe.skip;

describeOrSkip(
  "WSCT homologación — comprobantes T de turismo (consumidor npm)",
  () => {
    let arca: Arca;

    beforeAll(() => {
      arca = createArcaForWsctHomologation();
    });

    // WSCT dummy endpoint returns [common_001] Acceso Denegado in homologación
    describe.skip("dummy / estado de servidores", () => {
      it("dummy responde con texto no vacío en cada servidor", async () => {
        const result = await arca.wsctService.dummy();
        expect(result).toBeDefined();
        expect(result.dummyReturn).toBeDefined();
        expectNonEmptyString("appserver", result.dummyReturn.appserver);
        expectNonEmptyString("dbserver", result.dummyReturn.dbserver);
        expectNonEmptyString("authserver", result.dummyReturn.authserver);
      });
    });

    describe("consultarTiposComprobantes", () => {
      it("devuelve resultado definido", async () => {
        const result = await arca.wsctService.consultarTiposComprobantes();
        expect(result).toBeDefined();
        expect(result.consultarTiposComprobantesReturn).toBeDefined();
      });
    });

    describe("consultarPuntosVenta", () => {
      it("devuelve resultado definido", async () => {
        const result = await arca.wsctService.consultarPuntosVenta();
        expect(result).toBeDefined();
        expect(result.consultarPuntosVentaReturn).toBeDefined();
      });
    });

    describe("consultarMonedas", () => {
      it("devuelve resultado definido", async () => {
        const result = await arca.wsctService.consultarMonedas();
        expect(result).toBeDefined();
        expect(result.consultarMonedasReturn).toBeDefined();
      });
    });

    describe("consultarTiposDocumento", () => {
      it("devuelve resultado definido", async () => {
        const result = await arca.wsctService.consultarTiposDocumento();
        expect(result).toBeDefined();
        expect(result.consultarTiposDocumentoReturn).toBeDefined();
      });
    });

    describe("consultarPaises", () => {
      it("devuelve resultado definido", async () => {
        const result = await arca.wsctService.consultarPaises();
        expect(result).toBeDefined();
        expect(result.consultarPaisesReturn).toBeDefined();
      });
    });

    describe("consultarTiposIVA", () => {
      it("devuelve resultado definido", async () => {
        const result = await arca.wsctService.consultarTiposIVA();
        expect(result).toBeDefined();
        expect(result.consultarTiposIVAReturn).toBeDefined();
      });
    });

    describe("consultarTiposItem", () => {
      it("devuelve resultado definido", async () => {
        const result = await arca.wsctService.consultarTiposItem();
        expect(result).toBeDefined();
        expect(result.consultarTiposItemReturn).toBeDefined();
      });
    });

    describe("consultarCodigosItemTurismo", () => {
      it("devuelve resultado definido", async () => {
        const result = await arca.wsctService.consultarCodigosItemTurismo();
        expect(result).toBeDefined();
        expect(result.consultarCodigosItemTurismoReturn).toBeDefined();
      });
    });

    describe("consultarFormasPago", () => {
      it("devuelve resultado definido", async () => {
        const result = await arca.wsctService.consultarFormasPago();
        expect(result).toBeDefined();
        expect(result.consultarFormasPagoReturn).toBeDefined();
      });
    });
  },
);

if (!enableIntegration) {
  console.info("Omitiendo tests WSCT: ENABLE_INTEGRATION_TESTS=true");
}
