import moment from "moment";
import {
  ILoginCmsReturn,
  ILoginCmsReturnCredentials,
  ILoginCmsReturnHeaders,
} from "../soap/interfaces/LoginCMSService/LoginCms";

import { IAccessTicket } from "../interfaces";
import { WSAuthTokens } from "./types";

export class AccessTicket implements IAccessTicket {
  header: ILoginCmsReturnHeaders;
  credentials: ILoginCmsReturnCredentials;

  constructor(loginReturn: ILoginCmsReturn) {
    this.header = loginReturn.header;
    this.credentials = loginReturn.credentials;
  }

  getSign(): string {
    return this.credentials.sign;
  }

  getToken(): string {
    return this.credentials.token;
  }

  getExpiration(): Date {
    return moment(this.header[1].expirationTime).toDate();
  }

  getHeaders(): ILoginCmsReturnHeaders {
    return this.header;
  }

  getCredentials(): ILoginCmsReturnCredentials {
    return this.credentials;
  }

  getAuthKeyProps(): WSAuthTokens {
    return {
      token: this.getToken(),
      sign: this.getSign(),
      expirationDate: this.getExpiration().toISOString(),
    };
  }

  public isAccessTicketValid(ta: IAccessTicket): boolean {
    return AccessTicket.hasExpired(ta.getExpiration().toISOString());
  }

  public static hasExpired(expirationDateIsoFormat: string): boolean {
    return moment(expirationDateIsoFormat).isAfter(new Date());
  }
}
