import { AfipService } from "./afip.service";
import { AfipContext } from "../afip-context";
import { IServiceSoapSoap } from "../soap/interfaces/Service/ServiceSoap";
import { EndpointsEnum } from "../endpoints.enum";
import { WsdlPathEnum } from "../soap/wsdl-path.enum";
import { ICreateVoucherResult, IVoucher } from "../interfaces";
import { ServiceNamesEnum } from "../soap/service-names.enum";
import { WsOutput, WsOutputSplit } from "../types";

export class ElectronicBillingService extends AfipService<IServiceSoapSoap> {
  constructor(context: AfipContext) {
    super(context, {
      url: EndpointsEnum.WSFEV1,
      url_test: EndpointsEnum.WSFEV1_TEST,
      wsdl: WsdlPathEnum.WSFE,
      wsdl_test: WsdlPathEnum.WSFE_TEST,
    });
  }

  protected async execProtectedCall<K extends (...params: any[]) => any>(
    f: K,
    params: Parameters<K>
  ): Promise<WsOutputSplit<Awaited<ReturnType<K>>>> {
    const authParam = await this.getAuth(ServiceNamesEnum.WSFE);
    const res: WsOutput<ReturnType<K>> = await f({
      ...authParam,
      ...params,
    });
    return res[0];
  }

  public async createIVoucher(req: IVoucher): Promise<ICreateVoucherResult> {
    const auth = await this.getAuth(ServiceNamesEnum.WSFE);
    const client = await this.soapClient();
    const [output] = await client.FECAESolicitarAsync({
      ...auth,
      FeCAEReq: {
        FeCabReq: {
          CantReg: req.CbteHasta - req.CbteDesde + 1,
          PtoVta: req.PtoVta,
          CbteTipo: req.CbteTipo,
        },
        FeDetReq: {
          FECAEDetRequest: [
            {
              ...req,
              Tributos: { Tributo: req.Tributos },
              Iva: { AlicIva: req.Iva },
              CbtesAsoc: { CbteAsoc: req.CbtesAsoc }, // Chack if its necesary
              Compradores: { Comprador: req.Compradores },
              Opcionales: { Opcional: req.Opcionales },
            },
          ],
        },
      },
    });

    return {
      response: output,
      cae: output.FECAESolicitarResult.FeDetResp.FECAEDetResponse[0].CAE,
      caeFchVto:
        output.FECAESolicitarResult.FeDetResp.FECAEDetResponse[0].CAEFchVto,
    };
  }
}
