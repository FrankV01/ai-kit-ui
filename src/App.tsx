import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/pulse/bootstrap.min.css";
import './App.css';
import PoemDisplay from "./PoemDisplay";
import Structure from "./Structure";

function App() {
  return (
    <div className="App">
      <Structure>
        <PoemDisplay />
      </Structure>
    </div>
  );
}

export default App;
