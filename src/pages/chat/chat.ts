import Block, { Props } from "~/src/classes/block";
import store, { StoreEvents } from "~/src/classes/store";
import "./chat.scss";
import template from "./chat.tmpl";
import ChatList from "./components/chat-list/chat-list";
import ChatSearch from "./components/chat-search";
import MessageList from "./components/message-list";
import MessagePanel from "./components/message-panel";
import TopPanel from "./components/top-panel";
import UserPanel from "./components/user-panel";

class ChatPage extends Block {
  constructor(props: Props = {}) {
    super("div", props);
    this.setProps({
      chatSearch: new ChatSearch(),
      chatList: new ChatList(),
      userPanel: new UserPanel(),
      topPanel: new TopPanel(),
      messageList: new MessageList(),
      messagePanel: new MessagePanel(),
    });
  }

  componentDidMount(): void {
    store.on(StoreEvents.Updated, () => {
      const chat = store.getState().chat;

      this.setProps({
        chat,
      });
    });
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}

export default ChatPage;
