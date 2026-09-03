import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";
import { IconsultarTiposDatosAdicionalesOutput } from "@application/dto/ct";

export class ConsultarTiposDatosAdicionalesUseCase {
  constructor(private readonly repository: ICtRepositoryPort) {}

  async execute(): Promise<IconsultarTiposDatosAdicionalesOutput> {
    return this.repository.consultarTiposDatosAdicionales();
  }
}
