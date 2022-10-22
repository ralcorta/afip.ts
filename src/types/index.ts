import { ServiceSoapTypes } from "../soap/interfaces/Service/ServiceSoap";

export type WsOutput<T> = [T, string, { [k: string]: any }, string];
export type WsOutputSplit<T extends WsOutput<T>> = T[0];
