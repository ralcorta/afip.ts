import { ConsultarTiposComprobantesUseCase } from "@application/use-cases/wsct/consultar-tipos-comprobantes.use-case";
import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";

describe("ConsultarTiposComprobantesUseCase", () => {
  it("returns repository result", async () => {
    const expected = { consultarTiposComprobantesReturn: {} };
    const repository = {
      consultarTiposComprobantes: jest.fn().mockResolvedValue(expected),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarTiposComprobantesUseCase(repository);
    const result = await useCase.execute();

    expect(repository.consultarTiposComprobantes).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });

  it("propagates repository errors", async () => {
    const repository = {
      consultarTiposComprobantes: jest.fn().mockRejectedValue(new Error("boom")),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarTiposComprobantesUseCase(repository);

    await expect(useCase.execute()).rejects.toThrow("boom");
  });
});
