import Templator from "/src/utils/templator";
import { login } from "./modules/login";
import { registration } from "./modules/registration";
import styles from "./auth.scss";
import { template } from "./auth.tmpl";

export function auth(context = {}) {
  const pathname = document.location.pathname;
  switch (pathname) {
    case "/auth/login":
      context.children = login();
      context.title = "Вход";
      break;
    case "/auth/registration":
      context.children = registration();
      context.title = "Регистрация";
      break;
  }

  return new Templator(template).compile(context)
}