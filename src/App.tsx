import React, { useEffect, useCallback } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/litera/bootstrap.css";
import "./css/App.css";
import "./css/index.css";
import PoemDisplaySimple from "./components/PoemDisplaySimple";
import Structure from "./Structure";
import { PoemLoadingState, PoemResponse } from "./util/types";
import { ERROR_POEM } from "./util/constants";
import { Menu } from "./components/Menu";
import { Chats } from "./components/Chats";

function App() {
  const [poems, setPoems] = React.useState<PoemResponse[]>([]);
  const [loadingState, setLoadingState] = React.useState<PoemLoadingState>(
    PoemLoadingState.LOADING,
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/poems");
      const data = (await response.data) as PoemResponse[];
      setPoems(data);
      setLoadingState(PoemLoadingState.LOADED);
    };
    fetchData().catch((err) => {
      console.log(err);
      setLoadingState(PoemLoadingState.ERROR);
      setPoems([{ title: "Error", poem: ERROR_POEM }]);
    });
  }, []);

  const MemoMenu = useCallback(() => <Menu />, []);
  const MemoChats = useCallback(() => <Chats />, []); //The "chats" could be the different poems. Althouhg, that isn't how chats work. It could jsut be the poem bot.

  return (
    <div className="App">
      <Structure menu={<MemoMenu />} userChats={<MemoChats />}>
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
          <PoemDisplaySimple entries={poems} />
        ) : (
          <></>
        )}
      </Structure>
    </div>
  );
}

export default App;
