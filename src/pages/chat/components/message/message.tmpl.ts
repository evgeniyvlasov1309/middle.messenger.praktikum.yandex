import { Props } from "~/src/classes/block/block";

const template = (props: Props) => `
  <template class="{{ className }}">
    {{ text }}
    <div class="message__time">11:56</div>
  </template>
`;

export default template;
