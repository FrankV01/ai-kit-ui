import React from "react";

export type ChatParticipant = {
  name: string;
  id: string;
  role: string;
};

export type ChatPlaneProps = {
  // Everyone receiving the messages.
  chatParticipants: ChatParticipant[];

  // The user who can submit meesages
  user: ChatParticipant;

  className: string;
};

const robotIcon = "🤖";

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
        [{robotIcon}] {p.name}
      </span>
    );
  });
  return (
    <div className={className}>
      <div className={"d-block w-100"}>[💁] {name} </div>
      <div className={"d-block w-100"}>{cp}</div>
    </div>
  );
};

export default ChatParticipants;
