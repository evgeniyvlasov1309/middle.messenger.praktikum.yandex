import button from "~/src/components/button";
import input from "~/src/components/input";
import link from "~/src/components/link";
import Templator from "~/src/utils/templator";

export default function registration(context = {}) {
  const inputs = [
    { className: "auth-form__input", name: "email", placeholder: "Почта" },
    { className: "auth-form__input", name: "login", placeholder: "Логин" },
    { className: "auth-form__input", name: "first_name", placeholder: "Имя" },
    {
      className: "auth-form__input",
      name: "second_name",
      placeholder: "Фамилия",
    },
    { className: "auth-form__input", name: "phone", placeholder: "Телефон" },
    {
      type: "password",
      className: "auth-form__input",
      name: "password",
      placeholder: "Пароль",
    },
    {
      type: "password",
      className: "auth-form__input",
      placeholder: "Пароль еще раз",
    },
  ];

  context.children = `
    ${inputs.map((inputCtx) => input(inputCtx)).join("")}
    ${button({ text: "Зарегистрироваться", type: "button" })}
    ${link({ text: "Войти", url: "/auth/login", className: "auth-form__link" })}
  `;

  return new Templator(context.children).compile(context);
}
