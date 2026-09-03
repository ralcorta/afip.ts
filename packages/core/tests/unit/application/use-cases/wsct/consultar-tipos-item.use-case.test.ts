import { ConsultarTiposItemUseCase } from "@application/use-cases/wsct/consultar-tipos-item.use-case";
import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";

describe("ConsultarTiposItemUseCase", () => {
  it("returns repository result", async () => {
    const expected = { consultarTiposItemReturn: {} };
    const repository = {
      consultarTiposItem: jest.fn().mockResolvedValue(expected),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarTiposItemUseCase(repository);
    const result = await useCase.execute();

    expect(repository.consultarTiposItem).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });

  it("propagates repository errors", async () => {
    const repository = {
      consultarTiposItem: jest.fn().mockRejectedValue(new Error("boom")),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarTiposItemUseCase(repository);

    await expect(useCase.execute()).rejects.toThrow("boom");
  });
});
