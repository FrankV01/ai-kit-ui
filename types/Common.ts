export enum eLoadingState {
  loading,
  loaded,
  loadedWithError,
}

export type QueuePoemForm = {
  email: string;
  prompt: string;
};
