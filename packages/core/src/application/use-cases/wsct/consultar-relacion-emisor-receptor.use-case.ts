import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";
import { IconsultarRelacionEmisorReceptorOutput } from "@application/dto/ct";

export class ConsultarRelacionEmisorReceptorUseCase {
  constructor(private readonly repository: ICtRepositoryPort) {}

  async execute(): Promise<IconsultarRelacionEmisorReceptorOutput> {
    return this.repository.consultarRelacionEmisorReceptor();
  }
}
