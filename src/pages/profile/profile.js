import Templator from "/src/utils/templator";
import { avatar } from "./components/avatar";
import { info } from "./modules/info";
import { edit } from "./modules/edit";
import { passwordChange } from "./modules/password-change";
import { template } from "./profile.tmpl";
import styles from "./profile.scss";

export function profile(context = {}) {
  const pathname = document.location.pathname;

  context.children = avatar();

  switch (pathname) {
    case "/profile/password-change":
      context.children += passwordChange();
      break;
    case "/profile/edit":
      context.children += edit();
      break;
    default:
      context.children += info();
      break;
  }

  return new Templator(template).compile(context)
}