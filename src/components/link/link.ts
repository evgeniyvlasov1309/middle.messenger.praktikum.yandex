import router from "~/src";
import Block, { Props } from "~/src/classes/block";
import "./link.scss";
import template from "./link.tmpl";

export interface ILink extends Props {
  url: string;
  className?: string;
  content: string;
}
export default class Link extends Block<ILink> {
  constructor(props: ILink) {
    super("a", props);
    this.setProps({
      events: {
        click: this.onClick.bind(this),
      },
      ...props,
    });
  }

  onClick(e: any) {
    e.preventDefault();

    router.go(e.target.getAttribute("href"));
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
