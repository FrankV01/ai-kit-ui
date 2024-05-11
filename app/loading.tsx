import React from "react";
import { PoemLoadingColumn } from "../components/poems/PoemLoadingColumn";

export default function Loading({ poemsMode }: { poemsMode: boolean }) {
  if (!poemsMode)
    return (
      <div>
        <div className="spinner-border m-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  return <PoemLoadingColumn includeLayout={true} />;
}
