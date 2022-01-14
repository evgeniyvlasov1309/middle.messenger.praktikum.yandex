import { button } from "/src/components/button";
import { link } from "/src/components/link";
import { input } from "/src/components/input";
import Templator from "/src/utils/templator";

export function login(context = {}) {
  const inputs = [
    { className: "auth-form__input", name: "login", placeholder: "Логин" },
    { type: "password", className: "auth-form__input", name: "password", placeholder: "Пароль" },
  ];

  context.children = `
    ${inputs.map(inputCtx => input(inputCtx)).join("")}
    ${button({ text: "Войти", type: "button" })}
    ${link({ text: "Нет аккаунта?", url: "/auth/registration", className: "auth-form__link" })}
  `;

  return new Templator(context.children).compile(context);
}