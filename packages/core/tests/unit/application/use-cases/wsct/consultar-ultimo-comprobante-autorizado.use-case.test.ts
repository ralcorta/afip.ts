import { ConsultarUltimoComprobanteAutorizadoUseCase } from "@application/use-cases/wsct/consultar-ultimo-comprobante-autorizado.use-case";
import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";

describe("ConsultarUltimoComprobanteAutorizadoUseCase", () => {
  it("returns repository result", async () => {
    const expected = { consultarUltimoComprobanteAutorizadoReturn: {} };
    const repository = {
      consultarUltimoComprobanteAutorizado: jest.fn().mockResolvedValue(expected),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarUltimoComprobanteAutorizadoUseCase(repository);
    const input = {} as never;
    const result = await useCase.execute(input);

    expect(repository.consultarUltimoComprobanteAutorizado).toHaveBeenCalledWith(input);
    expect(result).toEqual(expected);
  });

  it("propagates repository errors", async () => {
    const repository = {
      consultarUltimoComprobanteAutorizado: jest.fn().mockRejectedValue(new Error("boom")),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarUltimoComprobanteAutorizadoUseCase(repository);

    await expect(useCase.execute({} as never)).rejects.toThrow("boom");
  });
});
