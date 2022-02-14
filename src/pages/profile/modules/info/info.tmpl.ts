import { Props } from "~/src/classes/block";

const template = (props: Props) => `
  <template>
    <div class="profile__name">Имя</div>
    <div class="profile-fields">
      <div class="profile-field">
        <span class="profile-field__label">Почта</span>
        <span class="profile-field__data">pochta@yandex.ru</span>
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
        {{ changeDataLink }}
      </div>
      <div class="profile-control">
        {{ changePasswordLink }}
      </div>
      <div class="profile-control">
        {{ exitLink }}
      </div>
    </div>
    {{ button }}
    </div>
  </template>
`;

export default template;
