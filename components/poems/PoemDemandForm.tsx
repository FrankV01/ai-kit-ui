"use client";
import PoemDemandOutput from "./PoemDemandOutput";
import { demandPoem } from "../../lib/api/ApiActions";
import { useState } from "react";

export function PoemDemandForm() {
  const [poem, setPoem] = useState<string>("");
  return (
    <div>
      <form>
        {poem.length == 0 ? <div /> : <PoemDemandOutput content={poem} />}
        <button
          onClick={() => {
            demandPoem().then((poem) => {
              setPoem(poem);
            });
          }}
          className={"btn btn-primary w-100"}
        >
          Demand Poem from Poembot
        </button>
      </form>
    </div>
  );
}
