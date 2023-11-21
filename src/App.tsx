import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/pulse/bootstrap.min.css";
import "./App.css";
import PoemDisplaySimple from "./PoemDisplaySimple";
import Structure from "./Structure";
import { PoemResponse } from "./util/types";

// const example =
//   'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.';
// const example2 =
//   "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";

function App() {
  const [data, setData] = React.useState<PoemResponse[]>([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/poems");
    const data = (await response.data) as PoemResponse[];
    setData(data);
  };
  fetchData().catch((err) => console.log(err));

  return (
    <div className="App">
      <Structure>
        <PoemDisplaySimple entries={data} />
      </Structure>
    </div>
  );
}

export default App;
