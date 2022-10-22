import { AfipContext } from "./afip-context";
import { ElectronicBillingService } from "./services/electronic-billing.service";

export class Afip {
  constructor(private readonly context: AfipContext) {}

  get electronicBillingService(): ElectronicBillingService {
    return new ElectronicBillingService(this.context);
  }
}
