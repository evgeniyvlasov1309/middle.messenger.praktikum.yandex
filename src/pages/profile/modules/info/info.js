import Templator from "/src/utils/templator";
import { link } from "/src/components/link";
import { template } from "./info.tmpl";

export function info(context = {}) {
  const fields = [
    { label: "Почта", value: "pochta@yandex.ru"},
    { label: "Логин", value: "ivanivanov"},
    { label: "Имя", value: "Иван"},
    { label: "Фамилия", value: "Иванов"},
    { label: "Имя в чате", value: "Иван"},
    { label: "Телефон", value: "+7 (909) 967 30 30"},
  ];

  const links = [
    { url: "/profile/edit", className: "profile-control__link", text: "Изменить данные" },
    { url: "/profile/password-change", className: "profile-control__link", text: "Изменить пароль" },
    { url: "#", className: "profile-control__link profile-control__link--exit", text: "Выйти" }
  ];

  context.children = {
    fields: `
      ${fields.map(item => `
        <div class="profile-field">
          <span class="profile-field__label">${item.label}</span>
          <span class="profile-field__data">${item.value}</span>
        </div>
      `).join("")}
    `,
    links: `
      ${links.map(item => `
        <div class="profile-control">
          ${link(item)}
        </div>
      `).join("")}
    `
  };

  return new Templator(template).compile(context)
}