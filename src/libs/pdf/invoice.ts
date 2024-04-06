import { PDF } from "../../utils/pdf";
import { QR } from "../../utils/qr";
import { readFile, writeFile } from "fs/promises";
import { TemplateCompiler } from "./template/compiler";
import {
  GenerateInvoiceOptions,
  GenerateInvoiceParams,
  InvoiceTemplateParams,
  QRContent,
} from "./types";
import { InvoiceTypeMap } from "./invoice-type-map";

const invoiceParamsTest: GenerateInvoiceParams = {
  header: {
    type: "C",
    code: "001",
    business: {
      name: "Rodrigo Victor Alcorta",
      businessName: "ALCORTA RODRIGO VICTOR",
      salesPoint: "0001",
      invoiceNumber: "00000001",
      emitDate: "01/01/2020",
      address: "Monte 1234, Lugar falso, Buenos Aires",
      cuit: "20111111112",
      grossIncome: "20111111112",
      startDateActivities: "01/01/1990",
      iva: "Excento",
      invoicePeriodStart: "01/01/1900",
      invoicePeriodEnd: "02/01/1900",
      dueDate: "02/01/1900",
    },
    client: {
      cuit: "20111111112",
      businessName: "Rodrigo Victor Alcorta",
      iva: "Excento",
      address: "Un lugar",
      ivaCondition: "otro",
    },
  },
  items: [
    {
      code: "001",
      productOrService: "Widget A",
      quantity: 2,
      unitOfMeasure: "pcs",
      unitPrice: 10.5,
      discountPercentage: 5,
      discountTax: 1.5,
      subtotal: 19.95,
    },
    {
      code: "002",
      productOrService: "Gadget B",
      quantity: 5,
      unitOfMeasure: "units",
      unitPrice: 8.75,
      discountPercentage: 0,
      discountTax: 0,
      subtotal: 43.75,
    },
    {
      code: "003",
      productOrService: "Service C",
      quantity: 1,
      unitOfMeasure: "hour",
      unitPrice: 30.0,
      discountPercentage: 10,
      discountTax: 3.0,
      subtotal: 27.0,
    },
    {
      code: "004",
      productOrService: "Accessory D",
      quantity: 3,
      unitOfMeasure: "pieces",
      unitPrice: 5.99,
      discountPercentage: 2,
      discountTax: 0.36,
      subtotal: 17.91,
    },
    {
      code: "005",
      productOrService: "Software E",
      quantity: 1,
      unitOfMeasure: "license",
      unitPrice: 49.99,
      discountPercentage: 15,
      discountTax: 7.5,
      subtotal: 42.49,
    },
    {
      code: "006",
      productOrService: "Maintenance F",
      quantity: 2,
      unitOfMeasure: "months",
      unitPrice: 15.0,
      discountPercentage: 0,
      discountTax: 0,
      subtotal: 30.0,
    },
    {
      code: "007",
      productOrService: "Part G",
      quantity: 4,
      unitOfMeasure: "units",
      unitPrice: 12.25,
      discountPercentage: 8,
      discountTax: 3.9,
      subtotal: 44.7,
    },
    {
      code: "008",
      productOrService: "Consulting Service H",
      quantity: 1,
      unitOfMeasure: "session",
      unitPrice: 75.0,
      discountPercentage: 20,
      discountTax: 15.0,
      subtotal: 60.0,
    },
    {
      code: "009",
      productOrService: "Training Course I",
      quantity: 1,
      unitOfMeasure: "day",
      unitPrice: 120.0,
      discountPercentage: 5,
      discountTax: 6.0,
      subtotal: 114.0,
    },
    {
      code: "010",
      productOrService: "Subscription J",
      quantity: 1,
      unitOfMeasure: "year",
      unitPrice: 99.99,
      discountPercentage: 0,
      discountTax: 0,
      subtotal: 99.99,
    },
  ],
  info: {
    subtotal: "40000,00",
    otherTaxes: "0,00",
    total: "40000,00",
    caeNumber: "73498487261799",
    caeDate: "15/12/2023",
  },
};

