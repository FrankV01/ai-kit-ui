import * as types from "./types";
import { PoemResponse } from "./types";
import ERROR_POEM from "./constants";
import EnvMgr from "./EnvMgr";

const { PoemLoadingState } = types;

export interface IApi {
  getPoemsFromApi(): Promise<PoemResponse[]>;
}

export class PoemsApi implements IApi {
  private baseUrl = EnvMgr.apiUrl;
  private apiKey = EnvMgr.apiKey;

  async getPoemsFromApi() {
    const res = await fetch(`${this.baseUrl}/poems`, {});
    if (!res.ok) {
      const errorPlaceholder = [{ title: "Error", poem: ERROR_POEM }];
      return errorPlaceholder;
    }
    return (await res.json()) as PoemResponse[];
  }
}
export default PoemsApi;
