import { PasswordRequest } from "~/src/api/user/user-api.types";
import Block, { Props } from "~/src/classes/block";
import Form from "~/src/components/form/form";
import Input from "~/src/components/input/input";
import userController from "~/src/controllers/user-controller";
import withUser from "~/src/selectors/user";
import template from "./password-change.tmpl";

class PasswordChange extends Block {
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
        onSubmit: this.onSubmit.bind(this),
      }),
    });
  }

  onSubmit(data: PasswordRequest) {
    userController.updatePassword(data);
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}

export default withUser(PasswordChange as typeof Block);
