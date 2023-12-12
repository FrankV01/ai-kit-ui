"use client";
import { Form, Placeholder, FloatingLabel, Button } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { eLoadingState } from "../types/Common";
import { queueRequest } from "../lib/ApiActions";

type PoemPromptFormProps = {};

export default function PoemPromptForm(props: PoemPromptFormProps) {
  const [state, setState] = useState<eLoadingState>(eLoadingState.loading);
  const [validatedEmail, setValidatedEmail] = useState<boolean>(true);
  const [validatedPrompt, setValidatedPrompt] = useState<boolean>(true);
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
            onBlur={(evt) => {
              const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

              if (regex.test(evt.currentTarget.value)) setValidatedEmail(true);
              else setValidatedEmail(false);
            }}
          />
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
          onBlur={(evt) => {
            const val = evt.currentTarget.value || "-";
            console.log("blur", val);
            if (val.length > 10) setValidatedPrompt(true);
            else setValidatedPrompt(false);
          }}
          placeholder={
            "Example Prompt: Create a poem in the style of the band Blue October's; the topic of the poem is the struggle of life as a musician on the road while missing family."
          }
        />
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
