"use client";

import { Form, Spinner } from "react-bootstrap";
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
    }, 100);
  }, [content]);

  return (
    <Form.Group className="mb-3 position-relative" controlId="poemtextarea">
      <Form.Label>Poem</Form.Label>
      <Form.Control
        readOnly
        aria-readonly
        as="textarea"
        value={typedPoem}
        rows={5}
      ></Form.Control>
      {isTyping && (
        <Spinner
          role="status"
          aria-hidden="true"
          variant="primary"
          className={"position-absolute bottom-0 end-0 mb-1 me-1 z-index-1"}
        />
      )}
    </Form.Group>
  );
}
