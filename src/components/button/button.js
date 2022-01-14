import Templator from "/src/utils/templator";
import { template } from "./button.tmpl";
import styles from "./button.scss";

export function button(context) {
  return new Templator(template).compile(context)
}