import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";
import { IconsultarTiposDocumentoOutput } from "@application/dto/ct";

export class ConsultarTiposDocumentoUseCase {
  constructor(private readonly repository: ICtRepositoryPort) {}

  async execute(): Promise<IconsultarTiposDocumentoOutput> {
    return this.repository.consultarTiposDocumento();
  }
}
