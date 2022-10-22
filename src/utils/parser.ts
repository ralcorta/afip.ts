import { ParserOptions, parseStringPromise, Builder } from "xml2js";

/**
 * Parser based on node-xml2js package (https://github.com/Leonidas-from-XIV/node-xml2js).
 */
export class Parser {
  public static async xmlToJson(
    xml: string,
    options?: ParserOptions
  ): Promise<Record<string, any>> {
    return parseStringPromise(xml, options);
  }

  public static jsonToXml(obj: Record<string, any>): string {
    return new Builder().buildObject(obj);
  }
}
