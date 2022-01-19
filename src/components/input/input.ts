import Templator from "~/src/utils/templator";
import "./input.scss";
import template from "./input.tmpl";

export default function input(context) {
  context.type = context.type || "text";

  return new Templator(template).compile(context);
}
