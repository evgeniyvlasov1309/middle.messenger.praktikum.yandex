import Block, { Props } from "~/src/classes/block/block";
import validate, { ValidationRule } from "~/src/classes/validator";
import { getClassName } from "~/src/utils/utils";
import "./input.scss";
import template from "./input.tmpl";

export interface IInput extends Props {
  type?: string;
  className?: string;
  name?: string;
  placeholder?: string;
  rule?: ValidationRule | undefined;
  error?: string;
}

export default class Input extends Block {
  rule: ValidationRule | undefined;

  value = "";

  constructor(props: IInput) {
    super("div", props);
    this.setProps({
      selector: "input",
      class: getClassName(["input", props.className || ""]),
      type: props.type || "text",
      events: {
        input: this.onInput.bind(this),
        blur: this.validate.bind(this),
        focus: this.validate.bind(this),
      },
      error: "",
      value: "",
    });

    this.rule = props.rule;
  }

  onInput(e: any) {
    this.value = e.target.value;
  }

  validate() {
    const errorMessage = validate(this.rule, this.value);

    this.setProps({
      value: this.value,
      class: getClassName([
        "input",
        this.props.className || "",
        errorMessage ? "input--error" : "",
      ]),
      error: errorMessage,
    });

    return !errorMessage;
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
