import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";
import {
  IconsultarCotizacionInput,
  IconsultarCotizacionOutput,
} from "@application/dto/ct";

export class ConsultarCotizacionUseCase {
  constructor(private readonly repository: ICtRepositoryPort) {}

  async execute(
    input: IconsultarCotizacionInput,
  ): Promise<IconsultarCotizacionOutput> {
    return this.repository.consultarCotizacion(input);
  }
}
