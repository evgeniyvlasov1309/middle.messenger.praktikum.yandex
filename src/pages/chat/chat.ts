import Block, { Props } from "~/src/classes/block";
import "./chat.scss";
import template from "./chat.tmpl";
import ChatPreview from "./components/chat-preview";
import ChatSearch from "./components/chat-search";
import MessageList from "./components/message-list";
import MessagePanel from "./components/message-panel";
import TopPanel from "./components/top-panel";
import UserPanel from "./components/user-panel";

export default class ChatPage extends Block {
  constructor(props: Props = {}) {
    super("div", props);
    this.setProps({
      chatSearch: new ChatSearch(),
      chatPreview1: new ChatPreview(),
      chatPreview2: new ChatPreview({ className: "active" }),
      userPanel: new UserPanel(),
      topPanel: new TopPanel(),
      messageList: new MessageList(),
      messagePanel: new MessagePanel(),
    });
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
