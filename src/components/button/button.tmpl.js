import Templator from "/src/utils/templator";
import styles from "./button.scss";

export function template(context) {
  return new Templator(`
  <button class="btn {{ className }}" type="{{ type }}">
      {{ text }}
  </button>
  `).compile(context)
}