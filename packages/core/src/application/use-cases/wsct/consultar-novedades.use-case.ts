import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";
import { IconsultarNovedadesOutput } from "@application/dto/ct";

export class ConsultarNovedadesUseCase {
  constructor(private readonly repository: ICtRepositoryPort) {}

  async execute(): Promise<IconsultarNovedadesOutput> {
    return this.repository.consultarNovedades();
  }
}
