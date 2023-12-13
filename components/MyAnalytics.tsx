"use client";
import { GoogleAnalytics } from "nextjs-google-analytics";
import React from "react";

export default function MyAnalytics() {
  return (
    <GoogleAnalytics
      debugMode={true}
      gaMeasurementId={"G-BWCTMTSQR4"}
      trackPageViews
    />
  );
}
