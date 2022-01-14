import Templator from "/src/utils/templator";
import { template } from "./error.tmpl";
import { link } from "/src/components/link";
import styles from "./error.scss";

export function error(context) {
  context.children = {
    link: link({ url: "/chat", text: "Назад к чатам" })
  };

  return new Templator(template).compile(context);
}