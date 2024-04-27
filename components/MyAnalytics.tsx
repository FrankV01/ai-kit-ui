"use client";
import { GoogleAnalytics } from "nextjs-google-analytics";
import React from "react";

type MyAnalyticsProps = {
  nonce: string;
};

export default function MyAnalytics({ nonce }: MyAnalyticsProps) {
  return (
    <GoogleAnalytics
      nonce={nonce}
      gaMeasurementId={"G-BWCTMTSQR4"}
      strategy="lazyOnload"
      trackPageViews
    />
  );
}
