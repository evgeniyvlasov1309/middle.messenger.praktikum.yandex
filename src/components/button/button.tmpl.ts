import { IButton } from "./button";

const template = (props: IButton) => `
  <template class="{{ className }}" type="{{ type }}">
      {{ text }}
  </template>
`;

export default template;
