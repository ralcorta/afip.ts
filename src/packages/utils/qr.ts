import { toDataURL } from "qrcode";

export class QR {
  static async qrBase64Image(content: string) {
    return await new Promise<string>((resolve, reject) => {
      toDataURL(content, function (err, code) {
        if (err) {
          reject(reject);
          return;
        }
        resolve(code);
      });
    });
  }
}
