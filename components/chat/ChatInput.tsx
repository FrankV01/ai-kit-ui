import React, { FormEventHandler, useCallback, useState } from "react";

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

  // Should this be wrapped in a callback thing?
  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      if (!event) {
        return;
      }
      event.preventDefault();
      if (inputValue.trim()) {
        onSubmit?.(inputValue);
      }
      setInputValue(""); //clear the message
    },
    [inputValue, onSubmit],
  );

  return (
    <form className={className} onSubmit={handleSubmit}>
      {/*<input*/}
      {/*  type="text"*/}
      {/*  value={inputValue}*/}
      {/*  onChange={(e) => setInputValue(e.target.value)}*/}
      {/*  className="form-control text-dark"*/}
      {/*/>*/}
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
