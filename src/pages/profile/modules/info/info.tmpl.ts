import { Props } from "~/src/classes/block";

const template = (props: Props) => `
  <template>
    <div class="profile__name">{{ user.first_name }}</div>
    <div class="profile-fields">
      <div class="profile-field">
        <span class="profile-field__label">Почта</span>
        <span class="profile-field__data">{{ user.email }}</span>
      </div>
      <div class="profile-field">
        <span class="profile-field__label">Имя</span>
        <span class="profile-field__data">{{ user.first_name }}</span>
      </div>
      <div class="profile-field">
        <span class="profile-field__label">Фамилия</span>
        <span class="profile-field__data">{{ user.second_name }}</span>
      </div>
      <div class="profile-field">
        <span class="profile-field__label">Имя в чате</span>
        <span class="profile-field__data">{{ user.display_name }}</span>
      </div>
      <div class="profile-field">
        <span class="profile-field__label">Телефон</span>
        <span class="profile-field__data">{{ user.phone }}</span>
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
    </div>
  </template>
`;

export default template;
