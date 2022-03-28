import { Props } from "~/src/classes/block";

const template = (props: Props) => `
  <template class="{{ className }}">
    {{ content }}
    <div class="message__time">{{ time }}</div>
  </template>
`;

export default template;
