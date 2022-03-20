import { get } from "../utils/utils";
import { Props } from "./block";

export default class Templator {
  TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;
  public _template: string;

  constructor(template: string) {
    this._template = template;
  }

  compile(context: Props) {
    return this._compileTemplate(this._template, context);
  }

  _compileTemplate(template: string, context: Props) {
    let tmpl = template;
    let key = null;

    const regExp = this.TEMPLATE_REGEXP;

    while ((key = regExp.exec(template))) {
      if (key[1]) {
        const tmplValue = key[1].trim();
        const data = get(context, tmplValue);

        tmpl = tmpl.replace(new RegExp(key[0], "gi"), data);
      }
    }

    return tmpl;
  }
}

export function compile(template: string, props: Props) {
  return new Templator(template).compile(props);
}
