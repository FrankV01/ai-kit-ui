import { ConfigurationResultType } from "./Types";
import InvalidParameterError from "./errors/InvalidParameterError";

/**
 * taken from ai-kit-platform's src/common/index.ts
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
  features: {
    // under_dev:
    //  What is the "poems" interface? Is there a better, more
    //   generic name for it? In the context of the app, it
    //   creates content over time. In theory, it'd be able to create content
    //   rapidly. But what is a viable business usecase for this?
    poems: "FEATURE_POEMS",
    chat: "FEATURE_CHAT", //TODO: Implement flag chat.
  },
};
