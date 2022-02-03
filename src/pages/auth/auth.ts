import Block, { Props } from "~/src/classes/block/block";
import "./auth.scss";
import template from "./auth.tmpl";

export default class AuthPage extends Block {
  constructor(props: Props = {}) {
    super("div", props);
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
