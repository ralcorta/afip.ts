import { ConsultarTiposCuentaUseCase } from "@application/use-cases/wsct/consultar-tipos-cuenta.use-case";
import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";

describe("ConsultarTiposCuentaUseCase", () => {
  it("returns repository result", async () => {
    const expected = { consultarTiposCuentaReturn: {} };
    const repository = {
      consultarTiposCuenta: jest.fn().mockResolvedValue(expected),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarTiposCuentaUseCase(repository);
    const result = await useCase.execute();

    expect(repository.consultarTiposCuenta).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });

  it("propagates repository errors", async () => {
    const repository = {
      consultarTiposCuenta: jest.fn().mockRejectedValue(new Error("boom")),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarTiposCuentaUseCase(repository);

    await expect(useCase.execute()).rejects.toThrow("boom");
  });
});
