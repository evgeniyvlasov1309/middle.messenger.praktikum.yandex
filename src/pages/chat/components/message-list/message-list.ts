import { IMessage } from "~/src/api/chat/chat-api.types";
import Block, { Props } from "~/src/classes/block";
import store, { StoreEvents } from "~/src/classes/store";
import {
  childrenArrayToProps,
  formatDate,
  getClassName,
} from "~/src/utils/utils";
import Message from "../message/message";
import "./message-list.scss";
import template from "./message-list.tmpl";

export default class MessageList extends Block {
  constructor(props: Props = {}) {
    super("div", props);
  }

  componentDidMount(): void {
    store.on(StoreEvents.Updated, () => {
      const currentUser = store.getState().user;

      const messages = store.getState().messages.map(
        (message: IMessage) =>
          new Message({
            className: getClassName([
              "message",
              currentUser.id === message.user_id ? "message--outgoing" : "",
              message.is_read ? "message--delivered" : "",
            ]),
            content: message.content,
            time: formatDate(message.time),
          })
      );

      this.setProps({
        ...childrenArrayToProps(messages as any),
        messages,
      });

      this.scrollToBottom();
    });
  }

  scrollToBottom() {
    if (this._element) {
      const childElements = this._element?.children;
      const lastElements = childElements[childElements.length - 1];

      if (lastElements) {
        lastElements.scrollIntoView();
      }
    }
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
