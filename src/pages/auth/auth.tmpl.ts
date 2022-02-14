import { Props } from "~/src/classes/block";

const template = (props: Props) => `
  <template class="auth">
    <div class="auth-form">
      <h3 class="auth-form__title">{{ title }}</h3>
      {{ child }}
    </form>
  </template>
`;

export default template;
