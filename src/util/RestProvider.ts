import axios from "axios";
import { PoemResponse } from "./types";

export interface IApi {
  getPoemsFromApi(): Promise<PoemResponse[]>;
}

export class PoemsApi implements IApi {
  private baseUrl = "http://localhost:3000";

  async getPoemsFromApi(): Promise<PoemResponse[]> {
    const response = await axios.get(`${this.baseUrl}/poems`);
    return (await response.data) as PoemResponse[];
  }
}
