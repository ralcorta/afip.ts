import { resolve } from "path";
import { WsdlPathEnum } from "./wsdl-path.enum";

export class WsdlPathResolver {
  /**
   *
   * @param wsdlFile
   * @param forceFolderPath
   * @returns Path of wsdl file
   */
  public static get(wsdlFile: string, forceFolderPath?: string): string {
    return resolve(forceFolderPath ?? resolve(__dirname, "wsdl/"), wsdlFile);
  }

  // /**
  //  * @returns path of wsaa file
  //  */
  // public static getWsaa(): string {
  //   return WsdlPathResolver.get(WsdlPathEnum.WSAA);
  // }

  // /**
  //  * @returns path of wsfe file
  //  */
  // public static getWsfe(prod = false): string {
  //   return WsdlPathResolver.get(
  //     prod ? WsdlPathEnum.WSFE_PROD : WsdlPathEnum.WSFE
  //   );
  // }
}
