import { Props } from "~/src/classes/block";

const template = (props: Props) => `
  <template class="top-panel">
    <div class="top-panel__content">
      <div class="top-panel__avatar">
        <img class="top-panel__avatar-img" src="{{ avatar }}" width="40" height="40" alt=""/>
      </div>
      <div class="top-panel__title">{{ title }}</div>
      {{ button }}
      {{ popup }}
      {{ addUserModal }}
      {{ removeUserModal }}
      {{ removeChatModal }}
    </div>
  </template>
`;

export default template;
