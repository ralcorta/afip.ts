import { ConsultarTiposTributoUseCase } from "@application/use-cases/wsct/consultar-tipos-tributo.use-case";
import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";

describe("ConsultarTiposTributoUseCase", () => {
  it("returns repository result", async () => {
    const expected = { consultarTiposTributoReturn: {} };
    const repository = {
      consultarTiposTributo: jest.fn().mockResolvedValue(expected),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarTiposTributoUseCase(repository);
    const result = await useCase.execute();

    expect(repository.consultarTiposTributo).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });

  it("propagates repository errors", async () => {
    const repository = {
      consultarTiposTributo: jest.fn().mockRejectedValue(new Error("boom")),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarTiposTributoUseCase(repository);

    await expect(useCase.execute()).rejects.toThrow("boom");
  });
});
