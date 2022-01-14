import Templator from "/src/utils/templator";
import { button } from "/src/components/button";
import { input } from "/src/components/input";
import { template } from "./password-change.tmpl";

export function passwordChange(context = {}) {
  const inputs = [
    { type: "password", className: "auth-form__input", name: "oldPassword", placeholder: "Старый пароль" },
    { type: "password", className: "auth-form__input", name: "newPassword", placeholder: "Новый пароль" },
    { type: "password", className: "auth-form__input", placeholder: "Новый пароль еще раз" },
  ];

  context.children = `
    ${inputs.map(inputCtx => input(inputCtx)).join("")}
    ${button({ text: "Сохранить", type: "button" })}
  `;

  return new Templator(template).compile(context)
}