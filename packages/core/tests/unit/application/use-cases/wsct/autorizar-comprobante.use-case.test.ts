import { AutorizarComprobanteUseCase } from "@application/use-cases/wsct/autorizar-comprobante.use-case";
import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";

describe("AutorizarComprobanteUseCase", () => {
  it("returns repository result", async () => {
    const expected = { autorizarComprobanteReturn: {} };
    const repository = {
      autorizarComprobante: jest.fn().mockResolvedValue(expected),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new AutorizarComprobanteUseCase(repository);
    const input = {} as never;
    const result = await useCase.execute(input);

    expect(repository.autorizarComprobante).toHaveBeenCalledWith(input);
    expect(result).toEqual(expected);
  });

  it("propagates repository errors", async () => {
    const repository = {
      autorizarComprobante: jest.fn().mockRejectedValue(new Error("boom")),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new AutorizarComprobanteUseCase(repository);

    await expect(useCase.execute({} as never)).rejects.toThrow("boom");
  });
});
