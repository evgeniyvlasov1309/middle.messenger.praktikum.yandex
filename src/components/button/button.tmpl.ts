import { IButton } from "./button";

const template = (props: IButton) => `
  <template class="{{ class }}" type="{{ type }}">
      {{ text }}
  </template>
`;

export default template;
