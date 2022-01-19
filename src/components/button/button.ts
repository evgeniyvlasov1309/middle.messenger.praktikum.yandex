import Templator from "~/src/utils/templator";
import template from "./button.tmpl";
import "./button.scss";

export default function button(context) {
  return new Templator(template).compile(context);
}
