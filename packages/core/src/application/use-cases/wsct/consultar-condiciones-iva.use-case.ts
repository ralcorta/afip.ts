import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";
import { IconsultarCondicionesIVAOutput } from "@application/dto/ct";

export class ConsultarCondicionesIVAUseCase {
  constructor(private readonly repository: ICtRepositoryPort) {}

  async execute(): Promise<IconsultarCondicionesIVAOutput> {
    return this.repository.consultarCondicionesIVA();
  }
}
