"use client";
import ChatParticipants from "./ChatParticipants";
import ChatPlane from "./ChatPlane";
import ChatInput from "./ChatInput";
import React, { useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import {
  ConvoReturnType,
  getConvo,
  startSession,
  submitMessageToConvo,
} from "../../lib/ApiActions";
import { IBasicChatConversation } from "../../lib/Types";
import ErrorBoundary from "../ErrorBoundry";

type ChatCompositeProps = {};
const ChatComposite: React.FC<ChatCompositeProps> = () => {
  // Well, we need to have a sessionId.
  // Then we have a conversation to add to.
  const [sessionId, setSessionId] = useLocalStorage("sessionId", "");
  const [convo, setConvo] = useState<ConvoReturnType[]>();

  function refreshConvo() {
    if (!sessionId) {
      throw new Error("SessionId not set.");
    }
    getConvo(sessionId).then((convo) => {
      setConvo(convo);
    });
  }

  useEffect(() => {
    // Run once.
    console.log("sessionId", sessionId);
    if (sessionId) {
      refreshConvo();
    } else {
      // We need to create a session.
      startSession().then((sessionId) => {
        setSessionId(sessionId);
      });
    }
  }, [sessionId]);

  // We need this to be converted but we should look at how the system uses it.
  // const messages = useMemo(
  //   () =>
  //     convo?.messages
  //       //.filter((i) => i.senderId !== "system")
  //       ?.filter((i) => ["assistant", "user"].includes(i.role))
  //       ?.map((i) => {
  //         console.log("i", i);
  //         return i.message;
  //       }) || [],
  //   [convo],
  // );
  const messages = useMemo(
    () => convo?.filter((i) => ["assistant", "user"].includes(i.role)) || [],
    [convo],
  );

  return (
    <div>
      <ErrorBoundary>
        <ChatParticipants
          chatParticipants={[{ name: "Ai", id: "AI", role: "AI" }]}
          user={{ name: "Me", id: "1", role: "Human" }}
        />
        <ChatPlane messages={messages} />
        <ChatInput
          onSubmit={(submittedMessage) => {
            console.log(submittedMessage);
            submitMessageToConvo(sessionId, submittedMessage).then(
              (response) => {
                console.log("response", response);
                refreshConvo();
              },
            );
          }}
        />
      </ErrorBoundary>
    </div>
  );
};

export default ChatComposite;
