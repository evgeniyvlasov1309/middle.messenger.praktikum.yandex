import { IUser } from "~/src/api/user/user-api.types";
import Block, { Props } from "~/src/classes/block";
import Form from "~/src/components/form/form";
import Input from "~/src/components/input/input";
import userController from "~/src/controllers/user-controller";
import withUser from "~/src/selectors/user";
import template from "./edit.tmpl";

class Edit extends Block {
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
      name: "display_name",
      placeholder: "Имя в чате",
    },
    {
      className: "auth-form__input",
      name: "phone",
      placeholder: "Телефон",
      rule: "phone",
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

  onSubmit(data: IUser) {
    userController.updateProfile(data);
  }

  updateFieldsValue() {
    this.fields?.forEach((field) => {
      field.setProps({
        value: this.props.user && this.props.user[field.props.name || ""],
      });
    });
  }

  render() {
    this.updateFieldsValue();

    return this.compile(template(this.props), this.props);
  }
}

export default withUser(Edit as typeof Block);
