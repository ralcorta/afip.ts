export interface QRContent {
  ver: number;
  fecha: string;
  cuit: number;
  ptoVta: number;
  tipoCmp: number;
  nroCmp: number;
  importe: number;
  moneda: string;
  ctz: number;
  tipoDocRec: number;
  nroDocRec: number;
  tipoCodAut: string;
  codAut: number;
}

export interface InvoiceItem {
  code: string;
  productOrService: string;
  quantity: number;
  unitOfMeasure: string;
  unitPrice: number;
  discountPercentage: number;
  discountTax: number;
  subtotal: number;
}

export interface InvoiceInfo {
  subtotal: string;
  otherTaxes: string;
  total: string;
  caeNumber: string;
  caeDate: string;
}

export interface InvoiceHeaderBusiness {
  name: string;
  businessName: string;
  salesPoint: string;
  invoiceNumber: string;
  emitDate: string;
  address: string;
  cuit: string;
  grossIncome: string;
  startDateActivities: string;
  iva: string;
  invoicePeriodStart: string;
  invoicePeriodEnd: string;
  dueDate: string;
}

export interface InvoiceHeaderClient {
  cuit: string;
  businessName: string;
  iva: string;
  address: string;
  ivaCondition: string;
}

export interface InvoiceHeader {
  type: string;
  code: string;
  business: InvoiceHeaderBusiness;
  client: InvoiceHeaderClient;
}

export interface InvoiceParams {
  qr: string;
  header: InvoiceHeader;
  items: InvoiceItem[];
  info: InvoiceInfo;
}
