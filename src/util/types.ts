export type PoemResponse = {
  title: string;
  poem: string;
};
export enum PoemLoadingState {
  LOADING,
  LOADED,
  ERROR,
}
