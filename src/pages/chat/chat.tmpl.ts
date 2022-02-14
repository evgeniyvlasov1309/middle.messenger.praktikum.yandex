import { Props } from "~/src/classes/block";

const template = (props: Props) => `
<template class="chat-page">
  <div class="chat-sidebar">
    {{ chatSearch }}
    <div class="chat-sidebar__chat-list">
      {{ chatPreview1 }}
      {{ chatPreview2 }}
    </div>
    {{ userPanel }}
  </div>
  <div class="chat-content">
    {{ topPanel }}
    {{ messageList }}
    {{ messagePanel }}
  </div>
</template>
`;

export default template;
