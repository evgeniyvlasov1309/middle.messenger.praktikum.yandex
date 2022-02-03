import Block from "~/src/classes/block";
import { Props } from "~/src/classes/block/block";
import Button from "~/src/components/button";
import { getClassName } from "~/src/utils/utils";
import "./user-panel.scss";
import template from "./user-panel.tmpl";

export default class UserPanel extends Block {
  constructor(props: Props = {}) {
    super("div", props);
    this.setProps({
      addChatButton: new Button({
        className: getClassName(["btn", "btn--icon", "user-panel__add-chat"]),
      }),
    });
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
