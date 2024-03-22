import React from "react";
import ChatParticipants, { ChatPlaneProps } from "./ChatParticipants";
import { useSession } from "next-auth/react";

type ChatParticipantsStateProps = Pick<ChatPlaneProps, "className">;

const ChatParticipantsState: React.FC<ChatParticipantsStateProps> = ({
  className,
}) => {
  // Under_Dev: Finish this component with it's state and stuff.
  // We need to know which user this is...So get the user from Next.js.
  const { data: session } = useSession();
  if (session && session.user) {
    console.log("user from session", session.user);

    return (
      <ChatParticipants
        className={`${className}`}
        chatParticipants={[{ name: "Ai", id: "AI", role: "AI" }]}
        user={{
          name: session.user.name || "[unknown]",
          id: session.user.email || "[unknown@unknown.idk]",
          role: "Human",
        }}
      />
    );
  }
  return null;
};

export default ChatParticipantsState;
