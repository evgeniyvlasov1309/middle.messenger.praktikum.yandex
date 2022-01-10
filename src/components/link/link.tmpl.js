import Templator from "/src/utils/templator";
import styles from "./link.scss";

export function template(context) {
  return new Templator(`
  <a href="{{ url }}" class="{{ className }} link">{{ text }}</a>
  `).compile(context)
}