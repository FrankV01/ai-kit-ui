"use client"; //We can see if this stuff can run from the server later. Not now.
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  MinChatUiProvider,
  MainContainer,
  MessageInput,
  MessageContainer,
  MessageList,
  MessageHeader,
} from "@minchat/react-chat-ui";
import MessageType from "@minchat/react-chat-ui/dist/types/MessageType";
import { useBoolean, useClickAnyWhere, useLocalStorage } from "usehooks-ts";
import {
  getChatSession,
  getChatSessionConversation,
} from "../../lib/ApiActions";

// Under_Dev
//  This isn't in use and is more PoC then anything else
//
export const dynamic = "force-dynamic";
// export const getServerSideProps = async () => {
//   const res = await getChatSession();
// };

// Yeah. You know. we shouldn't be handling both the UI and the data in this  component;
//  we should seperate them out logically.
export type ChatThreeProps = {
  className?: string;
  sessionId: string;
  conversation: MessageType[];
  submitNewConversationMessage: (text: string) => void;
};

export default function ChatThree({
  className,
  sessionId,
  conversation,
  submitNewConversationMessage,
}: ChatThreeProps) {
  // //
  // // const [sessionId, setSessionId] = useLocalStorage<string>(
  // //   "chat-session-id",
  // //   "",
  // // );
  // const { value: isLoading, setValue: setLoading } = useBoolean(true);
  console.log("sessionId", sessionId);

  return (
    <MinChatUiProvider theme="#6ea9d7">
      <MainContainer style={{ height: "100vh" }}>
        <MessageContainer>
          <MessageHeader showBack={false}>AI Bot Chat</MessageHeader>
          <MessageList currentUserId="10" messages={conversation} />
          <MessageInput
            placeholder="Type message here"
            showSendButton
            onSendMessage={(text: string) => {
              // setConversation([
              //   ...conversation,
              //   {
              //     text,
              //     user: {
              //       id: "10",
              //       name: "Frank",
              //     },
              //   },
              // ]);
              // return;
            }}
          />
        </MessageContainer>
      </MainContainer>
    </MinChatUiProvider>
  );
}
