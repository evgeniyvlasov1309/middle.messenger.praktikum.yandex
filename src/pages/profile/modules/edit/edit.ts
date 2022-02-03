import Block, { Props } from "~/src/classes/block/block";
import Form from "~/src/components/form/form";
import Input from "~/src/components/input/input";
import template from "./edit.tmpl";

export default class Edit extends Block {
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
        onSubmit: () => {},
      }),
    });
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
