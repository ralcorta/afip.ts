import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";
import { IconsultarPuntosVentaOutput } from "@application/dto/ct";

export class ConsultarPuntosVentaUseCase {
  constructor(private readonly repository: ICtRepositoryPort) {}

  async execute(): Promise<IconsultarPuntosVentaOutput> {
    return this.repository.consultarPuntosVenta();
  }
}
