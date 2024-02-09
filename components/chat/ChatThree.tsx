"use client"; //We can see if this stuff can run from the server later. Not now.
import React, { useCallback, useMemo, useState } from "react";
import {
  MinChatUiProvider,
  MainContainer,
  MessageInput,
  MessageContainer,
  MessageList,
  MessageHeader,
} from "@minchat/react-chat-ui";
import MessageType from "@minchat/react-chat-ui/dist/types/MessageType";

export default function ChatThree({ className }: { className?: string }) {
  const [conversation, setConversation] = useState<MessageType[]>([
    {
      text: "Hello",
      user: {
        id: "0",
        name: "AI Bot",
      },
    },

    {
      text: "Please generate a picture of a cat taking care of me; I'm human (maybe) and the cat takes care of everything.",
      user: {
        id: "10",
        name: "Frank (user)",
      },
    },
  ]);

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
              setConversation([
                ...conversation,
                {
                  text,
                  user: {
                    id: "10",
                    name: "Frank (user)",
                  },
                },
              ]);
              return;
            }}
          />
        </MessageContainer>
      </MainContainer>
    </MinChatUiProvider>
  );
}
