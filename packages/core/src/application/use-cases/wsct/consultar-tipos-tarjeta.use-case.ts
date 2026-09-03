import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";
import {
  IconsultarTiposTarjetaInput,
  IconsultarTiposTarjetaOutput,
} from "@application/dto/ct";

export class ConsultarTiposTarjetaUseCase {
  constructor(private readonly repository: ICtRepositoryPort) {}

  async execute(
    input: IconsultarTiposTarjetaInput,
  ): Promise<IconsultarTiposTarjetaOutput> {
    return this.repository.consultarTiposTarjeta(input);
  }
}
