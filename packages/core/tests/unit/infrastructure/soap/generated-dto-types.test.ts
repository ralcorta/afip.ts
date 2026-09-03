import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import type { IconsultarUltimoComprobanteAutorizadoInput } from "@application/dto/ct/service-soap.types";
import type { CTServiceSOAPTypes } from "@application/dto/ct/service-soap.types";

const XSD_NUMERIC_FACET =
  /"(?:minInclusive|maxInclusive|minExclusive|maxExclusive|totalDigits|fractionDigits)"/;

function listTypeFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      return listTypeFiles(full);
    }
    return entry.endsWith(".types.ts") ? [full] : [];
  });
}

describe("generated SOAP DTOs", () => {
  const dtoDir = join(__dirname, "../../../../src/application/dto");

  it("does not type XSD numeric restrictions as facet unions", () => {
    const violations = listTypeFiles(dtoDir).filter((file) =>
      XSD_NUMERIC_FACET.test(readFileSync(file, "utf-8")),
    );

    expect(violations.map((file) => relative(dtoDir, file))).toEqual([]);
  });

  it("accepts numbers on WSCT numeric fields", () => {
    const input: IconsultarUltimoComprobanteAutorizadoInput = {
      codigoTipoComprobante: 195,
      numeroPuntoVenta: 1,
    };
    const item: CTServiceSOAPTypes.Iitem = {
      tipo: 1,
      codigoTurismo: 1,
      codigo: "x",
      descripcion: "x",
      codigoAlicuotaIVA: 5,
      importeIVA: 21.0,
      importeItem: 121.0,
    };

    expect(input.numeroPuntoVenta).toBe(1);
    expect(item.importeItem).toBe(121.0);
  });
});
