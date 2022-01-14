import Templator from "/src/utils/templator";
import { button } from "/src/components/button";
import { input } from "/src/components/input";
import { template } from "./edit.tmpl";

export function edit(context = {}) {
  const inputs = [
    { className: "auth-form__input", name: "email", placeholder: "Почта" },
    { className: "auth-form__input", name: "login", placeholder: "Логин" },
    { className: "auth-form__input", name: "first_name", placeholder: "Имя" },
    { className: "auth-form__input", name: "second_name", placeholder: "Фамилия" },
    { className: "auth-form__input", name: "display_name", placeholder: "Имя в чате" },
    { className: "auth-form__input", name: "phone", placeholder: "Телефон" },
  ];

  context.children = `
    ${inputs.map(inputCtx => input(inputCtx)).join("")}
    ${button({ text: "Сохранить", type: "button" })}
  `;

  return new Templator(template).compile(context)
}