"use server";
import React from "react";
import { getSiteConfigs } from "../../lib/ApiActions";
import { ConfigKeys } from "../../lib/Utilities";

type ChatSystemPromptProps = {
  className: string;
};

/**
 * This is meant to be a static display of the system message. I think the users
 * might should see it.
 *
 * @param className
 * @constructor
 */
const ChatSystemPrompt: React.FC<ChatSystemPromptProps> = async ({
  className,
}) => {
  const config = await getSiteConfigs();
  const systemMessage = config.find(
    (c) => c.key === ConfigKeys.newRequestSystemPrompt,
  );
  if (!systemMessage || !systemMessage.value) {
    return null;
  }
  const { value } = systemMessage;
  return (
    <div className={className}>
      <p>{value}</p>
    </div>
  );
};

export default ChatSystemPrompt;
