import Block, { Props } from "~/src/classes/block";
import { childrenArrayToProps } from "~/src/utils/utils";
import Button, { IButton } from "../button/button";
import Input from "../input/input";
import template from "./form.tmpl";

export interface IForm extends Props {
  fields: Input[];
  submitText?: string;
  submitElement?: Block<IButton>;
  onSubmit: (data: any) => void;
}

export default class Form extends Block<IForm> {
  constructor(props: IForm) {
    super("form", props);
    this.setProps({
      ...childrenArrayToProps(props.fields),
      submitButton:
        props.submitElement ||
        new Button({
          type: "submit",
          text: props.submitText || "submit",
        }),
      events: {
        submit: this.submitHandler.bind(this),
      },
    });
  }

  submitHandler(e: any) {
    e.preventDefault();
    if (!this.validate()) {
      return;
    }
    const formData = new FormData(e.target as HTMLFormElement);
    const result: any = {};
    for (const [name, value] of formData) {
      result[name] = value;
    }

    this.props.onSubmit(result);
  }

  validate() {
    return this.props.fields.every((field: Input) => field.validate());
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
