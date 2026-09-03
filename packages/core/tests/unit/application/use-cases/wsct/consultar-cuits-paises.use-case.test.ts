import { ConsultarCUITsPaisesUseCase } from "@application/use-cases/wsct/consultar-cuits-paises.use-case";
import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";

describe("ConsultarCUITsPaisesUseCase", () => {
  it("returns repository result", async () => {
    const expected = { consultarCUITsPaisesReturn: {} };
    const repository = {
      consultarCUITsPaises: jest.fn().mockResolvedValue(expected),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarCUITsPaisesUseCase(repository);
    const result = await useCase.execute();

    expect(repository.consultarCUITsPaises).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });

  it("propagates repository errors", async () => {
    const repository = {
      consultarCUITsPaises: jest.fn().mockRejectedValue(new Error("boom")),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarCUITsPaisesUseCase(repository);

    await expect(useCase.execute()).rejects.toThrow("boom");
  });
});
