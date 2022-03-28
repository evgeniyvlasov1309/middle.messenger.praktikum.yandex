export interface WebSocketConnectionRequest {
  userId: number;
  chatId: number;
  token: string;
}

export interface WebSocketMessageRequest {
  message: string;
}
