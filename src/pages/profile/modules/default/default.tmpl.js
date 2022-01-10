import Templator from "/src/utils/templator";
import { link } from "/src/components/link";

export function template(context) {
  return new Templator(`
    <div class="profile__name">Имя</div>
    <div class="profile-fields">
      <div class="profile-field">
        <span class="profile-field__label">Почта</span>
        <span class="profile-field__data">pochta@yandex.ru</span>
      </div>
      <div class="profile-field">
        <span class="profile-field__label">Логин</span>
        <span class="profile-field__data">ivanivanov</span>
      </div>
      <div class="profile-field">
        <span class="profile-field__label">Имя</span>
        <span class="profile-field__data">Иван</span>
      </div>
      <div class="profile-field">
        <span class="profile-field__label">Фамилия</span>
        <span class="profile-field__data">Иванов</span>
      </div>
      <div class="profile-field">
        <span class="profile-field__label">Имя в чате</span>
        <span class="profile-field__data">Иван</span>
      </div>
      <div class="profile-field">
        <span class="profile-field__label">Телефон</span>
        <span class="profile-field__data">+7 (909) 967 30 30</span>
      </div>
    </div>
    
    <div class="profile-controls">
      <div class="profile-control">
        ${link({ url: "/profile/edit", className: "profile-control__link", text: "Изменить данные" })}
      </div>
      <div class="profile-control">
        ${link({ url: "/profile/password-change", className: "profile-control__link", text: "Изменить пароль" })}
      </div>
      <div class="profile-control">
        ${link({ url: "#", className: "profile-control__link profile-control__link--exit", text: "Выйти" })}
      </div>
    </div>
  `).compile(context)
}