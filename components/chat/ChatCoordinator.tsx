import ChatThree from "./ChatThree";
import { useEffect, useState } from "react";
import MessageType from "@minchat/react-chat-ui/dist/types/MessageType";
import { useBoolean, useLocalStorage } from "usehooks-ts";
import {
  getChatSession,
  getChatSessionConversation,
} from "../../lib/ApiActions";

// Under_Dev
//  This isn't in use and is more PoC then anything else.
//
export async function ChatCoordinator() {
  // Under_dev Will this work? I can't imagine it will...
  const [sessionId, setSessionId] = useLocalStorage<string>(
    "chat-session-id",
    "",
  );
  const { value: isLoading, setValue: setLoading } = useBoolean(true);

  // This component does the API calls and triggers the UI rendering.
  // The UI itself will be in ChatThree.tsx (and hopefully properties will help drive it)
  //  ------

  const [conversation, setConversation] = useState<MessageType[]>([
    // {
    //   text: "Hello",
    //   user: {
    //     id: "0",
    //     name: "AI Bot",
    //   },
    // },
    //
    // {
    //   text: "Please generate a picture of a cat taking care of me; I'm human (maybe) and the cat takes care of everything.",
    //   user: {
    //     id: "10",
    //     name: "Frank (user)",
    //   },
    // },
  ]);

  useEffect(() => {
    setLoading(true);
    if (!sessionId) {
      console.log("get session id");
      getChatSession(sessionId).then((res) => {
        console.log("session response", res);
        if (res.body && res.body.sessionId) {
          setSessionId(res.body.sessionId);
        }
        setLoading(false);
      });
    }
  }, [sessionId]);
  useEffect(() => {
    setLoading(true);
    try {
      console.log("get convo", sessionId);
      if (sessionId) {
        getChatSessionConversation(sessionId).then((response) => {
          console.log("response", response);
          console.log("response.body", response.body);
          if (response.body.sessionId !== sessionId) {
            console.warn(
              "sessionId in body does not match the client state; this should not be possible",
            );
          }
          setConversation(response.body.messages);
        });
      }
    } finally {
      setLoading(false);
    }
  }, [sessionId]);

  return <ChatThree conversation={} />;
  return <div>[k]Narf</div>;
}
