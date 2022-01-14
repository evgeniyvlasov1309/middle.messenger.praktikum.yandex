import Templator from "/src/utils/templator";
import styles from "./link.scss";
import { template } from "./link.tmpl";

export function link(context) {
  return new Templator(template).compile(context)
}