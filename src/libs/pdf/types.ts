import { FileHandle } from "fs/promises";
import { PathLike } from "fs";

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type GenerateInvoiceMeta = Partial<
  Pick<
    QRContent,
    | "ver"
    | "tipoCmp"
    | "moneda"
    | "ctz"
    | "tipoDocRec"
    | "tipoCodAut"
    | "importe"
    | "nroDocRec"
  >
>;

export type GenerateInvoiceParams = {
  meta?: GenerateInvoiceMeta;
} & InvoiceParams;

export interface GenerateInvoiceOptions {
  templatePath: PathLike | FileHandle;
  encoding: BufferEncoding;
}

export interface QRContent {
  ver: number; // Numérico 1 digito	OBLIGATORIO -- versión del formato de los datos del comprobante	1
  fecha: string; // full-date (RFC3339)	OBLIGATORIO -- Fecha de emisión del comprobante	"2020-10-13"
  cuit: number; // Numérico 11 dígitos	OBLIGATORIO -- Cuit del Emisor del comprobante	30000000007
  ptoVta: number; // Numérico hasta 5 digitos	OBLIGATORIO -- Punto de venta utilizado para emitir el comprobante	10
  tipoCmp: number; // Numérico hasta 3 dígitos	OBLIGATORIO -- tipo de comprobante (según Tablas del sistema )	1
  nroCmp: number; // Numérico hasta 8 dígitos	OBLIGATORIO -- Número del comprobante	94
  importe: number; // Decimal hasta 13 enteros y 2 decimales	OBLIGATORIO -- Importe Total del comprobante (en la moneda en la que fue emitido)	12100
  moneda: string; // 3 caracteres	OBLIGATORIO -- Moneda del comprobante (según Tablas del sistema )	"DOL"
  ctz: number; // Decimal hasta 13 enteros y 6 decimales	OBLIGATORIO -- Cotización en pesos argentinos de la moneda utilizada (1 cuando la moneda sea pesos)	65
  tipoDocRec: number; // Numérico hasta 2 dígitos	DE CORRESPONDER -- Código del Tipo de documento del receptor (según Tablas del sistema )	80
  nroDocRec: number; // Numérico hasta 20 dígitos	DE CORRESPONDER -- Número de documento del receptor correspondiente al tipo de documento indicado	20000000001
  tipoCodAut: "E" | "A"; // string	OBLIGATORIO -- "A" para comprobante autorizado por CAEA, "E" para comprobante autorizado por CAE	"E"
  codAut: number; // Numérico 14 dígitos	OBLIGATORIO -- Código de autorización otorgado por AFIP para el comprobante	70417054367476
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
  header: InvoiceHeader;
  items: InvoiceItem[];
  info: InvoiceInfo;
}

export interface InvoiceTemplateParams extends InvoiceParams {
  qr: string;
}
