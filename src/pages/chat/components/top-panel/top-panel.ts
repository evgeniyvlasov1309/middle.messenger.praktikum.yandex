import Block, { Props } from "~/src/classes/block";
import Button from "~/src/components/button";
import { getClassName } from "~/src/utils/utils";
import "./top-panel.scss";
import template from "./top-panel.tmpl";

export default class TopPanel extends Block {
  constructor(props: Props = {}) {
    super("div", props);
    this.setProps({
      button: new Button({
        className: getClassName([
          "btn",
          "btn--icon-small",
          "top-panel__action-button",
        ]),
      }),
    });
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
