import React from "react";
import { ModernHeader } from "./ModernHeader";
import { ModernFooter } from "./ModernFooter";
import { SpaChat } from "./SpaChat";
import { SpaContentGeneration } from "./SpaContentGeneration";

type ModernModeProps = {};

// Lets create a WhiteLabelBrand component. This will brand the site based on relevant
//  configs.
//
// Lets creates a ConfigurationProvider component. This will provide the configuration
//  to the rest of the site

/**
 * This should generate and manage the landing page in a singe page application style.
 *
 * @constructor
 */
export async function ModernMode({}: ModernModeProps) {
  return (
    <div className={"container"}>
      <ModernHeader />
      <SpaChat />
      <SpaContentGeneration />
      <div className={"row"}>
        <div className={`col`}>
          <hr />
          <h1>Landing Page</h1>
          <p>Modern Mode - White Label</p>
          <p>What goes on the landing page. It needs to be configurable.</p>
          <p>I want to focus on a SPA type app.</p>
          <p>
            So components should be displayed as needed and {"'flex'"} as
            needed? I{"'"}m not sure if flex box is what we{"'"}d use though so
            keep that in mind
          </p>
          <p>
            Things to display: Chat, Content Generation (Sessionless) and I
            think that is it for now.
          </p>
        </div>
      </div>
      <ModernFooter />
    </div>
  );
}
