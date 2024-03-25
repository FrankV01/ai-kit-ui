import React from "react";
import { ConvoReturnType } from "../../lib/ApiActions";
import ChatSystemPrompt from "./ChatSystemPrompt";

type ChatPlaneProps = {
  messages: ConvoReturnType[];
};

const borders = {
  margin: "10px",
  padding: "10px",
  backgroundColor: "#DFE7EE",
  border: "1px solid #F2F5F8", // Lighter shade of #DFE7EE
  borderRadius: "10px", // Rounded border
  boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.1)", // Subtle shadow for a modern look
};
const ourStyle = {
  margin: "10px",
  padding: "10px",
  //border: "1px solid #BFC8D3", //#4582EC
  borderRadius: "10px",
  //boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.2)",
};
const addlUserStyles = {
  //backgroundColor: "#BFC8D3", //"#4582EC",
  textAlign: "right",
};

/**
 * Pretty basic but a starting point. This is the "Chat Plane" and
 * it will display the chat bubble messages. This has absolutely no
 * style or other characteristics right now. That effort is pending.
 *
 * @param messages
 * @constructor
 */
const ChatPlane: React.FC<ChatPlaneProps> = ({ messages }) => {
  const none = messages.length === 0;
  if (none) {
    return <div style={{ ...ourStyle, ...borders }}>No messages yet.</div>;
  }

  return (
    <div style={borders}>
      <ChatSystemPrompt className={"m-2"} />
      {messages.map((message, index) => {
        const isUser = message.role === "user";
        const styles = isUser ? { ...ourStyle, ...addlUserStyles } : ourStyle;
        const _class = isUser ? "text-primary-emphasis" : "text-primary";
        const iconLeft = isUser ? "" : "🤖";
        const iconRight = isUser ? "👤" : "";
        return (
          <div className={_class} key={index} style={styles}>
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
