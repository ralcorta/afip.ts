// import { AfipAuthenticator } from "./auth/afip-auth";
// import { IAccessTicket } from "./types/index";
// export class Cache {
//   private static instance: Cache;
//   private static accessTokens: Record<string, IAccessTicket>;

//   private constructor() {}

//   public static getInstance(): Cache {
//     if (!Cache.instance) Cache.instance = new Cache();
//     return Cache.instance;
//   }

//   private getATKey(cuit: string, serviceName: string, prod?: boolean): string {
//     return `TA-${cuit}-${serviceName}${prod ? "-production" : ""}`;
//   }

//   public async getAccessToken(
//     cuit: string,
//     serviceName: string,
//     cert: string,
//     key: string,
//     prod?: boolean
//   ): Promise<IAccessTicket> {
//     const atKey = this.getATKey(cuit, serviceName, prod);
//     const tokens = Cache.accessTokens[atKey];
//     if (!tokens) {
//       Cache.accessTokens[atKey] = await AfipAuthenticator.getAccessTicket(
//         serviceName,
//         cert,
//         key
//       );
//     }

//     return Cache.accessTokens[atKey];
//     // `TA-${this.options['CUIT']}-${service}${this.options['production'] ? '-production' : ''}.json`
//   }
// }
