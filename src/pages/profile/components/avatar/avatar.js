import Templator from "/src/utils/templator";
import { template } from "./avatar.tmpl";
import styles from "./avatar.scss";

export function avatar(context) {
  return new Templator(template).compile(context)
}