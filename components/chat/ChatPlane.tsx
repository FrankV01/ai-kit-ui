import React from "react";

type ChatPlaneProps = {
  messages: string[];
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

  return (
    <div>
      {messages.map((message, index) => (
        <div key={index} style={ourStyle}>
          {message}
        </div>
      ))}
    </div>
  );
};

export default ChatPlane;
