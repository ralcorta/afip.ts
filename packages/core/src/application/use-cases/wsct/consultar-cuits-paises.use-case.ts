import { ICtRepositoryPort } from "@application/ports/ct/ct-repository.port";
import { IconsultarCUITsPaisesOutput } from "@application/dto/ct";

export class ConsultarCUITsPaisesUseCase {
  constructor(private readonly repository: ICtRepositoryPort) {}

  async execute(): Promise<IconsultarCUITsPaisesOutput> {
    return this.repository.consultarCUITsPaises();
  }
}
