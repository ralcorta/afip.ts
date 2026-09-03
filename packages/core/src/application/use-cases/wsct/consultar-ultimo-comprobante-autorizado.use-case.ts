import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";
import {
  IconsultarUltimoComprobanteAutorizadoInput,
  IconsultarUltimoComprobanteAutorizadoOutput,
} from "@application/dto/ct";

export class ConsultarUltimoComprobanteAutorizadoUseCase {
  constructor(private readonly repository: ICtRepositoryPort) {}

  async execute(
    input: IconsultarUltimoComprobanteAutorizadoInput,
  ): Promise<IconsultarUltimoComprobanteAutorizadoOutput> {
    return this.repository.consultarUltimoComprobanteAutorizado(input);
  }
}
