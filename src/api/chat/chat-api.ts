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

class ChatAPI extends BaseAPI {
  constructor() {
    super("/chats");
  }

  getChats(data?: GetChatRequest): Promise<IChat[]> {
    return this._instance.get("/", {
      query: {
        title: data ? data.title : "",
        offset: 0,
        limit: 100,
      },
    });
  }

  create(data: CreateChatRequest): Promise<void> {
    return this._instance.post("/", {
      data,
    });
  }

  addUserToChat(data: AddUserRequest): Promise<void> {
    return this._instance.put("/users", {
      data,
    });
  }

  removeUserFromChat(data: RemoveUserRequest): Promise<void> {
    return this._instance.delete("/users", {
      data,
    });
  }

  removeChat(data: DeleteChatRequest): Promise<void> {
    return this._instance.delete("/", {
      data,
    });
  }

  getChatToken(chatId: number): Promise<TokenResponse> {
    return this._instance.post(`/token/${chatId}`);
  }
}

const chatApi = new ChatAPI();

export default chatApi;
