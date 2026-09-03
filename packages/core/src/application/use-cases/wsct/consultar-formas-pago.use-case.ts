import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";
import { IconsultarFormasPagoOutput } from "@application/dto/ct";

export class ConsultarFormasPagoUseCase {
  constructor(private readonly repository: ICtRepositoryPort) {}

  async execute(): Promise<IconsultarFormasPagoOutput> {
    return this.repository.consultarFormasPago();
  }
}
