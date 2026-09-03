import { ConsultarTiposTarjetaUseCase } from "@application/use-cases/wsct/consultar-tipos-tarjeta.use-case";
import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";

describe("ConsultarTiposTarjetaUseCase", () => {
  it("returns repository result", async () => {
    const expected = { consultarTiposTarjetaReturn: {} };
    const repository = {
      consultarTiposTarjeta: jest.fn().mockResolvedValue(expected),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarTiposTarjetaUseCase(repository);
    const input = {} as never;
    const result = await useCase.execute(input);

    expect(repository.consultarTiposTarjeta).toHaveBeenCalledWith(input);
    expect(result).toEqual(expected);
  });

  it("propagates repository errors", async () => {
    const repository = {
      consultarTiposTarjeta: jest.fn().mockRejectedValue(new Error("boom")),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarTiposTarjetaUseCase(repository);

    await expect(useCase.execute({} as never)).rejects.toThrow("boom");
  });
});
