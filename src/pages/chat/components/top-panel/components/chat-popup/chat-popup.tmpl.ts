import { Props } from "~/src/classes/block";

const template = (props: Props) => `
  <template class="chat-popup">
    {{ addUserLink }}
    {{ removeUserLink }}
    {{ removeChatLink }}
  </template>
`;

export default template;
