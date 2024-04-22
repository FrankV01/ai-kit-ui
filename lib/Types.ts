export type TagsResponse = { id: number; tag: string };

export type SessionlessResponseApiResponseType = {
  id: number;
  title: string;
  response: string;
  createdDate: Date;
  updatedDate?: Date;
  prompt: string;
  responseRaw: string;
  hidden: boolean;
  internalTrainingRating: number;
  aiModelGeneration: string;
};

export type ConfigurationResultType = { key: string; value: string };

export interface IBasicChatMessage {
  appId: number;
  assocSessionId: string;
  senderId: string;
  message: string;
  json?: Record<string, unknown>;
  created: Date;
  role: "AI" | "User";
}

/**
 * Represents a Conversation.
 * Factory is the ChatPackagingService.
 */
export interface IBasicChatConversation {
  appId: number;
  sessionId: string;
  messages?: IBasicChatMessage[];
}

export type ConvoReturnType = {
  appId: number;
  assocSessionId: string;
  senderId: string;
  message: string;
  created: Date;
  role: string;
};
