import Block, { Props } from "~/src/classes/block";
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
  accept?: string;
}

export default class Input extends Block<IInput> {
  rule: ValidationRule | undefined;

  propsClassName: string;

  private _value = "";

  get value() {
    return this._value || this.props.value;
  }

  set value(value) {
    this._value = value;
  }

  constructor(props: IInput) {
    super("div", props);
    this.propsClassName = this.props.className || "";
    this.setProps({
      selector: "input",
      className: getClassName(["input", this.propsClassName]),
      type: props.type || "text",
      events: {
        input: this.onInput.bind(this),
        blur: this.validate.bind(this),
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
      className: getClassName([
        "input",
        this.propsClassName,
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
