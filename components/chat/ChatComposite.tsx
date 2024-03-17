"use client";
import ChatParticipants from "./ChatParticipants";
import ChatPlane from "./ChatPlane";
import ChatInput from "./ChatInput";
import React, { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { getConvo, startSession } from "../../lib/ApiActions";
import { IBasicChatConversation } from "../../lib/Types";

type ChatCompositeProps = {};
type ChatConvoType = IBasicChatConversation | undefined | null;
const ChatComposite: React.FC<ChatCompositeProps> = () => {
  // Well, we need to have a sessionId.
  // Then we have a conversation to add to.
  const [sessionId, setSessionId] = useLocalStorage("sessionId", "");
  const [convo, setConvo] = useState<ChatConvoType>(null);

  useEffect(() => {
    // Run once.
    if (sessionId) {
      getConvo(sessionId).then((convo) => {
        setConvo(convo);
      });
    } else {
      // We need to create a session.
      startSession().then((sessionId) => {
        setSessionId(sessionId);
      });
    }
  }, [sessionId]);
  return (
    <div>
      <ChatParticipants
        chatParticipants={[{ name: "Ai", id: "AI", role: "success" }]}
        user={{ name: "me", id: "1", role: "failure" }}
      />
      <ChatPlane messages={convo?.messages?.map((i) => i.message) || []} />
      <ChatInput
        onSubmit={(submittedMessage) => {
          console.log(submittedMessage);
        }}
      />
    </div>
  );
};

export default ChatComposite;
