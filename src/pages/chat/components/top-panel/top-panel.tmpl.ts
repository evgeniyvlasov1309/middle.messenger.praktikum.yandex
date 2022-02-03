import { Props } from "~/src/classes/block/block";

const template = (props: Props) => `
  <template class="top-panel">
    <div class="top-panel__content">
      <div class="top-panel__avatar">
        <img class="top-panel__avatar-img" src="" width="40" height="40" alt=""/>
      </div>
      <div class="top-panel__title">Чат 1</div>
      {{ button }}
    </div>
  </template>
`;

export default template;
