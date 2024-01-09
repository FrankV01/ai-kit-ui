export interface PoemResponse {
  //Duplicate of IPoemDto
  title: string;
  poem: string;
  id: number;
  createdDate: string;
  poemRaw: string;
  prompt: string;
  useForTraining: number;
  aiModelGeneration: string;
}
export default PoemResponse;
