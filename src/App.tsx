import React, { useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/pulse/bootstrap.css";
import "./App.css";
import PoemDisplaySimple from "./components/PoemDisplaySimple";
import Structure from "./Structure";
import { PoemLoadingState, PoemResponse } from "./util/types";
import { ERROR_POEM } from "./util/constants";

function App() {
  const [data, setData] = React.useState<PoemResponse[]>([]);
  const [loadingState, setLoadingState] = React.useState<PoemLoadingState>(
    PoemLoadingState.LOADING,
  );
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/poems");
    const data = (await response.data) as PoemResponse[];
    setData(data);
    setLoadingState(PoemLoadingState.LOADED);
  };
  useEffect(() => {
    fetchData().catch((err) => {
      console.log(err);
      setLoadingState(PoemLoadingState.ERROR);
      setData([{ title: "Error", poem: ERROR_POEM }]);
    });
  });

  return (
    <div className="App">
      <Structure>
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
          <PoemDisplaySimple entries={data} />
        ) : (
          <></>
        )}
      </Structure>
    </div>
  );
}

export default App;
