import { ConsultarTiposDatosAdicionalesUseCase } from "@application/use-cases/wsct/consultar-tipos-datos-adicionales.use-case";
import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";

describe("ConsultarTiposDatosAdicionalesUseCase", () => {
  it("returns repository result", async () => {
    const expected = { consultarTiposDatosAdicionalesReturn: {} };
    const repository = {
      consultarTiposDatosAdicionales: jest.fn().mockResolvedValue(expected),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarTiposDatosAdicionalesUseCase(repository);
    const result = await useCase.execute();

    expect(repository.consultarTiposDatosAdicionales).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });

  it("propagates repository errors", async () => {
    const repository = {
      consultarTiposDatosAdicionales: jest.fn().mockRejectedValue(new Error("boom")),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarTiposDatosAdicionalesUseCase(repository);

    await expect(useCase.execute()).rejects.toThrow("boom");
  });
});
