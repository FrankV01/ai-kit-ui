import { AiThankYou } from "../common/quips/AiThankYou";
import React from "react";

export async function ModernFooter() {
  return (
    <footer className={"container"}>
      <div className={"row"}>
        <div className={"col"}>
          <AiThankYou />
        </div>
        <div className={"col"}>Footer</div>
        <div className={"col"}>Footer</div>
      </div>
    </footer>
  );
}