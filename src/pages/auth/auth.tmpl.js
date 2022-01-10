import Templator from "/src/utils/templator";
import { login } from "./modules/login";
import { registration } from "./modules/registration";
import styles from "./auth.scss";

export function template(context) {
  function router() {
    const pathname = document.location.pathname;
    switch (pathname) {
      case "/auth/login":
        return login();
      case "/auth/registration":
        return registration();
    }
  }

  return new Templator(`
    <div class="auth">
      <div class="auth-form">
        ${router()}
      </div>
    </div>
  `).compile(context)
}