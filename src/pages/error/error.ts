import Block from "~/src/classes/block";
import Link from "~/src/components/link/link";
import "./error.scss";
import template from "./error.tmpl";

export interface IErrorPage {
  title: string;
  description: string;
  link?: Link;
}

export default class ErrorPage extends Block<IErrorPage> {
  constructor(props: IErrorPage) {
    super("div", props);
    this.setProps({
      ...props,
      link: new Link({ url: "/chat", content: "Назад к чатам" }),
    });
  }

  render() {
    return this.compile(template(this.props as IErrorPage), this.props);
  }
}
