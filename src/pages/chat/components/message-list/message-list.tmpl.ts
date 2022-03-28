import { Props } from "~/src/classes/block";
import { childrenArrayToTemplate } from "~/src/utils/utils";

const template = (props: Props) => `
  <template class="message-list">
    ${childrenArrayToTemplate(props.messages || [])}
  </template>
`;

export default template;
