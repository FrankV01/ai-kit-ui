import PoemLoading from "./PoemLoading";
import React from "react";

export function LoadingColumn() {
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
