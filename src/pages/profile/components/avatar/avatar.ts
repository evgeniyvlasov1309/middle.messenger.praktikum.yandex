import Block, { Props } from "~/src/classes/block/block";
import "./avatar.scss";
import template from "./avatar.tmpl";

export default class Avatar extends Block {
  constructor(props: Props = {}) {
    super("form", props);
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
