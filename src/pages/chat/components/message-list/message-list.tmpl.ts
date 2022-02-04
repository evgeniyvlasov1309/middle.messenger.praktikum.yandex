import { Props } from "~/src/classes/block";

const template = (props: Props) => `
  <template class="message-list">
    <div class="message-list__date">23 декабря</div>
    {{ message1 }}
    {{ message2 }}
    {{ message3 }}
  </template>
`;

export default template;
