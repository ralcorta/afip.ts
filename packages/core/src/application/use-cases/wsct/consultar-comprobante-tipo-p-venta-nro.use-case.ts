import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";
import {
  IconsultarComprobanteTipoPVentaNroInput,
  IconsultarComprobanteTipoPVentaNroOutput,
} from "@application/dto/ct";

export class ConsultarComprobanteTipoPVentaNroUseCase {
  constructor(private readonly repository: ICtRepositoryPort) {}

  async execute(
    input: IconsultarComprobanteTipoPVentaNroInput,
  ): Promise<IconsultarComprobanteTipoPVentaNroOutput> {
    return this.repository.consultarComprobanteTipoPVentaNro(input);
  }
}
