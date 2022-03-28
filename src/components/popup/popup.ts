import Block, { Props } from "~/src/classes/block";
import "./popup.scss";
import template from "./popup.tmpl";

export interface IPopup extends Props {
  className?: string;
  content: any;
  onClose?: () => void;
}

export default class Modal extends Block<IPopup> {
  constructor(props: IPopup) {
    super("div", props);

    this.hide();
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
