import { ConsultarNovedadesUseCase } from "@application/use-cases/wsct/consultar-novedades.use-case";
import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";

describe("ConsultarNovedadesUseCase", () => {
  it("returns repository result", async () => {
    const expected = { ConsultarNovedadesReturn: {} };
    const repository = {
      consultarNovedades: jest.fn().mockResolvedValue(expected),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarNovedadesUseCase(repository);
    const result = await useCase.execute();

    expect(repository.consultarNovedades).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });

  it("propagates repository errors", async () => {
    const repository = {
      consultarNovedades: jest.fn().mockRejectedValue(new Error("boom")),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarNovedadesUseCase(repository);

    await expect(useCase.execute()).rejects.toThrow("boom");
  });
});
