import { ServiceNamesEnum } from "../soap/service-names.enum";

export type GetAccessTicketParam = {
  serviceName: ServiceNamesEnum;
  cert: string;
  key: string;
  prod: boolean;
};
