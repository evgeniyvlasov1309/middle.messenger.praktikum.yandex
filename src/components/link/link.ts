import Block from "~/src/classes/block";
import { Props } from "~/src/classes/block/block";
import "./link.scss";
import template from "./link.tmpl";

export interface ILink extends Props {
  url: string;
  className?: string;
  text: string;
}
export default class Link extends Block {
  constructor(props: ILink) {
    super("a", props);
  }

  render() {
    return this.compile(template(this.props as ILink), this.props);
  }
}
