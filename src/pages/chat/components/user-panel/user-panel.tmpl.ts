import { Props } from "~/src/classes/block";

const template = (props: Props) => `
  <template class="user-panel">
    {{ addChatButton }}
    {{ addChatModal }}
    <a href="/settings" class="user-panel__profile">
      <img class="user-panel__avatar" src="{{ src }}" width="40" height="40" alt=""/>
    </a>
  </template>
`;

export default template;
