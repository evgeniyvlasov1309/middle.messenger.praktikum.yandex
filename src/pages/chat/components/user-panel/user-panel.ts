import { CreateChatRequest } from "~/src/api/chat/chat-api.types";
import Block, { Props } from "~/src/classes/block";
import store, { StoreEvents } from "~/src/classes/store";
import Button from "~/src/components/button";
import Form from "~/src/components/form/form";
import Input from "~/src/components/input/input";
import Modal from "~/src/components/modal/modal";
import env from "~/src/constants/env";
import chatController from "~/src/controllers/chat-controller";
import defaultAvatar from "~/src/images/image.svg";
import { getClassName } from "~/src/utils/utils";
import "./user-panel.scss";
import template from "./user-panel.tmpl";

export default class UserPanel extends Block {
  constructor(props: Props = {}) {
    super("div", props);
    this.setProps({
      addChatButton: new Button({
        className: getClassName(["btn", "btn--icon", "user-panel__add-chat"]),
        events: {
          click: this.onAddChatClick.bind(this),
        },
      }),
      addChatModal: new Modal({
        title: "Создать чат",
        content: new Form({
          fields: [
            new Input({
              type: "text",
              name: "title",
              placeholder: "Название чата",
              rule: "required",
            }),
          ],
          submitText: "Создать",
          onSubmit: this.createChat.bind(this),
        }),
      }),
    });
  }

  componentDidMount(): void {
    store.on(StoreEvents.Updated, () => {
      const { avatar } = store.getState().user;

      this.setProps({
        src: avatar ? `${env.HOST_RESOURCES}${avatar}` : defaultAvatar,
      });
    });
  }

  createChat(data: CreateChatRequest) {
    chatController.createChat(data).then(() => {
      this.props.addChatModal.hide();
    });
  }

  onAddChatClick() {
    this.props.addChatModal.show();
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
