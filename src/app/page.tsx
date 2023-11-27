import React from "react";
import { PoemLoadingState } from "../util/types";
import Menu from "../components/Menu";
import PoemsApi, { IApi } from "../util/PoemsApi";
import PoemCardDisplay from "../components/PoemCardDisplay";
import Structure2 from "../components/Structure2";

const poemsApi: IApi = new PoemsApi();

export default async function Page() {
  const poems = await poemsApi.getPoemsFromApi();
  // const loadingState: PoemLoadingState = poems
  //   ? PoemLoadingState.LOADED
  //   : (PoemLoadingState.LOADING as PoemLoadingState);
  const loadingState: PoemLoadingState =
    PoemLoadingState.LOADING as PoemLoadingState;
  return (
    <div className="App">
      <Structure2 menu={<Menu />}>
        {/*{loadingState === PoemLoadingState.LOADING ? (*/}
        {/*  <div>Loading...</div>*/}
        {/*) : (*/}
        {/*  <></>*/}
        {/*)}*/}
        {loadingState === PoemLoadingState.ERROR ? (
          <div>Error... Check console</div>
        ) : (
          <></>
        )}
        {/*{loadingState === PoemLoadingState.LOADED ? (*/}
        {/*  <PoemCardDisplay entries={poems} />*/}
        {/*) : (*/}
        {/*  <></>*/}
        {/*)}*/}
      </Structure2>
    </div>
  );
}
