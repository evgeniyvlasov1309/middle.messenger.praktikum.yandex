import Block, { Props } from "~/src/classes/block";
import Button from "~/src/components/button/button";
import Form from "~/src/components/form/form";
import Input from "~/src/components/input/input";
import { getClassName } from "~/src/utils/utils";
import "./message-panel.scss";
import template from "./message-panel.tmpl";

export default class MessagePanel extends Block {
  fields = [
    {
      placeholder: "Сообщение",
      name: "message",
      className: "message-panel__input",
      rule: "required",
    },
  ].map((field) => new Input(field));

  constructor(props: Props = {}) {
    super("div", props);
    this.setProps({
      attachButton: new Button({
        className: getClassName([
          "btn",
          "btn--icon-small",
          "message-panel__attach-button",
        ]),
      }),
      form: new Form({
        className: "message-panel__form",
        fields: this.fields,
        submitElement: new Button({
          type: "submit",
          className: getClassName([
            "btn",
            "btn--icon-small",
            "message-panel__send-button",
          ]),
        }),
        onSubmit: () => {},
      }),
    });
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
