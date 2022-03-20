import Block, { Props } from "~/src/classes/block";
import Form from "../form/form";
import "./modal.scss";
import template from "./modal.tmpl";

export interface IModal extends Props {
  className?: string;
  title: string;
  content: Form;
}

export default class Modal extends Block<IModal> {
  constructor(props: IModal) {
    super("div", props);

    this.hide();
  }

  componentDidMount(): void {
    const closeEl = this._element?.querySelector(".modal__close");
    closeEl?.addEventListener("click", () => {
      this.hide();
    });
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
