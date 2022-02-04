import Block, { Props } from "~/src/classes/block";
import "./message.scss";
import template from "./message.tmpl";

export default class Message extends Block {
  constructor(props: Props = {}) {
    super("div", props);
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
