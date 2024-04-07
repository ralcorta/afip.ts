import { PathLike } from "fs";
import { PDF } from "./utils/pdf";
import { QR } from "./utils/qr";
import { readFile, writeFile, FileHandle } from "fs/promises";
import { TemplateCompiler } from "./template/compiler";
import {
  CreatePDFFromBuffer,
  CreatePDFFromPath,
  FilePath,
  GenerateInvoiceParams,
  InvoiceTemplateParams,
  QRContent,
} from "./types";
import { InvoiceTypeMap } from "./invoice-type-map";

export class PDFInvoice {
  constructor(private payload: GenerateInvoiceParams) {}

  /**
   * QR content based on AFIP specifications
   *
   * URL https://www.afip.gob.ar/fe/qr/especificaciones.asp
   *
   * @param data QRContent
   * @returns string
   */
  async getQr(data: QRContent): Promise<string> {
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
  private getQrContent({
    header,
    meta,
    info,
  }: GenerateInvoiceParams): QRContent {
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
   * Read invoice template from file system and return its content
   *
   * @param templatePath
   * @param encoding
   * @returns
   */
  private async readInvoiceTemplate(
    templatePath: PathLike | FileHandle,
    encoding: BufferEncoding
  ): Promise<string> {
    return readFile(templatePath, encoding);
  }

  /**
   * Save invoice PDF in the specified path
   *
   * @param pdfBuffer
   * @param path
   */
  private async saveInvoice(pdfBuffer: Buffer, path: FilePath): Promise<void> {
    await writeFile(path, pdfBuffer);
  }

  async createPDF({ template, saveIn }: CreatePDFFromBuffer) {
    const qrContent = this.getQrContent(this.payload);
    const qr = await this.getQr(qrContent);
    const compiler = new TemplateCompiler<InvoiceTemplateParams>(template, {
      qr,
      ...this.payload,
    });
    const buffer = await PDF.generateFromHTML(compiler.execute());

    if (saveIn) await this.saveInvoice(buffer, saveIn);

    return buffer;
  }

  /**
   * Generate invoice PDF
   *
   * @returns Promise<Buffer>
   * @throws Error
   */
  async createPDFFromPath({
    templatePath = `${__dirname}/assets/invoice_b_c.html`,
    encoding = "utf8",
    saveIn,
  }: CreatePDFFromPath): Promise<Buffer> {
    const htmlContent = await this.readInvoiceTemplate(templatePath, encoding);
    return this.createPDF({ template: htmlContent, saveIn });
  }
}
