import Block, { Props } from "~/src/classes/block";
import Link from "~/src/components/link/link";
import authController from "~/src/controllers/auth-controller";
import withUser from "~/src/selectors/user";
import template from "./info.tmpl";

class Info extends Block {
  constructor(props: Props = {}) {
    super("div", props);
    this.setProps({
      changeDataLink: new Link({
        url: "/settings/edit",
        className: "profile-control__link",
        content: "Изменить данные",
      }),
      changePasswordLink: new Link({
        url: "/settings/password-change",
        className: "profile-control__link",
        content: "Изменить пароль",
      }),
      exitLink: new Link({
        url: "#",
        className: "profile-control__link profile-control__link--exit",
        content: "Выйти",
        events: {
          click: this.onLogout.bind(this),
        },
      }),
    });
  }

  onLogout(e: any) {
    e.preventDefault();

    authController.logout();
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}

export default withUser(Info as typeof Block);
