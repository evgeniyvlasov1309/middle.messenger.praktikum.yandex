import debounce from "lodash.debounce";
import Block, { Props } from "~/src/classes/block";
import Input from "~/src/components/input";
import chatController from "~/src/controllers/chat-controller";
import "./chat-search.scss";
import template from "./chat-search.tmpl";

export default class ChatSearch extends Block {
  constructor(props: Props = {}) {
    super("div", props);
    this.setProps({
      input: new Input({
        placeholder: "Поиск",
        className: "chat-search__input",
        events: {
          input: debounce(this.onInput.bind(this)),
        },
      }),
    });
  }

  onInput(e: any) {
    chatController.getChats({
      title: e.target.value,
    });
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
