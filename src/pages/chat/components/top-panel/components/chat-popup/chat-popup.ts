import Block, { Props } from "~/src/classes/block";
import Link from "~/src/components/link/link";
import "./chat-popup.scss";
import template from "./chat-popup.tmpl";

export default class ChatPopup extends Block {
  constructor(props: Props) {
    super("div", props);

    this.setProps({
      addUserLink: new Link({
        className: "chat-popup__link",
        url: "#",
        content: "Добавить пользователя",
        events: {
          click: this.props.onAddUserClick,
        },
      }),
      removeUserLink: new Link({
        className: "chat-popup__link",
        url: "#",
        content: "Удалить пользователя",
        events: {
          click: this.props.onRemoveUserClick,
        },
      }),
      removeChatLink: new Link({
        className: "chat-popup__link",
        url: "#",
        content: "Удалить чат",
        events: {
          click: this.props.onRemoveChatClick,
        },
      }),
    });
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
