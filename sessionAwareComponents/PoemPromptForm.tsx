"use client";
import { useEffect, useMemo, useState } from "react";
import { eLoadingState } from "../types/Common";
import { Button, FloatingLabel, Form, Placeholder } from "react-bootstrap";
import { queueRequest } from "../lib/ApiActions";
import { useSession } from "next-auth/react";

type PoemPromptFormProps = {};

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const CHARACTERS_NEEDED: number = 10;
export default function PoemPromptForm(props: PoemPromptFormProps) {
  const { data: session } = useSession();

  const [state, setState] = useState<eLoadingState>(eLoadingState.loading);
  const [validatedEmail, setValidatedEmail] = useState<boolean>(false);
  const [validatedPrompt, setValidatedPrompt] = useState<boolean>(false);
  const [promptLength, setPromptLength] = useState<number>(0);
  const validated = useMemo(
    () => validatedEmail && validatedPrompt,
    [validatedEmail, validatedPrompt],
  );

  useEffect(() => {
    setTimeout(() => {
      if (session && session.user) {
        setValidatedEmail(regex.test(session.user.email!));
        setState(eLoadingState.loaded);
      }
    }, 500);
  }, [session]);

  if (!session || !session.user || state === eLoadingState.loading) {
    return (
      <div className={"text-center"}>
        <p className={"text-danger"}>
          You must be signed in to submit a poem prompt.
        </p>
      </div>
    );
  }

  return (
    <Form
      action={queueRequest} //Allows handling/invokcation of server methods.
      noValidate
      className={""}
      validated={validated}
    >
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Logged in as</Form.Label>
        <Form.Control
          type="email"
          required
          plaintext
          readOnly
          defaultValue={session && session.user && session.user.email!}
          aria-required
          name="email"
          isValid={validatedEmail}
          isInvalid={!validatedEmail}
          onChange={(evt) => {
            setValidatedEmail(regex.test(evt.currentTarget.value));
          }}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a validate email address.
        </Form.Control.Feedback>
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
            setValidatedPrompt(val.length >= CHARACTERS_NEEDED);
          }}
          placeholder={
            "Example Prompt: Create a poem in the style of the band 'Blue October'; the topic of the poem is the struggle of life as a musician on the road while missing family."
          }
        />
        <Form.Control.Feedback type="invalid">
          {!validatedPrompt
            ? `At least ${
                CHARACTERS_NEEDED - promptLength
              } more characters needed`
            : ""}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className={"text-end"}>
        <Button type={"submit"} className={""} disabled={!validated}>
          Send to Queue
        </Button>
      </Form.Group>
    </Form>
  );
}
