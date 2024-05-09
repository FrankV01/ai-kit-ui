"use client";
import React, { useEffect } from "react";

export default function CreateTestError({ msDelay }: { msDelay: number }) {
  useEffect(() => {
    throw new Error("Here is the test error");
  }, []);

  return <div>Test Error in {msDelay}</div>;
}
