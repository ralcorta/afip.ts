import { ConsultarMonedasUseCase } from "@application/use-cases/wsct/consultar-monedas.use-case";
import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";

describe("ConsultarMonedasUseCase", () => {
  it("returns repository result", async () => {
    const expected = { consultarMonedasReturn: {} };
    const repository = {
      consultarMonedas: jest.fn().mockResolvedValue(expected),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarMonedasUseCase(repository);
    const result = await useCase.execute();

    expect(repository.consultarMonedas).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });

  it("propagates repository errors", async () => {
    const repository = {
      consultarMonedas: jest.fn().mockRejectedValue(new Error("boom")),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarMonedasUseCase(repository);

    await expect(useCase.execute()).rejects.toThrow("boom");
  });
});
