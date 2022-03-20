import HTTP from "../../classes/httpTransport";
import { BaseAPI } from "../base-api";
import {
  AddUserRequest,
  CreateChatRequest,
  DeleteChatRequest,
  GetChatRequest,
  IChat,
  RemoveUserRequest,
  TokenResponse,
} from "./chat-api.types";

const chatAPIInstance = new HTTP("/chats");

class ChatAPI extends BaseAPI {
  getChats(data?: GetChatRequest): Promise<IChat[]> {
    return chatAPIInstance.get("/", {
      query: {
        title: data ? data.title : "",
        offset: 0,
        limit: 100,
      },
    });
  }

  create(data: CreateChatRequest) {
    return chatAPIInstance.post("/", {
      data,
    });
  }

  delete(data: DeleteChatRequest) {
    return chatAPIInstance.delete("/", {
      data,
    });
  }

  addUserToChat(data: AddUserRequest) {
    return chatAPIInstance.put("/users", {
      data,
    });
  }

  removeUserFromChat(data: RemoveUserRequest) {
    return chatAPIInstance.delete("/users", {
      data,
    });
  }

  removeChat(data: DeleteChatRequest) {
    return chatAPIInstance.delete("/", {
      data,
    });
  }

  getChatToken(chatId: number): Promise<TokenResponse> {
    return chatAPIInstance.post(`/token/${chatId}`);
  }
}

const chatApi = new ChatAPI();

export default chatApi;
