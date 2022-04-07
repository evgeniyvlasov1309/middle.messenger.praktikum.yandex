import { RegistrationRequest } from "~/src/api/auth/auth-api.types";
import Block, { Props } from "~/src/classes/block";
import Form from "~/src/components/form/form";
import Input, { IInput } from "~/src/components/input/input";
import Link from "~/src/components/link/link";
import authController from "~/src/controllers/auth-controller";
import "./registration.scss";
import template from "./registration.tmpl";

export default class RegistrationPage extends Block {
  fields: Input[] = [
    {
      className: "auth-form__input",
      name: "email",
      placeholder: "Почта",
      rule: "email",
    },
    {
      className: "auth-form__input",
      name: "login",
      placeholder: "Логин",
      rule: "login",
    },
    {
      className: "auth-form__input",
      name: "first_name",
      placeholder: "Имя",
      rule: "name",
    },
    {
      className: "auth-form__input",
      name: "second_name",
      placeholder: "Фамилия",
      rule: "name",
    },
    {
      className: "auth-form__input",
      name: "phone",
      placeholder: "Телефон",
      rule: "phone",
    },
    {
      type: "password",
      className: "auth-form__input",
      name: "password",
      placeholder: "Пароль",
      rule: "password",
    },
    {
      type: "password",
      className: "auth-form__input",
      placeholder: "Пароль еще раз",
      rule: "password",
    },
  ].map((field) => new Input(field as IInput));

  constructor(props: Props = {}) {
    super("div", props);
    this.setProps({
      form: new Form({
        fields: this.fields,
        submitText: "Зарегистрироваться",
        footer: new Link({
          content: "Войти",
          url: "/",
          className: "auth-form__link",
        }),
        onSubmit: this.onSubmit.bind(this),
      }),
    });
  }

  onSubmit(data: RegistrationRequest) {
    authController.registration(data);
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
