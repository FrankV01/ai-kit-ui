import axios from "axios";
import { PoemLoadingState, PoemResponse } from "./types";
import { ERROR_POEM } from "./constants";

export interface IApi {
  getPoemsFromApi(
    setList: (setData: PoemResponse[]) => void,
    setStatus: (setStatus: PoemLoadingState) => void,
  ): Promise<void>;
}

export class PoemsApi implements IApi {
  private baseUrl = "http://localhost:3000";

  async getPoemsFromApi(
    setList: (setData: PoemResponse[]) => void,
    setStatus: (setStatus: PoemLoadingState) => void,
  ) {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${this.baseUrl}/poems`);
        const data = (await response.data) as PoemResponse[];
        setList(data);
        setStatus(PoemLoadingState.LOADED);
      } catch (err) {
        console.log(err);
        setStatus(PoemLoadingState.ERROR);
        const errorPlaceholder = [{ title: "Error", poem: ERROR_POEM }];
        setList(errorPlaceholder);
      }
    };
    await fetchData();
  }
}
