"use client";

import React from "react";
import ChatComposite from "../chat/ChatComposite";
import { useConfiguration } from "../common/ConfigurationProvider";

/**
 * This should generate and manage the chat component
 * in a singe page application style.
 *
 * @constructor
 */
export function SpaChat() {
  const config = useConfiguration();

  return (
    <div className={"container"}>
      <ChatComposite />
    </div>
  );
}
