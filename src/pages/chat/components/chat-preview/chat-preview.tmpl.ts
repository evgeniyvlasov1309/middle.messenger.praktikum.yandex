import { Props } from "~/src/classes/block";

const template = (props: Props) => `
  <template class="{{ className }}">
    <div class="chat-preview__content">
      <img class="chat-preview__avatar" src="{{ avatar }}" width="40" height="40" alt="avatar"/>
      <div class="chat-preview__info">
        <div class="chat-preview__title">{{ title }}</div>
        <div class="chat-preview__message">
          {{ content }}
        </div>
      </div>
      <div class="chat-preview__date">{{ time }}</div>
      ${
        props.count
          ? `<div class="chat-preview__counter">{{ count }}</div>`
          : ""
      }
    </div>
  </template>
`;

export default template;
