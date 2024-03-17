import React, { FormEventHandler, useState } from "react";

type ChatInputFormEventHandler =
  | React.FormEventHandler<HTMLFormElement>
  | undefined;
export type ChatInputProps = {
  onSubmit: (submittedMessage: string) => void;
};

const ChatInput = ({ onSubmit }: ChatInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    if (!event) {
      return;
    }
    event.preventDefault();
    onSubmit?.(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ChatInput;
