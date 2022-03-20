import { Props } from "~/src/classes/block";

const template = (props: Props) => `
<template class="chat-page">
  <div class="chat-sidebar">
    {{ chatSearch }}
    {{ chatList }}
    {{ userPanel }}
  </div>
  <div class="chat-content">
    ${
      props.chat && props.chat.id
        ? `{{ topPanel }}
    {{ messageList }}
    {{ messagePanel }}`
        : `<div class="chat-empty-label">Выберите чат чтобы отправить сообщение</div>`
    }
    
  </div>
</template>
`;
export default template;
