import { launch, PDFOptions } from "puppeteer";

export class PDF {
  static async generateFromHTML(htmlContent: string, options?: PDFOptions) {
    const browser = await launch();
    const page = await browser.newPage();
    await page.setContent(htmlContent);
    const pdf = await page.pdf({ format: "A4", ...options });
    await browser.close();
    return pdf;
  }
}
