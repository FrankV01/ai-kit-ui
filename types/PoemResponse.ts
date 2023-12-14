export interface PoemResponse {
  title: string;
  poem: string;
  id: number;
  createdDate: string;
  poemRaw: string;
  prompt: string;
  useForTraining: number;
}
export default PoemResponse;
