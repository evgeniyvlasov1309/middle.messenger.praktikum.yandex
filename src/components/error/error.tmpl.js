import Templator from "/src/utils/templator";
import { link } from "/src/components/link";
import styles from "./error.scss";

export function template(context) {
  return new Templator(`
  <div class="error">
    <h2 class="error__title">{{ title }}</h2>
    <p class="error__description">{{ description }}</p>
    ${link({ url: "/chat", text: "Назад к чатам" })}
  </div>
  `).compile(context)
}