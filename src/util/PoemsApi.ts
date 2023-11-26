import axios from "axios";
import { PoemLoadingState, PoemResponse } from "./types";
import { ERROR_POEM } from "./constants";
import { EnvMgr } from "./EnvMgr";

export interface IApi {
  getPoemsFromApi(
    setList: (setData: PoemResponse[]) => void,
    setStatus: (setStatus: PoemLoadingState) => void,
  ): Promise<void>;
}

export class PoemsApi implements IApi {
  private baseUrl = EnvMgr.apiUrl;
  private apiKey = EnvMgr.apiKey;

  async getPoemsFromApi(
    setList: (setData: PoemResponse[]) => void,
    setStatus: (setStatus: PoemLoadingState) => void,
  ) {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${this.baseUrl}/poems`, {
          headers: { Authorization: `Bearer ${this.apiKey}` },
        });
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
