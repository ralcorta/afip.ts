import { Handlebars } from "./handlebars-adapter";

export class TemplateCompiler<T extends Record<string, any>> {
  constructor(
    private readonly htmlContent: string,
    private readonly params: T
  ) {}

  execute() {
    const template = Handlebars.compile(this.htmlContent);
    return template(this.params);
  }
}
