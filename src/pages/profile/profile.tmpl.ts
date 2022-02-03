import { Props } from "~/src/classes/block/block";

const template = (props: Props) => `
  <template class="profile">
    {{ avatar }}
    {{ child }}
    <a href="/" class="profile-back">
      <span class="profile-back__arrow"></span>
    </a>
  </template>
`;

export default template;
