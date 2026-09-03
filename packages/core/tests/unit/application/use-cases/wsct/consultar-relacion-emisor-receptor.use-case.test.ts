import { ConsultarRelacionEmisorReceptorUseCase } from "@application/use-cases/wsct/consultar-relacion-emisor-receptor.use-case";
import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";

describe("ConsultarRelacionEmisorReceptorUseCase", () => {
  it("returns repository result", async () => {
    const expected = { consultarRelacionEmisorReceptorReturn: {} };
    const repository = {
      consultarRelacionEmisorReceptor: jest.fn().mockResolvedValue(expected),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarRelacionEmisorReceptorUseCase(repository);
    const result = await useCase.execute();

    expect(repository.consultarRelacionEmisorReceptor).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });

  it("propagates repository errors", async () => {
    const repository = {
      consultarRelacionEmisorReceptor: jest.fn().mockRejectedValue(new Error("boom")),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarRelacionEmisorReceptorUseCase(repository);

    await expect(useCase.execute()).rejects.toThrow("boom");
  });
});
