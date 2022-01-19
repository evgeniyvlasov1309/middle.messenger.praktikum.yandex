import Templator from "~/src/utils/templator";
import "./link.scss";
import template from "./link.tmpl";

export default function link(context) {
  return new Templator(template).compile(context);
}
