import Templator from "~/src/utils/templator";
import "./avatar.scss";
import template from "./avatar.tmpl";

export default function avatar(context) {
  return new Templator(template).compile(context);
}
