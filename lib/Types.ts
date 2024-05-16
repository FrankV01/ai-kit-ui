export type CommonBaseTypes = string | number | boolean | null | undefined;

export type ReactChildrenType = {
  children: React.ReactNode | React.ReactNode[];
};

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
export type Configurations = Record<string, CommonBaseTypes>;

export type ConvoReturnType = {
  appId: number;
  assocSessionId: string;
  senderId: string;
  message: string;
  created: Date;
  role: string;
};

export enum eLoadingState {
  loading,
  loaded,
  loadedWithError,
}

export interface ISessionlessResponse {
  id?: number;
  title: string;
  response: string;
  createdDate: Date;
  updatedDate?: Date;
  prompt: string;
  responseRaw: string;
  hidden: boolean;
  internalTrainingRating: number;
  aiModelGeneration: string;
}
