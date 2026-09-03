import { ConsultarComprobanteTipoPVentaNroUseCase } from "@application/use-cases/wsct/consultar-comprobante-tipo-p-venta-nro.use-case";
import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";

describe("ConsultarComprobanteTipoPVentaNroUseCase", () => {
  it("returns repository result", async () => {
    const expected = { consultarComprobanteReturn: {} };
    const repository = {
      consultarComprobanteTipoPVentaNro: jest.fn().mockResolvedValue(expected),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarComprobanteTipoPVentaNroUseCase(repository);
    const input = {} as never;
    const result = await useCase.execute(input);

    expect(repository.consultarComprobanteTipoPVentaNro).toHaveBeenCalledWith(input);
    expect(result).toEqual(expected);
  });

  it("propagates repository errors", async () => {
    const repository = {
      consultarComprobanteTipoPVentaNro: jest.fn().mockRejectedValue(new Error("boom")),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarComprobanteTipoPVentaNroUseCase(repository);

    await expect(useCase.execute({} as never)).rejects.toThrow("boom");
  });
});
