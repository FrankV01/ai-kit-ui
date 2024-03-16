import ChatParticipants from "./ChatParticipants";
import ChatPlane from "./ChatPlane";
import ChatInput from "./ChatInput";
import React from "react";

type ChatCompositeProps = {};

const ChatComposite: React.FC<ChatCompositeProps> = () => {
  return (
    <div>
      <ChatParticipants
        chatParticipants={[{ name: "Ai", id: "AI", role: "success" }]}
        user={{ name: "me", id: "1", role: "failure" }}
      />
      <ChatPlane messages={["test", "test2"]} />
      <ChatInput
        onSubmit={(evt) => {
          console.log(evt);
        }}
      />
    </div>
  );
};

export default ChatComposite;
