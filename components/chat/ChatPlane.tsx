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
    border: "1px solid black",
    borderRadius: "10px",
  };
  const none = messages.length === 0;
  if (none) {
    return <div style={ourStyle}>No messages yet.</div>;
  }
  const addlUserStyles = {
    backgroundColor: "lightblue",
    color: "black",
    textAlign: "right",
  };

  return (
    <div>
      {messages.map((message, index) => {
        const isUser = message.role === "user";
        const styles = isUser ? { ...ourStyle, ...addlUserStyles } : ourStyle;
        return (
          <div key={index} style={styles}>
            <span key={`span-${index}`}>{message.message}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ChatPlane;
