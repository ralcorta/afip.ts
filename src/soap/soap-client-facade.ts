import { Client, createClientAsync, IOptions } from "soap";
import { WsdlPathResolver } from "./wsdl-path-resolver";
import { WsdlPathEnum } from "./wsdl-path.enum";

export type SoapClientParams = {
  wsdl: WsdlPathEnum;
  options?: IOptions;
  // url?: EndpointsEnum;
};

export class SoapClientFacade {
  private construct() {}
  public static async create<T extends Client>({
    wsdl,
    options,
  }: // url,
  SoapClientParams): Promise<T> {
    return (await createClientAsync(
      WsdlPathResolver.get(wsdl),
      options
      // url
    )) as T;
  }
}
