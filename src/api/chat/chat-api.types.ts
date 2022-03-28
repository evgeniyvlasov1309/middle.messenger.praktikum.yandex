export interface GetChatRequest {
  title: string;
}

export interface CreateChatRequest {
  title: string;
}

export interface DeleteChatRequest {
  chatId: number;
}

export interface AddUserRequest {
  users: number[];
  chatId: number;
}

export interface RemoveUserRequest {
  users: number[];
  chatId: number;
}

export interface IMessage {
  id: number;
  user_id: number;
  time: string;
  content: string;
  is_read: boolean;
  type: string;
}

export interface IChat {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: IMessage;
}

export interface TokenResponse {
  token: string;
}
