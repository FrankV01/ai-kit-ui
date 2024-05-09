import React, { useEffect } from "react";
import { ConfigKeys } from "../../lib/Utilities";
import GetSiteConfigs from "../../lib/api/GetSiteConfigs";

type ChatSystemPromptProps = {
  className: string;
};

/**
 * This is meant to be a static display of the system message. I think the users
 * might should see it.
 *
 * @constructor
 * @param props
 */
const ChatSystemPrompt: React.FC<ChatSystemPromptProps> = (props) => {
  const { className } = props;
  const [systemMessage, setSystemMessage] = React.useState<string>("");

  useEffect(() => {
    GetSiteConfigs().then((c1) => {
      const systemMessage = c1[ConfigKeys.newRequestSystemPrompt] as string;
      if (systemMessage) {
        setSystemMessage(systemMessage);
      }
    });
  }, []);

  if (!props) return <div>some how there are no props.</div>;
  if (!systemMessage) {
    return null;
  }
  return (
    <div className={`${className} p-2`}>
      <span className={"fw-bolder"}>System Prompt Message: </span>
      <span className={"fst-italic"}>{systemMessage}</span>
    </div>
  );
};

export default ChatSystemPrompt;
