import {
  AddUserRequest,
  IChat,
  RemoveUserRequest,
} from "~/src/api/chat/chat-api.types";
import { IUser } from "~/src/api/user/user-api.types";
import Block, { Props } from "~/src/classes/block";
import store, { StoreEvents } from "~/src/classes/store";
import Button from "~/src/components/button";
import Form from "~/src/components/form/form";
import Input from "~/src/components/input/input";
import Modal from "~/src/components/modal/modal";
import Popup from "~/src/components/popup";
import env from "~/src/constants/env";
import chatController from "~/src/controllers/chat-controller";
import userController from "~/src/controllers/user-controller";
import defaultAvatar from "~/src/images/image.svg";
import { debounce, getClassName } from "~/src/utils/utils";
import ChatPopup from "./components/chat-popup/chat-popup";
import "./top-panel.scss";
import template from "./top-panel.tmpl";

export default class TopPanel extends Block {
  _chatPopupActive = false;

  selectedUser: IUser | undefined;

  selectedChat: IChat | undefined;

  constructor(props: Props = {}) {
    super("div", props);
    this.setProps({
      button: new Button({
        className: getClassName([
          "btn",
          "btn--icon-small",
          "top-panel__action-button",
        ]),
        events: {
          click: this.onPopupClick.bind(this),
        },
      }),
      popup: new Popup({
        content: new ChatPopup({
          onAddUserClick: this.onAddUserClick.bind(this),
          onRemoveUserClick: this.onRemoveUserClick.bind(this),
          onRemoveChatClick: this.onRemoveChatClick.bind(this),
        }),
        className: "top-panel__popup",
      }),
      addUserModal: new Modal({
        title: "Добавить  пользователя",
        content: new Form({
          fields: [
            new Input({
              type: "text",
              placeholder: "Логин",
              rule: "required",
              events: {
                input: debounce(this.onUserSearch.bind(this)),
              },
            }),
          ],
          submitText: "Добавить",
          onSubmit: this.onAddUserSubmit.bind(this),
        }),
      }),
      removeUserModal: new Modal({
        title: "Удалить  пользователя",
        content: new Form({
          fields: [
            new Input({
              type: "text",
              placeholder: "Логин",
              rule: "required",
              events: {
                input: debounce(this.onUserSearch.bind(this)),
              },
            }),
          ],
          submitText: "Удалить",
          onSubmit: this.onRemoveUserSubmit.bind(this),
        }),
      }),
      removeChatModal: new Modal({
        title: "Удалить чат",
        content: new Form({
          fields: [
            new Input({
              type: "text",
              placeholder: "Название чата",
              rule: "required",
              events: {
                input: debounce(this.onChatSearch.bind(this)),
              },
            }),
          ],
          submitText: "Удалить",
          onSubmit: this.onRemoveChatSubmit.bind(this),
        }),
      }),
    });
  }

  componentDidMount(): void {
    store.on(StoreEvents.Updated, () => {
      const { chat } = store.getState();

      this.setProps({
        title: chat.title,
        avatar: chat.avatar
          ? `${env.HOST_RESOURCES}${chat.avatar}`
          : defaultAvatar,
      });
    });
  }

  onUserSearch(e: any) {
    userController
      .search({
        login: e.target.value,
      })
      .then((user) => {
        this.selectedUser = user;
      });
  }

  onChatSearch(e: any) {
    chatController
      .search({
        title: e.target.value,
      })
      .then((chat) => {
        this.selectedChat = chat;
      });
  }

  onAddUserSubmit(data: AddUserRequest) {
    const chatId = store.getState().chat.id;
    const userId = this.selectedUser?.id;

    if (!userId) {
      alert("Пользователь не найден");
      return;
    }

    chatController
      .addUserToChat({
        chatId,
        users: [userId],
      })
      .then(() => {
        this.props.addUserModal.hide();
      });
  }

  onRemoveUserSubmit(data: RemoveUserRequest) {
    const chatId = store.getState().chat.id;
    const userId = this.selectedUser?.id;

    if (!userId) {
      alert("Пользователь не найден");
      return;
    }

    chatController
      .removeUserFromChat({
        chatId,
        users: [userId],
      })
      .then(() => {
        this.props.removeUserModal.hide();
      });
  }

  onRemoveChatSubmit() {
    const chatId = this.selectedChat?.id;

    if (!chatId) {
      alert("Чат не найден");
      return;
    }

    chatController
      .removeChat({
        chatId,
      })
      .then(() => {
        this.props.removeChatModal.hide();
      });
  }

  get chatPopupActive() {
    return this._chatPopupActive;
  }

  set chatPopupActive(value: boolean) {
    this._chatPopupActive = value;

    if (this._chatPopupActive) {
      this.props.button.setProps({
        focused: true,
      });
      this.props.popup.show();
    } else {
      this.props.button.setProps({
        focused: false,
      });
      this.props.popup.hide();
    }
  }

  onPopupClick() {
    this.chatPopupActive = !this.chatPopupActive;
  }

  onAddUserClick() {
    this.chatPopupActive = false;

    this.props.addUserModal.show();
  }

  onRemoveUserClick() {
    this.chatPopupActive = false;

    this.props.removeUserModal.show();
  }

  onRemoveChatClick() {
    this.chatPopupActive = false;

    this.props.removeChatModal.show();
  }

  render() {
    return this.compile(template(this.props), this.props);
  }
}
