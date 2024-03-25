import React, { FormEventHandler, useState } from "react";

type ChatInputFormEventHandler =
  | React.FormEventHandler<HTMLFormElement>
  | undefined;
export type ChatInputProps = {
  onSubmit: (submittedMessage: string) => void;
  className: string;
};

const ChatInput = ({ onSubmit, className }: ChatInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    if (!event) {
      return;
    }
    event.preventDefault();
    onSubmit?.(inputValue);
    setInputValue(""); //clear the message
  };

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
    </form>
  );
};

export default ChatInput;
