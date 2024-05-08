"use server";

import getSiteConfigs from "../lib/api/GetSiteConfigs";
import { Config } from "@jest/types";
import { ConfigKeys } from "../lib/Utilities";
import PoemMode from "./poems/PoemsMode";
import { ModernMode } from "./whitelabel/ModernMode";

/**
 * Server page to activate the features for this instance.
 * @constructor
 */
export default async function Features() {
  // Step one is to get the configs and decide how to respond.
  const configs = await getSiteConfigs();
  const poemsLegacyFeatureMode = configs[ConfigKeys.features.poems] === "true";

  // If we're in legacy mode then display that portion. Some elements
  if (poemsLegacyFeatureMode) {
    return <PoemMode />;
  } else {
    return <ModernMode />;
  }
}
