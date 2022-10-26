import { resolve } from "path";
import { AfipContext, Context } from "./afip-context";
import { ElectronicBillingService } from "./services/electronic-billing.service";

export class Afip {
  private readonly _electronicBillingService: ElectronicBillingService;
  private readonly context: AfipContext;

  constructor(context: Context) {
    this.context = {
      ...context,
      ticketPath: context.ticketPath ?? resolve(__dirname, "auth", "tickets"),
    };

    this._electronicBillingService = new ElectronicBillingService(this.context);
  }

  get electronicBillingService(): ElectronicBillingService {
    return this._electronicBillingService;
  }
}
