import Block, { Props } from "~/src/classes/block/block";
import { getClassName } from "~/src/utils/utils";
import "./button.scss";
import template from "./button.tmpl";

export interface IButton extends Props {
  type?: string;
  text?: string;
  className?: string;
}
export default class Button extends Block {
  constructor(props: IButton) {
    super("button", props);
    this.setProps({
      class: getClassName(["btn", props.className || ""]),
      type: props.type || "button",
    });
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
