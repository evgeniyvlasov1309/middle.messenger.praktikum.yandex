import Block, { Props } from "~/src/classes/block/block";
import { childrenArrayToProps } from "~/src/utils/utils";
import Button from "../button/button";
import Input from "../input/input";
import template from "./form.tmpl";

export interface IForm extends Props {
  fields: Block[];
  submitText?: string;
  submitElement?: Block;
  onSubmit: () => void;
}

export default class Form extends Block {
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

  submitHandler(e: Event) {
    e.preventDefault();
    if (!this.validate()) {
      return;
    }
    const formData = new FormData(e.target as HTMLFormElement);
    const result: any = {};
    for (const [name, value] of formData) {
      result[name] = value;
    }
    console.log(result);
  }

  validate() {
    return this.props.fields.every((field: Input) => field.validate());
  }

  render() {
    return this.compile(template(this.props as IForm), this.props);
  }
}
