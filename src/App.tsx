import React, { useEffect, useCallback } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
//import "bootswatch/dist/litera/bootstrap.css";
import "bootswatch/dist/litera/bootstrap.min.css"; // Added this :boom:
//import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/App.css";
//import "./css/index.css";
import PoemCardDisplay from "./components/PoemCardDisplay";
import { PoemLoadingState, PoemResponse } from "./util/types";
import { Menu } from "./components/Menu";
import Structure2 from "./Structure2";
import { IApi, PoemsApi } from "./util/PoemsApi";

const poemsApi: IApi = new PoemsApi();

function App() {
  const [poems, setPoems] = React.useState<PoemResponse[]>([]);
  const [loadingState, setLoadingState] = React.useState<PoemLoadingState>(
    PoemLoadingState.LOADING,
  );

  useEffect(() => {
    void poemsApi.getPoemsFromApi(setPoems, setLoadingState);
  }, []);

  const MemoMenu = useCallback(() => <Menu />, []);

  return (
    <div className="App">
      <Structure2 menu={<MemoMenu />}>
        {loadingState === PoemLoadingState.LOADING ? (
          <div>Loading...</div>
        ) : (
          <></>
        )}
        {loadingState === PoemLoadingState.ERROR ? (
          <div>Error... Check console</div>
        ) : (
          <></>
        )}
        {loadingState === PoemLoadingState.LOADED ? (
          <PoemCardDisplay entries={poems} />
        ) : (
          <></>
        )}
      </Structure2>
    </div>
  );
}

export default App;
