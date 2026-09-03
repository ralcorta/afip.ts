import { ConsultarPuntosVentaUseCase } from "@application/use-cases/wsct/consultar-puntos-venta.use-case";
import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";

describe("ConsultarPuntosVentaUseCase", () => {
  it("returns repository result", async () => {
    const expected = { consultarPuntosVentaReturn: {} };
    const repository = {
      consultarPuntosVenta: jest.fn().mockResolvedValue(expected),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarPuntosVentaUseCase(repository);
    const result = await useCase.execute();

    expect(repository.consultarPuntosVenta).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });

  it("propagates repository errors", async () => {
    const repository = {
      consultarPuntosVenta: jest.fn().mockRejectedValue(new Error("boom")),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarPuntosVentaUseCase(repository);

    await expect(useCase.execute()).rejects.toThrow("boom");
  });
});
