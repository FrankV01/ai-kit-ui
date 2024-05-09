import PoemLoading from "./PoemLoading";
import React from "react";
import { PoemsLayoutComponent } from "./PoemsLayoutComponent";

type PoemLoadingColumnProps = {
  includeLayout: boolean;
};

const poemLoadingPlaceholders = Array.from({ length: 3 }, (_, i) => (
  <div
    key={`loading-${i}`}
    id={`loading-${i}`}
    data-testid="poem-loading"
    className={"col col-4"}
  >
    <PoemLoading id={-i} />
  </div>
));

function PlaceHolderContent() {
  return (
    <div>
      <div className={"row"}>{poemLoadingPlaceholders}</div>
    </div>
  );
}

export function PoemLoadingColumn({
  includeLayout = false,
}: PoemLoadingColumnProps) {
  if (!includeLayout) return <PlaceHolderContent />;

  return (
    <PoemsLayoutComponent>
      <PlaceHolderContent />
    </PoemsLayoutComponent>
  );
}
