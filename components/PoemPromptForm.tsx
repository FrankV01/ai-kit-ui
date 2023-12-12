"use client";
import { Form, Placeholder, FloatingLabel, Button } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { eLoadingState } from "../types/Common";
import { queueRequest } from "../lib/ApiActions";

type PoemPromptFormProps = {};

export default function PoemPromptForm(props: PoemPromptFormProps) {
  const [state, setState] = useState<eLoadingState>(eLoadingState.loading);
  const [validatedEmail, setValidatedEmail] = useState<boolean>(false);
  const [validatedPrompt, setValidatedPrompt] = useState<boolean>(false);
  const [promptLength, setPromptLength] = useState<number>(0);
  const validated = validatedEmail && validatedPrompt;
  //const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setState(eLoadingState.loaded);
    }, 500);
  }, []);

  return (
    <Form
      action={queueRequest} //Allows handling/invokcation of server methods.
      noValidate
      className={""}
      validated={validated}
    >
      <Form.Group className="mb-3" controlId="email">
        <FloatingLabel label="Email Address" className="mb-3">
          <Form.Control
            type="email"
            required
            aria-required
            placeholder=""
            name="email"
            isValid={validatedEmail}
            isInvalid={!validatedEmail}
            onChange={(evt) => {
              console.log("onChange:evt", evt.currentTarget.value);
              const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
              setValidatedEmail(regex.test(evt.currentTarget.value));
            }}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a validate email address.
          </Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId="prompt">
        <Form.Label>Poem Prompt</Form.Label>
        <Form.Control
          as="textarea"
          name={"prompt"}
          rows={10}
          required
          aria-required
          isValid={validatedPrompt}
          isInvalid={!validatedPrompt}
          onChange={(evt) => {
            console.log("onChange:evt", evt.currentTarget.value);
            const val = evt.currentTarget.value || "";
            setPromptLength(val.length || 0);
            setValidatedPrompt(val.length >= 10);
          }}
          placeholder={
            "Example Prompt: Create a poem in the style of the band Blue October's; the topic of the poem is the struggle of life as a musician on the road while missing family."
          }
        />
        <Form.Control.Feedback type="invalid">
          {!validatedPrompt
            ? `At least ${10 - promptLength} more characters needed`
            : ""}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className={"text-end"}>
        {state === eLoadingState.loading ? (
          <Placeholder.Button variant="primary" md={6} />
        ) : (
          <Button type={"submit"} className={""} disabled={!validated}>
            Send to Queue
          </Button>
        )}
      </Form.Group>
    </Form>
  );
}
