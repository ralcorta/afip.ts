import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";
import { IconsultarTiposIVAOutput } from "@application/dto/ct";

export class ConsultarTiposIVAUseCase {
  constructor(private readonly repository: ICtRepositoryPort) {}

  async execute(): Promise<IconsultarTiposIVAOutput> {
    return this.repository.consultarTiposIVA();
  }
}
