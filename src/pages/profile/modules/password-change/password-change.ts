import Block, { Props } from "~/src/classes/block/block";
import Form from "~/src/components/form/form";
import Input from "~/src/components/input/input";
import template from "./password-change.tmpl";

export default class PasswordChange extends Block {
  fields: Input[] = [
    {
      className: "auth-form__input",
      name: "oldPassword",
      placeholder: "Старый пароль",
    },
    {
      className: "auth-form__input",
      name: "newPassword",
      placeholder: "Новый пароль",
      rule: "password",
    },
    {
      className: "auth-form__input",
      placeholder: "Новый пароль еще раз",
    },
  ].map((field) => new Input(field));

  constructor(props: Props = {}) {
    super("div", props);
    this.setProps({
      form: new Form({
        fields: this.fields,
        submitText: "Сохранить",
        onSubmit: () => {},
      }),
    });
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
