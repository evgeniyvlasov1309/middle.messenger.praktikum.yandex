import Templator from "/src/utils/templator";
import styles from "./profile.scss";
import { avatar } from "./components/avatar";
import { defaultTemplate } from "./modules/default";
import { edit } from "./modules/edit";
import { link } from "/src/components/link";
import { passwordChange } from "./modules/password-change";

export function template(context) {
  function router() {
    const pathname = document.location.pathname;
    switch (pathname) {
      case "/profile/password-change":
        return passwordChange();
      case "/profile/edit":
        return edit();
      default:
        return defaultTemplate();
    }
  }

  return new Templator(`
    <div class="profile">
      ${avatar()}
      ${router()}
      <a href="/" class="profile-back">
        <span class="profile-back__arrow"></span>
      </a>
    </div>
  `).compile(context)
}