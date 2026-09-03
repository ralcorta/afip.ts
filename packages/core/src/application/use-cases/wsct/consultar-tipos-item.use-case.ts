import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";
import { IconsultarTiposItemOutput } from "@application/dto/ct";

export class ConsultarTiposItemUseCase {
  constructor(private readonly repository: ICtRepositoryPort) {}

  async execute(): Promise<IconsultarTiposItemOutput> {
    return this.repository.consultarTiposItem();
  }
}
