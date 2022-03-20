import { Props } from "~/src/classes/block";

const template = (props: Props) => `
  <template class="avatar">
    <label>
      <img class="avatar__image" src="{{ src }}"/>
      {{ input }}
      <div class="avatar__overlay">
        <span>Поменять аватар</span>
      </div>
    </label>
  </template>
`;

export default template;
