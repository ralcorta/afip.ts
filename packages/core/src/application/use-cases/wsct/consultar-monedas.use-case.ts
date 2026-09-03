import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";
import { IconsultarMonedasOutput } from "@application/dto/ct";

export class ConsultarMonedasUseCase {
  constructor(private readonly repository: ICtRepositoryPort) {}

  async execute(): Promise<IconsultarMonedasOutput> {
    return this.repository.consultarMonedas();
  }
}
