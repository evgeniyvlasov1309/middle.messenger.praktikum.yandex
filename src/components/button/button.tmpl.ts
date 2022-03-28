import { IButton } from "./button";

const template = (props: IButton) => `
  <template class="{{ className }}${
    props.focused ? " active" : ""
  }" type="{{ type }}">
      {{ text }}
  </template>
`;

export default template;
