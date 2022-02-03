import Block from "~/src/classes/block/block";
import Link from "~/src/components/link/link";
import "./error.scss";
import template from "./error.tmpl";

export interface IErrorPage {
  title: string;
  description: string;
}

export default class ErrorPage extends Block {
  constructor(props: IErrorPage) {
    super("div", props);
    this.setProps({
      link: new Link({ url: "/chat", text: "Назад к чатам" }),
    });
  }

  render() {
    return this.compile(template(this.props as IErrorPage), this.props);
  }
}
