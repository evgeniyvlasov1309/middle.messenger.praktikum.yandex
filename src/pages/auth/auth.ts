import Templator from "~/src/utils/templator";
import "./auth.scss";
import template from "./auth.tmpl";
import login from "./modules/login";
import registration from "./modules/registration";

export default function auth(context = {}) {
  const { pathname } = document.location;
  switch (pathname) {
    case "/auth/login":
      context.children = login();
      context.title = "Вход";
      break;
    case "/auth/registration":
      context.children = registration();
      context.title = "Регистрация";
      break;
    default:
      break;
  }

  return new Templator(template).compile(context);
}
