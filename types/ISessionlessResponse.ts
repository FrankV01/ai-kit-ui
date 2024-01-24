// Ok, right. so this needs to be changed.
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

export default ISessionlessResponse;
