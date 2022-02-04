import Block, { Props } from "~/src/classes/block";
import { getClassName } from "~/src/utils/utils";
import "./chat-preview.scss";
import template from "./chat-preview.tmpl";

export default class ChatPreview extends Block {
  constructor(props: Props = {}) {
    super("div", props);
    this.setProps({
      className: getClassName(["chat-preview", props.className || ""]),
    });
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
