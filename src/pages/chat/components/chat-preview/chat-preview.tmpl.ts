import { Props } from "~/src/classes/block/block";

const template = (props: Props) => `
  <template class="{{ className }}">
    <div class="chat-preview__content">
      <img class="chat-preview__avatar" src="" width="40" height="40" alt="avatar"/>
      <div class="chat-preview__info">
        <div class="chat-preview__title">Chat 1</div>
        <div class="chat-preview__message">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene...
        </div>
      </div>
      <div class="chat-preview__date">12:43</div>
      <div class="chat-preview__counter">4</div>
    </div>
  </template>
`;

export default template;
