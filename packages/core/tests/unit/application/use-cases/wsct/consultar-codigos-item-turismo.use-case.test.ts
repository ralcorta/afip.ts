import { ConsultarCodigosItemTurismoUseCase } from "@application/use-cases/wsct/consultar-codigos-item-turismo.use-case";
import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";

describe("ConsultarCodigosItemTurismoUseCase", () => {
  it("returns repository result", async () => {
    const expected = { consultarCodigosItemTurismoReturn: {} };
    const repository = {
      consultarCodigosItemTurismo: jest.fn().mockResolvedValue(expected),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarCodigosItemTurismoUseCase(repository);
    const result = await useCase.execute();

    expect(repository.consultarCodigosItemTurismo).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });

  it("propagates repository errors", async () => {
    const repository = {
      consultarCodigosItemTurismo: jest.fn().mockRejectedValue(new Error("boom")),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarCodigosItemTurismoUseCase(repository);

    await expect(useCase.execute()).rejects.toThrow("boom");
  });
});
