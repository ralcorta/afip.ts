import { ConsultarTiposIVAUseCase } from "@application/use-cases/wsct/consultar-tipos-iva.use-case";
import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";

describe("ConsultarTiposIVAUseCase", () => {
  it("returns repository result", async () => {
    const expected = { consultarTiposIVAReturn: {} };
    const repository = {
      consultarTiposIVA: jest.fn().mockResolvedValue(expected),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarTiposIVAUseCase(repository);
    const result = await useCase.execute();

    expect(repository.consultarTiposIVA).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });

  it("propagates repository errors", async () => {
    const repository = {
      consultarTiposIVA: jest.fn().mockRejectedValue(new Error("boom")),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarTiposIVAUseCase(repository);

    await expect(useCase.execute()).rejects.toThrow("boom");
  });
});
