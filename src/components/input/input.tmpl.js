import Templator from "/src/utils/templator";
import styles from "./input.scss";

export function template(context) {
  return new Templator(`
  <input type="{{ type }}" class="input {{ className }}" name="{{ name }}" placeholder="{{ placeholder }}"/>
  `).compile(context)
}