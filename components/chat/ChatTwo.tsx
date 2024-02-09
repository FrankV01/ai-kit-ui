"use client"; //We can see if this stuff can run from the server later. Not now.
import {
  MessageBox,
  ChatList,
  IChatItemProps,
  Input,
  Button,
} from "react-chat-elements";
import React, { useCallback, useMemo, useState } from "react";
import ChatInputField from "./comps/ChatInputField";

const MockData: IChatItemProps[] = [
  {
    id: "80540635",
    avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
    alt: "kursat_avatar",
    title: "Example1",
    //subtitle: "Why don't we go to the No Way Home movie this weekend ?",
    date: new Date(Date.now() - 12304501),
    unread: 3,
  },
  {
    id: "253471",
    avatar: "https://avatars.githubusercontent.com/u/253471?v=4",
    alt: "kursat_avatar",
    title: "Full Name",
    //subtitle: "Why don't we go to the No Way Home movie this weekend ?",
    date: new Date(Date.now() - 12304),
    unread: 0,
  },
];

type ChatMessageType = {
  id: number;
  isAi: boolean;
  message: string;
  from: string;
  posted: Date;
};

// type ChatConversationType = {
//   messages: ChatMessageType[];
// };

export default function ChatTwo({ className }: { className?: string }) {
  //https://detaysoft.github.io/docs-react-chat-elements/docs/messagelist
  // This would represent the list of people chatting.
  // I'd be fine with a Community version and a per user version. Though community version would
  // need to keep any market associated to the user.
  //
  //We're considering the div and container to be a apart of the UI. I want to be clear on that
  const [conversation, setConversation] = useState<ChatMessageType[]>([
    {
      id: 0,
      isAi: true,
      message: "Hello",
      from: "AI Bot",
      posted: new Date(0),
    } as ChatMessageType,
    {
      id: 1,
      isAi: false,
      message:
        "Please generate a picture of a cat taking care of me; I'm human (maybe) and the cat takes care of everything.",
      from: "Frank (user)",
      posted: new Date(1707499912609),
    } as ChatMessageType,
  ]);

  const MessagesToDisplay = useMemo(() => {
    return conversation.map((item) => {
      const { isAi, message, from, posted } = item;
      return (
        <MessageBox
          key={`chat_two_${item.id}`}
          forwarded={false}
          notch={false}
          position={isAi ? "left" : "right"}
          focus={false}
          removeButton={false}
          replyButton={false}
          title={from}
          titleColor={"#000000"}
          date={posted}
          status={"sent"}
          text={message}
          id={`chat_box_${item.id}`}
          retracted={false}
          type={"text"}
        />
      );
    });
  }, [conversation]);
  // const MessagesToDisplay = useMemo(() => {
  //   return () =>
  //     conversation.map((item) => {
  //       const { isAi, message, from, posted } = item;
  //       return (
  //         <MessageBox
  //           key={`chat_two_${item.id}`}
  //           forwarded={false}
  //           notch={false}
  //           position={isAi ? "left" : "right"}
  //           focus={false}
  //           removeButton={false}
  //           replyButton={false}
  //           title={from}
  //           titleColor={"#000000"}
  //           date={posted}
  //           status={"sent"}
  //           text={message}
  //           id={`chat_box_${item.id}`}
  //           retracted={false}
  //           type={"text"}
  //         />
  //       );
  //     });
  // }, [conversation]);

  return (
    <div className={`text-reset text-start ${className || ""}`}>
      <div id={"true_start_of_chat_two"} className="container">
        <div className="row">
          <div className="col">
            <div
              className={"bg-secondary-subtle container message-container p-2"}
            >
              {/*<MessagesToDisplay />*/}
              {MessagesToDisplay}
            </div>
            <div>
              <ChatInputField
                onMessageReceived={(msg: string) => {
                  setConversation((prev) => {
                    const nextId = prev.reduce((acc, item) => {
                      return Math.max(acc, item.id);
                    }, 0);

                    const newItem = {
                      id: nextId + 1,
                      isAi: false,
                      message: msg,
                      from: "Frank (user)",
                      posted: new Date(1707499912609 + 10),
                    } as ChatMessageType;

                    return [...prev, newItem];
                    //return prev.push(newItem);
                  });
                }}
                key={"chat_input_field"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
