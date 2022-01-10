import Templator from "/src/utils/templator";
import { button } from "/src/components/button";
import { input } from "/src/components/input";

export function template(context) {
  const inputs = [
    { type: "input", className: "auth-form__input", name: "email", placeholder: "Почта" },
    { type: "input", className: "auth-form__input", name: "login", placeholder: "Логин" },
    { type: "input", className: "auth-form__input", name: "first_name", placeholder: "Имя" },
    { type: "input", className: "auth-form__input", name: "second_name", placeholder: "Фамилия" },
    { type: "input", className: "auth-form__input", name: "display_name", placeholder: "Имя в чате" },
    { type: "input", className: "auth-form__input", name: "phone", placeholder: "Телефон" },
  ];

  return new Templator(`
    <div class="profile__edit-wrapper">
      ${inputs.map(inputCtx => input(inputCtx)).join("")}
      ${button({ text: "Сохранить", type: "button" })}
    </div>
  `).compile(context)
}