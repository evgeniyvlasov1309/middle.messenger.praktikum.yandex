import Block, { Props } from "~/src/classes/block/block";
import Form from "~/src/components/form/form";
import Input from "~/src/components/input/input";
import Link from "~/src/components/link/link";
import template from "./login.tmpl";

export default class Login extends Block {
  fields: Input[] = [
    {
      type: "text",
      className: "auth-form__input",
      name: "login",
      placeholder: "Логин",
      rule: "required",
    },
    {
      type: "text",
      className: "auth-form__input",
      name: "password",
      placeholder: "Пароль",
      rule: "required",
    },
  ].map((field) => new Input(field));

  constructor(props: Props = {}) {
    super("div", props);
    this.setProps({
      form: new Form({
        fields: this.fields,
        submitText: "Войти",
        footer: new Link({
          text: "Нет аккаунта?",
          url: "/auth/registration",
          className: "auth-form__link",
        }),
        onSubmit: () => {},
      }),
    });
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
