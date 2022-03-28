import { IModal } from "./modal";

const template = (props: IModal) => `
<template class="{{ className }} modal">
  <div class="modal__content">
    <div class="modal__close">&#10006;</div>
    <div class="modal__title">{{ title }}</div>
    {{ content }}
  </div>
</template>
`;

export default template;
