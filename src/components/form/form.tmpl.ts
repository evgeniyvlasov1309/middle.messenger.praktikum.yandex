import { childrenArrayToTemplate } from "~/src/utils/utils";
import { IForm } from "./form";

const template = (props: IForm) => `
  <template class="{{ className }}">
      ${childrenArrayToTemplate(props.fields)}
      {{ submitButton }}
      {{ footer }}
  </template>
`;

export default template;
