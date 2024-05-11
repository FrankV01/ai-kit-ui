import React from "react";
import ChatComposite from "../chat/ChatComposite";

/**
 * This should generate and manage the chat component
 * in a singe page application style.
 *
 * @constructor
 */
export async function SpaChat() {
  return (
    <div className={"container"}>
      <ChatComposite />
    </div>
  );
}
