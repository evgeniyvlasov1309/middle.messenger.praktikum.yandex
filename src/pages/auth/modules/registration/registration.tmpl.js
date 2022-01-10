import { button } from "/src/components/button";
import { link } from "/src/components/link";
import { input } from "/src/components/input";
import Templator from "/src/utils/templator";

export function template(context) {
  const inputs = [
    { type: "input", className: "auth-form__input", name: "email", placeholder: "Почта" },
    { type: "input", className: "auth-form__input", name: "login", placeholder: "Логин" },
    { type: "input", className: "auth-form__input", name: "first_name", placeholder: "Имя" },
    { type: "input", className: "auth-form__input", name: "second_name", placeholder: "Фамилия" },
    { type: "input", className: "auth-form__input", name: "phone", placeholder: "Телефон" },
    { type: "password", className: "auth-form__input", name: "password", placeholder: "Пароль" },
    { type: "password", className: "auth-form__input", placeholder: "Пароль еще раз" },
  ];

  return new Templator(`
  <h3 class="auth-form__title">Регистрация</h3>
  ${inputs.map(inputCtx => input(inputCtx)).join("")}
  ${button({ text: "Зарегистрироваться", type: "button" })}
  ${link({ text: "Войти", url: "/auth/login", className: "auth-form__link" })}
  `).compile(context)
}