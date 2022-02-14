import Block, { Props } from "~/src/classes/block";
import { getClassName } from "~/src/utils/utils";
import "./button.scss";
import template from "./button.tmpl";

export interface IButton extends Props {
  type?: string;
  text?: string;
  className?: string;
}
export default class Button extends Block<IButton> {
  constructor(props: IButton) {
    super("button", props);
    this.setProps({
      className: getClassName(["btn", props.className || ""]),
      type: props.type || "button",
    });
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
