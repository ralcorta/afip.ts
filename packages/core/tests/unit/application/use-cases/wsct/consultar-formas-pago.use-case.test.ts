import { ConsultarFormasPagoUseCase } from "@application/use-cases/wsct/consultar-formas-pago.use-case";
import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";

describe("ConsultarFormasPagoUseCase", () => {
  it("returns repository result", async () => {
    const expected = { consultarFormasPagoReturn: {} };
    const repository = {
      consultarFormasPago: jest.fn().mockResolvedValue(expected),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarFormasPagoUseCase(repository);
    const result = await useCase.execute();

    expect(repository.consultarFormasPago).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });

  it("propagates repository errors", async () => {
    const repository = {
      consultarFormasPago: jest.fn().mockRejectedValue(new Error("boom")),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarFormasPagoUseCase(repository);

    await expect(useCase.execute()).rejects.toThrow("boom");
  });
});
