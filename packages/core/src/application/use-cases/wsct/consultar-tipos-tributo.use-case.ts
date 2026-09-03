import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";
import { IconsultarTiposTributoOutput } from "@application/dto/ct";

export class ConsultarTiposTributoUseCase {
  constructor(private readonly repository: ICtRepositoryPort) {}

  async execute(): Promise<IconsultarTiposTributoOutput> {
    return this.repository.consultarTiposTributo();
  }
}
