import React from "react";

type ChatParticipant = {
  name: string;
  id: string;
  role: string;
};

type ChatPlaneProps = {
  // Everyone receiving the messages.
  chatParticipants: ChatParticipant[];

  // The user who can submit meesages
  user: ChatParticipant;
};

/**
 * The component that displays the users. WIP.
 *
 * @param messages
 * @constructor
 */
const ChatParticipants: React.FC<ChatPlaneProps> = ({
  chatParticipants,
  user,
}) => {
  // Under_Dev: Finish this component with it's design and stuff.
  return (
    <div>
      <div>{JSON.stringify(user)}</div>
      <div>{JSON.stringify(chatParticipants)}</div>
    </div>
  );
};

export default ChatParticipants;
