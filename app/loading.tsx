import React from "react";
import PoemLoading from "../components/poems/PoemLoading";

export default function Loading() {
  return (
    <div>
      <div className={"row"}>
        <div className={"col col-4"}>
          <PoemLoading id={-1} />
        </div>
        <div className={"col col-4"}>
          <PoemLoading id={-2} />
        </div>
        <div className={"col col-4"}>
          <PoemLoading id={-3} />
        </div>
      </div>
    </div>
  );
}
