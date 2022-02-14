import { IErrorPage } from "./error";

const template = (props: IErrorPage) => `
  <template class="error">
    <h2 class="error__title">{{ title }}</h2>
    <p class="error__description">{{ description }}</p>
    {{ link }}
  </template>
`;

export default template;
