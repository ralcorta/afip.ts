import { readFileSync } from "fs";
import { PDF } from "./pdf";
import { ServiceSoap12Types } from "../soap/interfaces/Service/ServiceSoap12";
import { QR } from "./qr";
import fs from "fs/promises";
import Handlebars from "handlebars";
import { logger } from "./logger";

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

export class PDFInvoice {
  static async generateInvoice() {
    // info: ServiceSoap12Types.IFECompConsultarResult // cuit: number,
    const htmlContent = readFileSync(
      `${__dirname}/../assets/opt4/index.html`,
      "utf8"
    );

    const qrContent: QRContent = {
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
    };

    const qrContentBase64 = Buffer.from(JSON.stringify(qrContent)).toString(
      "base64"
    );
    const url = `https://www.afip.gob.ar/fe/qr/?p=${qrContentBase64}`;

    const qrImgBase64 = await QR.qrBase64Image(url);

    const template = Handlebars.compile(htmlContent);
    const htmlRendered = template({ qr: qrImgBase64 });

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
