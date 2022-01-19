import link from "~/src/components/link";
import Templator from "~/src/utils/templator";
import "./error.scss";
import template from "./error.tmpl";

export default function error(context) {
  context.children = {
    link: link({ url: "/chat", text: "Назад к чатам" }),
  };

  return new Templator(template).compile(context);
}
