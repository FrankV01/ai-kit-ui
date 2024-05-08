"use client";
import { GoogleAnalytics } from "nextjs-google-analytics";
import React from "react";

type MyAnalyticsProps = {
  nonce: string;
};

export default function MyAnalytics({ nonce }: MyAnalyticsProps) {
  // TODO: Need to move the gaMeasurementId to a config.
  return (
    <GoogleAnalytics
      nonce={nonce}
      gaMeasurementId={"G-BWCTMTSQR4"}
      strategy="lazyOnload"
      trackPageViews
    />
  );
}
