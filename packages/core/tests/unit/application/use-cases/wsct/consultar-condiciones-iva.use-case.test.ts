import { ConsultarCondicionesIVAUseCase } from "@application/use-cases/wsct/consultar-condiciones-iva.use-case";
import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";

describe("ConsultarCondicionesIVAUseCase", () => {
  it("returns repository result", async () => {
    const expected = { consultarCondicionesIVAReturn: {} };
    const repository = {
      consultarCondicionesIVA: jest.fn().mockResolvedValue(expected),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarCondicionesIVAUseCase(repository);
    const result = await useCase.execute();

    expect(repository.consultarCondicionesIVA).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });

  it("propagates repository errors", async () => {
    const repository = {
      consultarCondicionesIVA: jest.fn().mockRejectedValue(new Error("boom")),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new ConsultarCondicionesIVAUseCase(repository);

    await expect(useCase.execute()).rejects.toThrow("boom");
  });
});
