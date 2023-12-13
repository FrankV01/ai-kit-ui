import EnvMgr from "./EnvMgr";

import Analytics, { AnalyticsInstance } from "analytics";
// @ts-ignore //TODO: fix or imrpove this
import googleAnalytics from "@analytics/google-analytics";

let analytics: AnalyticsInstance | undefined;

export const myAnalytics = () => async (): Promise<AnalyticsInstance> => {
  if (!analytics) {
    const envMgr = await EnvMgr();

    const settings = {
      app: "ai-poems",
      // version: 100,
      plugins: [
        googleAnalytics({
          trackingId: envMgr.GOOGLE_ANALYTICS_ID,
          measurementIds: envMgr.GOOGLE_ANALYTICS_ID,
        }),
        // customerIo({
        //   siteId: "123-xyz",
        // }),
      ],
    };
    analytics = Analytics(settings);
  }
  return analytics;
};
export default async () => myAnalytics();
