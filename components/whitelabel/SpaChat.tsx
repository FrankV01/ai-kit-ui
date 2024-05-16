"use client";

import React from "react";
import ChatComposite from "../chat/ChatComposite";
import { useConfiguration } from "../common/ConfigurationProvider";

export type SpaChatProps = {
  visible: boolean;
};

/**
 * This should generate and manage the chat component
 * in a singe page application style.
 *
 * @constructor
 */
export function SpaChat({ visible }: SpaChatProps) {
  //const config = useConfiguration();

  if (!visible) {
    return null;
  }

  return (
    <div className={"container"}>
      <ChatComposite />
    </div>
  );
}
