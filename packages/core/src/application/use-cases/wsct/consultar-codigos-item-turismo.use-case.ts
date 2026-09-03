import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";
import { IconsultarCodigosItemTurismoOutput } from "@application/dto/ct";

export class ConsultarCodigosItemTurismoUseCase {
  constructor(private readonly repository: ICtRepositoryPort) {}

  async execute(): Promise<IconsultarCodigosItemTurismoOutput> {
    return this.repository.consultarCodigosItemTurismo();
  }
}
