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
