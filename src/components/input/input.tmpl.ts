import { IInput } from "./input";

const template = (props: IInput) => `
  <template class="{{ class }}">
    <input
      type="{{ type }}"
      class="input__element"
      name="{{ name }}"
      value="{{ value }}"
      placeholder="{{ placeholder }}"
    />
    ${props.error && `<div class="input__error">{{ error }}</div>`}
  </template>
`;

export default template;
