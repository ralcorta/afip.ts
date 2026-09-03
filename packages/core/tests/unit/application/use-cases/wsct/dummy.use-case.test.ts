import { CtDummyUseCase } from "@application/use-cases/wsct/dummy.use-case";
import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";

describe("CtDummyUseCase", () => {
  it("returns repository result", async () => {
    const expected = { dummyReturn: {} };
    const repository = {
      dummy: jest.fn().mockResolvedValue(expected),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new CtDummyUseCase(repository);
    const result = await useCase.execute();

    expect(repository.dummy).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });

  it("propagates repository errors", async () => {
    const repository = {
      dummy: jest.fn().mockRejectedValue(new Error("boom")),
    } as unknown as jest.Mocked<ICtRepositoryPort>;

    const useCase = new CtDummyUseCase(repository);

    await expect(useCase.execute()).rejects.toThrow("boom");
  });
});
