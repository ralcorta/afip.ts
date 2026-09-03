import { ConsultarPaisesUseCase } from "@application/use-cases/wsct/consultar-paises.use-case";
import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";

describe("ConsultarPaisesUseCase", () => {
  it("returns repository result", async () => {
    const expected = { consultarPaisesReturn: {} };
    const repository = {
      consultarPaises: jest.fn().mockResolvedValue(expected),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarPaisesUseCase(repository);
    const result = await useCase.execute();

    expect(repository.consultarPaises).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });

  it("propagates repository errors", async () => {
    const repository = {
      consultarPaises: jest.fn().mockRejectedValue(new Error("boom")),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarPaisesUseCase(repository);

    await expect(useCase.execute()).rejects.toThrow("boom");
  });
});
