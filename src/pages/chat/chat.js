import Templator from "/src/utils/templator";
import { template } from "./chat.tmpl";

export function chat(context) {
  return new Templator(template).compile(context)
}