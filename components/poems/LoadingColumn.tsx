import PoemLoading from "./PoemLoading";
import React from "react";
import { PoemsLayoutComponent } from "./PoemsLayoutComponent";

export function LoadingColumn() {
  return (
    <PoemsLayoutComponent>
      <div>
        <div className={"row"}>
          <div
            id={"loading-1"}
            data-testid="poem-loading"
            className={"col col-4"}
          >
            <PoemLoading id={-1} />
          </div>
          <div
            id={"loading-2"}
            data-testid="poem-loading"
            className={"col col-4"}
          >
            <PoemLoading id={-2} />
          </div>
          <div
            id={"loading-3"}
            data-testid="poem-loading"
            className={"col col-4"}
          >
            <PoemLoading id={-3} />
          </div>
        </div>
      </div>
    </PoemsLayoutComponent>
  );
}
