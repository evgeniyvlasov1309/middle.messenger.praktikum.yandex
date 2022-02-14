import Block, { Props } from "~/src/classes/block";
import Avatar from "./components/avatar";
import "./profile.scss";
import template from "./profile.tmpl";

export default class ProfilePage extends Block {
  constructor(props: Props = {}) {
    super("div", props);
    this.setProps({
      avatar: new Avatar(),
    });
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
