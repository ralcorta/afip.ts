import { moment } from "moment";
import {
  ILoginCmsReturn,
  ILoginCmsReturnCredentials,
  ILoginCmsReturnHeaders,
} from "../soap/interfaces/LoginCMSService/LoginCms";

import { IAccessTicket } from "../interfaces";

export class AccessTicket implements IAccessTicket {
  readonly header: ILoginCmsReturnHeaders;
  readonly credentials: ILoginCmsReturnCredentials;

  constructor({ header, credentials }: ILoginCmsReturn) {
    this.header = header;
    this.credentials = credentials;
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
}