export class PDFInvoice {
  /**
   * QR content based on AFIP specifications
   *
   * URL https://www.afip.gob.ar/fe/qr/especificaciones.asp
   *
   * @param data QRContent
   * @returns string
   */
  static async getQr(data: QRContent): Promise<string> {
    const qrContentBase64 = Buffer.from(JSON.stringify(data)).toString(
      "base64"
    );
    const url = `https://www.afip.gob.ar/fe/qr/?p=${qrContentBase64}`;
    return QR.toBase64(url);
  }

  /**
   * Get QR content based on invoice data
   *
   * @param params GenerateInvoiceParams
   * @returns QRContent
   */
  static getQrContent({
    header,
    meta,
    info,
  }: GenerateInvoiceParams): QRContent {
    // const qrContentTest: QRContent = {
    //   ver: 1, // [PARAMETRO OPTIONAL] default 1 or version number
    //   fecha: "2020-10-13", // info.caeDate
    //   cuit: 30000000007, // header.business.cuit
    //   ptoVta: 10, // header.business.salesPoint
    //   tipoCmp: 11, // [PARAMETRO OPCIONAL] e.g: 11 for C si no se pasa se toma de header.type
    //   nroCmp: 94, // header.business.invoiceNumber
    //   importe: 12100, // [PARAMETRO OPCIONAL] default info.total
    //   moneda: "DOL", // [PARAMETRO OPTIONAL] default pesos "PES"
    //   ctz: 1, // [PARAMETRO OPCIONAL] Cotización en pesos argentinos de la moneda utilizada (1 cuando la moneda sea pesos)
    //   tipoDocRec: 80, //  [PARAMETRO OPCIONAL] 80 es CUIT default
    //   nroDocRec: 20000000001, // [PARAMETRO OPCIONAL] header.client.cuit O por parametro
    //   tipoCodAut: "E", // [PARAMETRO OPCIONAL] default "E"
    //   codAut: 70417054367476, // info.caeNumber
    // };

    let tipoCmp: number = meta?.tipoCmp || 0;
    if (!meta?.tipoCmp)
      if (InvoiceTypeMap.has(header.type))
        tipoCmp = InvoiceTypeMap.get(header.type) as number;
      else
        throw new Error("Invalid invoice type to generate the invoice QR code");

    return {
      ver: meta?.ver || 1,
      fecha: info.caeDate,
      cuit: parseInt(header.business.cuit),
      ptoVta: parseInt(header.business.salesPoint),
      tipoCmp,
      nroCmp: parseInt(header.business.invoiceNumber),
      importe: meta?.importe || parseFloat(info.total),
      moneda: meta?.moneda || "PES",
      ctz: meta?.ctz || 1,
      tipoDocRec: meta?.tipoDocRec || 80,
      nroDocRec: meta?.nroDocRec || parseInt(header.client.cuit),
      tipoCodAut: meta?.tipoCodAut || "E",
      codAut: parseInt(info.caeNumber),
    };
  }

  /**
   * Generate invoice PDF
   *
   * @returns void
   * @throws Error
   */
  static async generateInvoice(
    data: GenerateInvoiceParams,
    options: GenerateInvoiceOptions = {
      templatePath: `${__dirname}/assets/invoice_b_c.html`,
      encoding: "utf8",
    }
  ) {
    const htmlContent = await readFile(options.templatePath, options.encoding);
    const qrContent = PDFInvoice.getQrContent(data);
    const qr = await PDFInvoice.getQr(qrContent);
    const invoiceParams: InvoiceTemplateParams = {
      qr,
      ...data,
    };
    const compiler = new TemplateCompiler(htmlContent, invoiceParams);

    try {
      const pdfBuffer = await PDF.generateFromHTML(compiler.execute());
      await writeFile("test-invoice.pdf", pdfBuffer);
      console.log("PDF generated successfully");
    } catch (error) {
      console.log("Error generating PDF:", error);
    }
  }
}

PDFInvoice.generateInvoice(invoiceParamsTest);
