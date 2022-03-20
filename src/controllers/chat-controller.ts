import chatApi from "../api/chat/chat-api";
import {
  AddUserRequest,
  CreateChatRequest,
  DeleteChatRequest,
  GetChatRequest,
  RemoveUserRequest,
} from "../api/chat/chat-api.types";
import store from "../classes/store";
import messageController from "./message-controller";

class ChatController {
  async getChats(data?: GetChatRequest) {
    try {
      const chats = await chatApi.getChats(data);

      store.set("chats", chats);
    } catch (error) {}
  }

  async createChat(data: CreateChatRequest) {
    try {
      await chatApi.create(data);

      await this.getChats();

      return Promise.resolve();
    } catch (error) {}
  }

  async addUserToChat(data: AddUserRequest) {
    try {
      await chatApi.addUserToChat(data);

      return Promise.resolve();
    } catch (error) {
      alert("Пользователь не найден");
    }
  }

  async removeUserFromChat(data: RemoveUserRequest) {
    try {
      await chatApi.removeUserFromChat(data);

      return Promise.resolve();
    } catch (error) {
      alert(error);
    }
  }

  async removeChat(data: DeleteChatRequest) {
    try {
      await chatApi.removeChat(data);

      this.getChats();

      return Promise.resolve();
    } catch (error) {
      alert(error);
    }
  }

  async search(data: GetChatRequest) {
    try {
      const chats = await chatApi.getChats(data);

      const chat = chats.find((chat) => chat.title === data.title);

      return chat;
    } catch (error) {}
  }

  async connect() {
    try {
      const { user, chat } = store.getState();

      const { token } = await chatApi.getChatToken(chat.id);

      messageController.connect({
        userId: user.id,
        chatId: chat.id,
        token,
      });
    } catch (error) {
      alert(error);
    }
  }
}

const chatController = new ChatController();

export default chatController;
