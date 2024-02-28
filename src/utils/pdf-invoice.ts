import { readFileSync } from "fs";
import { PDF } from "./pdf";
import { ServiceSoap12Types } from "../soap/interfaces/Service/ServiceSoap12";
import { QR } from "./qr";
import fs from "fs/promises";
import Handlebars from "handlebars";
import { logger } from "./logger";

Handlebars.registerHelper("row", function (base, index, amount) {
  return base + index * amount;
});

interface QRContent {
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

interface InvoiceItem {
  code: string;
  productOrService: string;
  quantity: number;
  unitOfMeasure: string;
  unitPrice: number;
  discountPercentage: number;
  discountTax: number;
  subtotal: number;
}

export class PDFInvoice {
  static async generateInvoice() {
    // info: ServiceSoap12Types.IFECompConsultarResult // cuit: number,
    const htmlContent = readFileSync(
      `${__dirname}/../assets/invoice_a_b.html`,
      "utf8"
    );
    const qrContentBase64 = Buffer.from(
      JSON.stringify({
        ver: 1,
        fecha: "2020-10-13",
        cuit: 30000000007,
        ptoVta: 10,
        tipoCmp: 1,
        nroCmp: 94,
        importe: 12100,
        moneda: "DOL",
        ctz: 65,
        tipoDocRec: 80,
        nroDocRec: 20000000001,
        tipoCodAut: "E",
        codAut: 70417054367476,
      })
    ).toString("base64");
    const url = `https://www.afip.gob.ar/fe/qr/?p=${qrContentBase64}`;
    const qrImgBase64 = await QR.qrBase64Image(url);
    const invoiceParams = {
      qr: qrImgBase64,
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
    const template = Handlebars.compile(htmlContent);
    const htmlRendered = template(invoiceParams);
    try {
      const pdfBuffer = await PDF.generateFromHTML(htmlRendered);
      logger.info("PDF generated successfully");
      await fs.writeFile("test-invoice.pdf", pdfBuffer);
    } catch (error) {
      logger.error("Error generating PDF:", error);
    }
  }
}

PDFInvoice.generateInvoice();
