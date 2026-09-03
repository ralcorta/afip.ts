import { ConsultarCotizacionUseCase } from "@application/use-cases/wsct/consultar-cotizacion.use-case";
import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";

describe("ConsultarCotizacionUseCase", () => {
  it("returns repository result", async () => {
    const expected = { consultarCotizacionReturn: {} };
    const repository = {
      consultarCotizacion: jest.fn().mockResolvedValue(expected),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarCotizacionUseCase(repository);
    const input = {} as never;
    const result = await useCase.execute(input);

    expect(repository.consultarCotizacion).toHaveBeenCalledWith(input);
    expect(result).toEqual(expected);
  });

  it("propagates repository errors", async () => {
    const repository = {
      consultarCotizacion: jest.fn().mockRejectedValue(new Error("boom")),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarCotizacionUseCase(repository);

    await expect(useCase.execute({} as never)).rejects.toThrow("boom");
  });
});
