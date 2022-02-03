import { Props } from "~/src/classes/block/block";

const template = (props: Props) => `
  <template class="avatar">
    <input type="file" name="avatar" hidden>
    <div class="avatar__overlay">
      <span>Поменять аватар</span>
    </div>
  </template>
`;

export default template;
