import React from "react";
import { ConvoReturnType } from "../../lib/ApiActions";

type ChatPlaneProps = {
  messages: ConvoReturnType[];
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
  const ourStyle = {
    margin: "10px",
    padding: "10px",
    border: "1px solid #BFC8D3", //#4582EC
    borderRadius: "10px",
    boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.2)",
  };
  const none = messages.length === 0;
  if (none) {
    return <div style={ourStyle}>No messages yet.</div>;
  }
  const addlUserStyles = {
    //backgroundColor: "#BFC8D3", //"#4582EC",
    textAlign: "right",
  };

  return (
    <div>
      {messages.map((message, index) => {
        const isUser = message.role === "user";
        const styles = isUser ? { ...ourStyle, ...addlUserStyles } : ourStyle;
        const _class = isUser ? "text-primary-emphasis" : "text-primary";
        return (
          <div className={_class} key={index} style={styles}>
            <span key={`span-${index}`}>{message.message}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ChatPlane;
