import { ILink } from "./link";

const template = (props: ILink) => `
<template href="{{ url }}" class="{{ className }} link">{{ text }}</template>
`;

export default template;
