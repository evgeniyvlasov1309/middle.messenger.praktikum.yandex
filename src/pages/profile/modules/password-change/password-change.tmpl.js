import Templator from "/src/utils/templator";
import { button } from "/src/components/button";
import { input } from "/src/components/input";

export function template(context) {
  const inputs = [
    { type: "password", className: "auth-form__input", name: "oldPassword", placeholder: "Старый пароль" },
    { type: "password", className: "auth-form__input", name: "newPassword", placeholder: "Новый пароль" },
    { type: "password", className: "auth-form__input", placeholder: "Новый пароль еще раз" },
  ];

  return new Templator(`
    <div class="profile__edit-wrapper">
      ${inputs.map(inputCtx => input(inputCtx)).join("")}
      ${button({ text: "Сохранить", type: "button" })}
    </div>
  `).compile(context)
}