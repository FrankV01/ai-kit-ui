"use client";
import React from "react";
import { ModernHeader } from "./ModernHeader";
import { ModernFooter } from "./ModernFooter";
import { SpaChat } from "./SpaChat";
import { SpaContentGeneration } from "./SpaContentGeneration";
import { Configurations } from "../../lib/Types";
import { useConfiguration } from "../common/ConfigurationProvider";
import { ConfigKeys } from "../../lib/Utilities";

type ModernModeProps = {};

// Lets create a WhiteLabelBrand component. This will brand the site based on relevant
//  configs.

/**
 * This should generate and manage the landing page in a singe page application style.
 *
 * @constructor
 */
export function ModernMode({}: ModernModeProps) {
  const configs: Configurations = useConfiguration();
  const features = {
    chat: configs[ConfigKeys.features.chat] as boolean, // Bool is expected.
    contentGeneration: false, //Under_Dev: Config exists as legacy version only for now
  };

  return (
    <div className={"container"}>
      <ModernHeader />
      <SpaChat visible={features.chat} />
      <SpaContentGeneration visible={features.contentGeneration} />
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
