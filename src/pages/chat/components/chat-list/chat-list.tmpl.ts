import { Props } from "~/src/classes/block";
import { childrenArrayToTemplate } from "~/src/utils/utils";

const template = (props: Props) => `
  <template class="chat-list">
    ${childrenArrayToTemplate(props.chats || [])}
  </template>
`;

export default template;
