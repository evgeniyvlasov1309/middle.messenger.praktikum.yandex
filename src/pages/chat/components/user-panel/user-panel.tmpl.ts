import { Props } from "~/src/classes/block/block";

const template = (props: Props) => `
  <template class="user-panel">
    {{ addChatButton }}
    <a href="/profile" class="user-panel__profile">
      <img class="user-panel__avatar" src="" width="40" height="40" alt=""/>
    </a>
  </template>
`;

export default template;
