import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";
import { IconsultarTiposCuentaOutput } from "@application/dto/ct";

export class ConsultarTiposCuentaUseCase {
  constructor(private readonly repository: ICtRepositoryPort) {}

  async execute(): Promise<IconsultarTiposCuentaOutput> {
    return this.repository.consultarTiposCuenta();
  }
}
