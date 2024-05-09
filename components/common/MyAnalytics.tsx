"use client";
import { GoogleAnalytics } from "nextjs-google-analytics";
import React from "react";

type MyAnalyticsProps = {
  gaMeasurementId: string;
  nonce: string;
};

export default function MyAnalytics({
  gaMeasurementId,
  nonce,
}: MyAnalyticsProps) {
  return (
    <GoogleAnalytics
      nonce={nonce}
      gaMeasurementId={gaMeasurementId}
      strategy="lazyOnload"
      trackPageViews
    />
  );
}
