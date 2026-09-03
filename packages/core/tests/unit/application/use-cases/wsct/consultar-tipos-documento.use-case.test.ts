import { ConsultarTiposDocumentoUseCase } from "@application/use-cases/wsct/consultar-tipos-documento.use-case";
import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";

describe("ConsultarTiposDocumentoUseCase", () => {
  it("returns repository result", async () => {
    const expected = { consultarTiposDocumentoReturn: {} };
    const repository = {
      consultarTiposDocumento: jest.fn().mockResolvedValue(expected),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarTiposDocumentoUseCase(repository);
    const result = await useCase.execute();

    expect(repository.consultarTiposDocumento).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });

  it("propagates repository errors", async () => {
    const repository = {
      consultarTiposDocumento: jest.fn().mockRejectedValue(new Error("boom")),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarTiposDocumentoUseCase(repository);

    await expect(useCase.execute()).rejects.toThrow("boom");
  });
});
