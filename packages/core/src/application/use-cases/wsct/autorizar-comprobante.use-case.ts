import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";
import {
  IautorizarComprobanteInput,
  IautorizarComprobanteOutput,
} from "@application/dto/ct";

export class AutorizarComprobanteUseCase {
  constructor(private readonly repository: ICtRepositoryPort) {}

  async execute(
    input: IautorizarComprobanteInput,
  ): Promise<IautorizarComprobanteOutput> {
    return this.repository.autorizarComprobante(input);
  }
}
