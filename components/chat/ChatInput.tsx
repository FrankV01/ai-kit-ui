import React, { FormEventHandler, useCallback, useState } from "react";
import { sanitizeInput } from "../../lib/inputUtils";

type ChatInputFormEventHandler =
  | React.FormEventHandler<HTMLFormElement>
  | undefined;
export type ChatInputProps = {
  onSubmit: (submittedMessage: string) => void;
  onNewSession: () => void;
  className: string;
};

const ChatInput = ({ onSubmit, onNewSession, className }: ChatInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      if (!event) {
        return;
      }
      event.preventDefault();
      const scrubbedInputValue = sanitizeInput((inputValue || "").trim());
      if (scrubbedInputValue) {
        onSubmit?.(scrubbedInputValue);
      }
      setInputValue(""); //clear the message
    },
    [inputValue, onSubmit],
  );

  return (
    <form className={className} onSubmit={handleSubmit}>
      <textarea
        className="form-control"
        id="exampleTextarea"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />

      <button className="btn btn-primary form-control mt-2 w-25" type="submit">
        Submit
      </button>
      <button
        onClick={onNewSession}
        className="ms-2 btn btn-secondary form-control mt-2 w-25"
        type="reset"
      >
        New Session
      </button>
    </form>
  );
};

export default ChatInput;
