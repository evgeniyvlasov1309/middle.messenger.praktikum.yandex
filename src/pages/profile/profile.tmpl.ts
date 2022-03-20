import { Props } from "~/src/classes/block";

const template = (props: Props) => `
  <template class="profile">
    {{ avatar }}
    {{ avatarModal }}
    {{ child }}
    {{ backLink }}
  </template>
`;

export default template;
