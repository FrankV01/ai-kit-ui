"use client";

import React from "react";
import PoemHeaderMenu from "./PoemHeaderMenu";
import PoemsLandingBanner from "./PoemsLandingBanner";
import PoemFooter from "./PoemFooter";
import { ReactChildrenType } from "../../lib/Types";

/**
 * Contains the layout for the Poem version of the site (legacy).
 *
 * @param children - react children.
 * @constructor
 */
export function PoemsLayoutComponent({ children }: ReactChildrenType) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <PoemHeaderMenu topic={"AI Poems"} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <PoemsLandingBanner />
        </div>
      </div>
      <div className="row">
        <div className="col" role={"main"}>
          {children}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <PoemFooter />
        </div>
      </div>
    </div>
  );
}
