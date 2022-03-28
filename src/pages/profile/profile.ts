import router from "~/src";
import Block, { Props } from "~/src/classes/block";
import Link from "~/src/components/link/link";
import Avatar from "./components/avatar";
import Edit from "./modules/edit";
import Info from "./modules/info";
import PasswordChange from "./modules/password-change/password-change";
import "./profile.scss";
import template from "./profile.tmpl";

class ProfilePage extends Block {
  constructor(props: Props = {}) {
    super("div", props);
    const { pathname } = document.location;
    let child: Block;

    switch (pathname) {
      case "/settings/edit":
        child = new Edit();
        break;
      case "/settings/password-change":
        child = new PasswordChange();
        break;
      default:
        child = new Info();
        break;
    }

    this.setProps({
      avatar: new Avatar(),
      child,
      backLink: new Link({
        url: "#",
        className: "profile-back",
        content: `<span class="profile-back__arrow"></span>`,
        events: {
          click: this.onBackClick.bind(this),
        },
      }),
    });
  }

  onBackClick(e: any) {
    e.preventDefault();

    router.back();
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}

export default ProfilePage;
