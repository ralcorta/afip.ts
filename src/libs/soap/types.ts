import { IOptions } from "soap";
import { WsdlPathEnum } from "./wsdl-path.enum";

export type SoapAsyncFunc<I, O> = (
  input: I,
  options?: any,
  extraHeaders?: any
) => Promise<[O, string, { [k: string]: any }, string]>;

export type SoapClientParams = {
  wsdl: WsdlPathEnum;
  options?: IOptions;
};
