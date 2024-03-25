import { ConfigurationResultType } from "./Types";
import InvalidParameterError from "./errors/InvalidParameterError";

/**
 * taken from src/common/index.ts
 */
export const ConfigKeys = {
  siteName: "SITE_NAME",
  ai: {
    enable: "AI_ENABLE",
    key: "AI_KEY",
    model: "AI_MODEL",
    org: "AI_ORG",
    url: "AI_URL",
    useJson: "AI_USE_JSON",
  },
  metadata: {
    appName: "METADATA_APP_NAME",
    creator: "METADATA_CREATOR",
    desc: "METADATA_DESC",
    keywords: "METADATA_KEYWORDS",
    publisher: "METADATA_PUBLISHER",
    title: "METADATA_TITLE",
  },
  modelGeneration: "MODEL_GENERATION",
  newRequestPrompt: "NEW_REQUEST_PROMPT",
  newRequestSystemPrompt: "NEW_REQUEST_SYSTEM_PROMPT",
};

export function getConfigValue(
  siteConfigs: ConfigurationResultType[],
  key: string,
  strDefault: string,
): string {
  if (!siteConfigs || !siteConfigs.length) {
    throw new InvalidParameterError("siteConfigs, siteConfigs is required.");
  }
  const item = siteConfigs.find((item) => item.key === key);
  if (!item) {
    console.warn(`Unable to find config item for key: ${key}`);
    return strDefault;
  }
  return item?.value ? item.value : strDefault;
}
