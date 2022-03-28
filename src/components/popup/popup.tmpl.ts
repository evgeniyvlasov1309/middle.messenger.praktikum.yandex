import { IPopup } from "./popup";

const template = (props: IPopup) => `
<template class="{{ className }} popup">
  {{ content }}
</template>
`;

export default template;
