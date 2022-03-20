import { LoginRequest } from "~/src/api/auth/auth-api.types";
import Block, { Props } from "~/src/classes/block";
import Form from "~/src/components/form/form";
import Input from "~/src/components/input/input";
import Link from "~/src/components/link/link";
import authController from "~/src/controllers/auth-controller";
import withUser from "~/src/selectors/user";
import "./login.scss";
import template from "./login.tmpl";

class LoginPage extends Block {
  fields: Input[] = [
    {
      type: "text",
      className: "auth-form__input",
      name: "login",
      placeholder: "Логин",
      rule: "required",
    },
    {
      type: "password",
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
          content: "Нет аккаунта?",
          url: "/sign-up",
          className: "auth-form__link",
        }),
        onSubmit: this.onSubmit.bind(this),
      }),
    });
  }

  onSubmit(data: LoginRequest) {
    authController.login(data);
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}

export default withUser(LoginPage as typeof Block);
