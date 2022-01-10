import Templator from "/src/utils/templator";
import { link } from "/src/components/link";
import { profile } from "/src/pages/profile";
import { chat } from "/src/pages/chat";
import { error } from "/src/components/error";
import { auth } from "/src/pages/auth";
import styles from "./home.scss";

export function template(context) {
  function router() {
    const pathname = document.location.pathname;
    switch (pathname) {
      case "/":
        return `<div class="home">
                  ${links.map(linkCtx => link(linkCtx)).join("")}
                </div>`;
      case "/auth/login":
        return auth();
      case "/auth/registration":
        return auth();
      case "/profile":
        return profile();
      case "/profile/edit":
        return profile();
      case "/profile/password-change":
        return profile();
      case "/chat":
        return chat();
      case "/server-error":
        return error({ title: "500", description: "Ошибка на сервере" });
      default:
        return error({ title: "404", description: "Страница не найдена" });
    }
  }

  const links = [
    { url: "/auth/login", className: "link", text: "auth" },
    { url: "/profile", text: "profile" },
    { url: "/chat", text: "chat" },
    { url: "/server-error", text: "500" },
    { url: "/not-found-error", text: "404" }
  ];

  return new Templator(`
    ${router()}
  `).compile(context)
}