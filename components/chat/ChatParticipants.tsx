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
  const { name, role } = user;
  const cp = chatParticipants.map((p) => {
    return (
      <>
        <span>
          {p.name} - {p.role}
        </span>
      </>
    );
  });
  return (
    <div>
      <div>
        <span>
          {name} - {role}
        </span>
      </div>
      <div>{cp}</div>
    </div>
  );
};

export default ChatParticipants;
