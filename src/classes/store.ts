import { IChat, IMessage } from "../api/chat/chat-api.types";
import { IUser } from "../api/user/user-api.types";
import { set } from "../utils/utils";
import EventBus from "./eventBus";

export enum StoreEvents {
  Updated = "updated",
}

export interface State {
  user: IUser;
  chat: IChat;
  chats: IChat[];
  messages: IMessage[];
}

class Store extends EventBus {
  private state: State = {
    user: {} as IUser,
    chat: {} as IChat,
    chats: [],
    messages: [],
  };

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);

    this.emit(StoreEvents.Updated);
  }
}

export default new Store();
