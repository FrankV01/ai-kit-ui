import React from "react";
import { ModernHeader } from "./ModernHeader";
import { ModernFooter } from "./ModernFooter";

export async function ModernMode() {
  return (
    <div className={"container"}>
      <ModernHeader />
      <div className={"row"}>
        <div className={`col`}> Modern Mode - White Label</div>
      </div>
      <ModernFooter />
    </div>
  );
}
