import React from "react";
import ChatSystemPrompt from "./ChatSystemPrompt";
import { ConvoReturnType } from "../../lib/Types";
type ChatPlaneProps = {
  messages: ConvoReturnType[];
};

const bordersClass: string = "m-2 p-4 bg-gray-100 border rounded shadow-md";

/**
 * Pretty basic but a starting point. This is the "Chat Plane" and
 * it will display the chat bubble messages. This has absolutely no
 * style or other characteristics right now. That effort is pending.
 *
 * @param messages
 * @constructor
 */
const ChatPlane: React.FC<ChatPlaneProps> = ({ messages }) => {
  if (messages.length === 0) {
    return <div className={[bordersClass].join(" ")}>No messages yet.</div>;
  }

  return (
    <div className={bordersClass}>
      <ChatSystemPrompt className={"m-2"} />
      {messages.map((message, index) => {
        const isUser = message.role === "user";

        const _class = isUser
          ? [bordersClass, "text-primary-emphasis"].join(" ")
          : ["text-primary"].join(" ");
        const iconLeft = isUser ? "" : "🤖";
        const iconRight = isUser ? "👤" : "";
        return (
          <div className={_class} key={index}>
            <span key={`span-${index}`}>
              {iconLeft} {message.message} {iconRight}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ChatPlane;
