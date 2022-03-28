import { ILink } from "./link";

const template = (props: ILink) => `
<template href="{{ url }}" class="{{ className }} link">{{ content }}</template>
`;

export default template;
