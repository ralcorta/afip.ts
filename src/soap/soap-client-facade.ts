import { Client, createClientAsync, IOptions } from "soap";
import { EndpointsEnum } from "../endpoints.enum";
import { WsdlPathResolver } from "./wsdl-path-resolver";
import { WsdlPathEnum } from "./wsdl-path.enum";

export type SoapClientParams = {
  wsdl: WsdlPathEnum;
  options?: IOptions;
  // url?: EndpointsEnum;
};

export class SoapClient<T extends Client> extends Client {}

export class SoapClientFacade {
  private construct() {}
  public static async create<T extends Client>({
    wsdl,
    options,
  }: // url,
  SoapClientParams): Promise<SoapClient<T>> {
    return (await createClientAsync(
      WsdlPathResolver.get(wsdl),
      options
      // url
    )) as SoapClient<T>;
  }
}
