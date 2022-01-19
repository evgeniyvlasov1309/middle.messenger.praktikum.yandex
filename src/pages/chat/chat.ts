import Templator from "~/src/utils/templator";
import template from "./chat.tmpl";

export default function chat(context) {
  return new Templator(template).compile(context);
}
