"use server";

import getSiteConfigs from "../lib/api/GetSiteConfigs";
import { Config } from "@jest/types";
import { ConfigKeys } from "../lib/Utilities";
import PoemMode from "./poems/PoemsMode";
import { ModernMode } from "./whitelabel/ModernMode";
import { Suspense } from "react";
import Loading from "../app/loading";
import { ConfigurationProvider } from "./common/ConfigurationProvider";

/**
 * Server page to activate the features for this instance.
 * @constructor
 */
export default async function Features() {
  // Step one is to get the configs and decide how to respond.
  const configs = await getSiteConfigs();
  const poemsLegacyFeatureMode = configs[ConfigKeys.features.poems] as boolean;

  // If we're in legacy mode then display that portion. Some elements
  if (poemsLegacyFeatureMode) {
    return (
      <Suspense fallback={<Loading poemsMode={true} />}>
        <PoemMode />
      </Suspense>
    );
  } else {
    return (
      <Suspense fallback={<Loading poemsMode={false} />}>
        <ConfigurationProvider configurations={configs}>
          <ModernMode />
        </ConfigurationProvider>
      </Suspense>
    );
  }
}
