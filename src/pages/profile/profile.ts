import Templator from "~/src/utils/templator";
import avatar from "./components/avatar";
import edit from "./modules/edit";
import info from "./modules/info";
import passwordChange from "./modules/password-change";
import "./profile.scss";
import template from "./profile.tmpl";

export default function profile(context = {}) {
  const { pathname } = document.location;

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

  return new Templator(template).compile(context);
}
