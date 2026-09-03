import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";
import { IconsultarPaisesOutput } from "@application/dto/ct";

export class ConsultarPaisesUseCase {
  constructor(private readonly repository: ICtRepositoryPort) {}

  async execute(): Promise<IconsultarPaisesOutput> {
    return this.repository.consultarPaises();
  }
}
