import Templator from "/src/utils/templator";
import styles from "./avatar.scss";

export function template(context) {
  return new Templator(`
    <div class="avatar">
      <input type="file" name="avatar" hidden>
      <div class="avatar__overlay">
        <span>Поменять аватар</span>
      </div>
    </div>
  `).compile(context)
}