import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";
import { ICtDummyOutput } from "@application/dto/ct";

export class CtDummyUseCase {
  constructor(private readonly repository: ICtRepositoryPort) {}

  async execute(): Promise<ICtDummyOutput> {
    return this.repository.dummy();
  }
}
