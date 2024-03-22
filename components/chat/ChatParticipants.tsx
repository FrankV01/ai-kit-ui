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

  className: string;
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
  className,
}) => {
  // Under_Dev: Finish this component with it's design and stuff.
  const { name, role } = user;
  const cp = chatParticipants.map((p) => {
    return (
      <span key={`span-key-${p.id}-${p.id}-${p.id}-324`}>
        {p.name} - {p.role}
      </span>
    );
  });
  return (
    <div className={className}>
      <span>
        {name} - {role}
      </span>
      <span>{cp}</span>
    </div>
  );
};

export default ChatParticipants;
