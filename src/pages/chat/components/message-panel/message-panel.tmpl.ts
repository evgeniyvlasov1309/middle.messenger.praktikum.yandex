import { Props } from "~/src/classes/block/block";

const template = (props: Props) => `
  <template class="message-panel">
    {{ attachButton }}
    {{ form }}
  </template>
`;

export default template;
