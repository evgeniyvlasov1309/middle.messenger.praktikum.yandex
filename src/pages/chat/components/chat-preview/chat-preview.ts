import Block, { Props } from "~/src/classes/block";
import { getClassName } from "~/src/utils/utils";
import "./chat-preview.scss";
import template from "./chat-preview.tmpl";

export interface IChatPreview extends Props {
  title: string;
  avatar: string;
  content: string;
  time: string;
  count: number;
  className?: string;
}

export default class ChatPreview extends Block<IChatPreview> {
  constructor(props: IChatPreview) {
    super("div", props);
    this.setProps({
      ...props,
      className: getClassName(["chat-preview", props.className || ""]),
    });
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
