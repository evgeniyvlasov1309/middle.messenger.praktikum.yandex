import { Props } from "~/src/classes/block";

const template = (props: Props) => `
  <template class="auth">
    <div class="auth-form">
      <h3 class="auth-form__title">Вход</h3>
      {{ form }}
    </form>
  </template>`;

export default template;
