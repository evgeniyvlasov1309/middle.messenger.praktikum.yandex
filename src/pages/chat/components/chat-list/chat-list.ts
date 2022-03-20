import { Chat } from "~/src/api/chat/chat-api.types";
import Block, { Props } from "~/src/classes/block";
import store, { StoreEvents } from "~/src/classes/store";
import env from "~/src/constants/env";
import chatController from "~/src/controllers/chat-controller";
import defaultAvatar from "~/src/images/image.svg";
import { childrenArrayToProps, formatDate } from "~/src/utils/utils";
import ChatPreview from "../chat-preview/chat-preview";
import "./chat-list.scss";
import template from "./chat-list.tmpl";

export default class ChatList extends Block<Props> {
  constructor(props: Props = {}) {
    super("div", props);
  }

  componentDidMount(): void {
    chatController.getChats();

    store.on(StoreEvents.Updated, () => {
      const currentChat = store.getState().chat;
      const chats = store.getState().chats.map(
        (chat: Chat) =>
          new ChatPreview({
            className: currentChat.id === chat.id ? "active" : "",
            title: chat.title,
            avatar: chat.avatar
              ? `${env.HOST_RESOURCES}${chat.avatar}`
              : defaultAvatar,
            content: chat.last_message?.content || "",
            count: chat.unread_count,
            time: formatDate(chat.last_message?.time) || "",
            events: {
              click: this.onChatPreviewClick.bind(this, chat),
            },
          })
      );

      this.setProps({
        ...childrenArrayToProps(chats),
        chats,
      });
    });
  }

  onChatPreviewClick(chat: Chat) {
    store.set("chat", chat);

    chatController.connect();
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
