"use client";
import ChatParticipants from "./ChatParticipants";
import ChatPlane from "./ChatPlane";
import ChatInput from "./ChatInput";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import {
  ConvoReturnType,
  getConvo,
  startSession,
  submitMessageToConvo,
} from "../../lib/ApiActions";
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

  const _refreshConvo = useCallback(refreshConvo, [sessionId]);

  useEffect(() => {
    // Run once.
    console.log("sessionId", sessionId);
    if (sessionId) {
      _refreshConvo();
    } else {
      // We need to create a session.
      startSession().then((sessionId) => {
        setSessionId(sessionId);
      });
    }
  }, [_refreshConvo, sessionId, setSessionId]);

  const messages = useMemo(
    () => convo?.filter((i) => ["assistant", "user"].includes(i.role)) || [],
    [convo],
  );

  return (
    <div>
      <ErrorBoundary>
        <ChatPlane messages={messages} />
        <div className={"d-flex p-2"}>
          <ChatParticipants
            className={"d-inline-flex w-50"}
            chatParticipants={[{ name: "Ai", id: "AI", role: "AI" }]}
            user={{ name: "Me", id: "1", role: "Human" }}
          />
          <ChatInput
            className={"mx-auto w-50"}
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
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default ChatComposite;
