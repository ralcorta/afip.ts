import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";
import { IconsultarTiposComprobantesOutput } from "@application/dto/ct";

export class ConsultarTiposComprobantesUseCase {
  constructor(private readonly repository: ICtRepositoryPort) {}

  async execute(): Promise<IconsultarTiposComprobantesOutput> {
    return this.repository.consultarTiposComprobantes();
  }
}
