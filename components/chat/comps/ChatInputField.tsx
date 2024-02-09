import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ChatInputField = (props: {
  onMessageReceived: (str: string) => void;
}) => {
  const { onMessageReceived } = props;
  const [text, setText] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (evt: React.SyntheticEvent) => {
    const form = evt.currentTarget as HTMLFormElement;
    if (form.checkValidity() === false) {
      evt.preventDefault();
      evt.stopPropagation();
    } else {
      // Handle successful form submission here
      console.log(text);
      onMessageReceived(text);
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        {/*<Form.Label></Form.Label>*/}
        <Form.Control
          as="textarea"
          rows={3}
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
          Please enter some text.
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        Send to AI
      </Button>
    </Form>
  );
};

export default ChatInputField;
