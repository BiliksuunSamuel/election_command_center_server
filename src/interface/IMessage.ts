export interface IMessage {
  sender: string;
  message: string;
  recipients: string[];
}

export interface IMessageResponse {
  data: { id: string; recipient: string }[];
}
