"use client";

import { useEffect, useState } from "react";

export default function PoemDemandOutput(Prop: { content: string }) {
  const { content } = Prop;
  const [typedPoem, setTypedPoem] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);

  useEffect(() => {
    if (content.trim().length === 0) {
      setTypedPoem("");
      setIsTyping(false);
      return;
    }
    let charCounter = 0;
    setIsTyping(true);
    const id = setInterval(() => {
      setTypedPoem(content.slice(0, (charCounter += 1)));
      if (charCounter >= content.length) {
        setIsTyping(false);
        setTypedPoem(content);
        clearInterval(id);
      }
    }, 75);
  }, [content]);

  return (
    <div className="mb-3 position-relative" id="poemtextarea">
      <textarea
        readOnly
        aria-readonly
        className="form-control"
        value={typedPoem}
        rows={5}
      ></textarea>
      {isTyping && (
        <div
          role="status"
          aria-hidden="true"
          className={
            "position-absolute bottom-0 end-0 mb-1 me-1 z-index-1 spinner-border text-primary"
          }
        />
      )}
    </div>
  );
}
