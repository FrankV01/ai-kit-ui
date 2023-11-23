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
import { ERROR_POEM } from "./util/constants";
import { Menu } from "./components/Menu";
//import { Chats } from "./components/Chats";
import Structure2 from "./Structure2";

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
  //const MemoChats = useCallback(() => <Chats />, []); //The "chats" could be the different poems. Althouhg, that isn't how chats work. It could jsut be the poem bot.

  // userChats={<MemoChats />}
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
