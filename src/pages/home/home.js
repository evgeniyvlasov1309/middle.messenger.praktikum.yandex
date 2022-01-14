import Templator from "/src/utils/templator";
import { link } from "/src/components/link";
import { profile } from "/src/pages/profile";
import { chat } from "/src/pages/chat";
import { error } from "/src/components/error";
import { auth } from "/src/pages/auth";
import styles from "./home.scss";

export function home(context = {}) {
  const pathname = document.location.pathname;

  const links = [
    { url: "/auth/login", className: "link", text: "auth" },
    { url: "/profile", text: "profile" },
    { url: "/chat", text: "chat" },
    { url: "/server-error", text: "500" },
    { url: "/not-found-error", text: "404" }
  ];

  switch (pathname) {
    case "/":
      context.children = `<div class="home">
                ${links.map(linkCtx => link(linkCtx)).join("")}
              </div>`;
      break;
    case "/auth/login":
      context.children = auth();
      break;
    case "/auth/registration":
      context.children = auth();
      break;
    case "/profile":
      context.children = profile();
      break;
    case "/profile/edit":
      context.children = profile();
      break;
    case "/profile/password-change":
      context.children = profile();
      break;
    case "/chat":
      context.children = chat();
      break;
    case "/server-error":
      context.children = error({ title: "500", description: "Ошибка на сервере" });
      break;
    default:
      context.children = error({ title: "404", description: "Страница не найдена" });
      break;
  }

  return new Templator(context.children).compile(context)
}