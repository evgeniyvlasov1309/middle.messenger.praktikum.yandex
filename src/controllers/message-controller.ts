import { WebSocketConnectionRequest } from "../api/message-api.types";
import store from "../classes/store";
import env from "../constants/env";

class MessageController {
  _userId!: number;
  _chatId!: number;
  _token!: string;
  _ws!: WebSocket;
  _ping!: NodeJS.Timer;

  constructor() {
    this._onConnectionOpen = this._onConnectionOpen.bind(this);
    this._onConnectionClose = this._onConnectionClose.bind(this);
    this._onMessageGet = this._onMessageGet.bind(this);
    this._onError = this._onError.bind(this);
  }

  private _addEvents() {
    this._ws.addEventListener("open", this._onConnectionOpen);
    this._ws.addEventListener("close", this._onConnectionClose);
    this._ws.addEventListener("message", this._onMessageGet);
    this._ws.addEventListener("error", this._onError);
  }

  private _onMessageGet(event: MessageEvent) {
    const data = JSON.parse(event.data);

    if (Array.isArray(data)) {
      store.set("messages", data.reverse());
    } else if (typeof data === "object" && data.type === "message") {
      const messages = [data, ...store.getState().messages].reverse();
      store.set("messages", messages);
    }
  }

  private _onConnectionOpen() {
    this.getMessages(0);
    this._ping = setInterval(() => {
      this._ws.send(
        JSON.stringify({
          content: "",
          type: "ping",
        })
      );
    }, 10000);
  }

  private _onConnectionClose(event: CloseEventInit) {
    if (event.wasClean) {
      console.log("Соединение закрыто чисто");
    } else {
      console.log("Обрыв соединения");
    }

    if (event.code === 1006) {
      this._reconnect();
    }
  }

  private _onError(event: any) {
    console.log("Ошибка", event.message);
  }

  sendMessage(message: string) {
    this._ws.send(
      JSON.stringify({
        content: message,
        type: "message",
      })
    );
  }

  getMessages(offset: number) {
    this._ws.send(
      JSON.stringify({
        content: offset.toString(),
        type: "get old",
      })
    );
  }

  private _reconnect() {
    this.connect({
      userId: this._userId,
      chatId: this._chatId,
      token: this._token,
    });
  }

  connect(data: WebSocketConnectionRequest) {
    this._userId = data.userId;
    this._chatId = data.chatId;
    this._token = data.token;

    this._ws = new WebSocket(
      `${env.HOST_WS}/ws/chats/${data.userId}/${data.chatId}/${data.token}`
    );

    this._addEvents();
  }
}

const messageController = new MessageController();

export default messageController;
