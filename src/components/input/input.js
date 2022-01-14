import Templator from "/src/utils/templator";
import { template } from "./input.tmpl";
import styles from "./input.scss";

export function input(context) {
  context.type = context.type || "text";

  return new Templator(template).compile(context);
}