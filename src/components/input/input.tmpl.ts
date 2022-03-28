import { IInput } from "./input";

const template = (props: IInput) => `
  <template class="{{ className }}">
    <input
      type="{{ type }}"
      class="input__element"
      name="{{ name }}"
      value="{{ value }}"
      placeholder="{{ placeholder }}"
      accept="{{ accept }}"
    />
    ${props.error && `<div class="input__error">{{ error }}</div>`}
  </template>
`;

export default template;
