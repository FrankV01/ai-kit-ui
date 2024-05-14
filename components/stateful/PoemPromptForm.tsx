"use client";
import { useEffect, useMemo, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { queueRequest } from "../../lib/api/ApiActions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { eLoadingState } from "../../lib/Types";

type PoemPromptFormProps = {};

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const CHARACTERS_NEEDED: number = 10;
export default function PoemPromptForm(props: PoemPromptFormProps) {
  const { data: session } = useSession();
  const router = useRouter();
  const [state, setState] = useState<eLoadingState>(eLoadingState.loading);
  const [submittingInProcess, setSubmittingInProcess] =
    useState<boolean>(false);
  const [validatedEmail, setValidatedEmail] = useState<boolean>(false);
  const [validatedPrompt, setValidatedPrompt] = useState<boolean>(false);
  const [promptLength, setPromptLength] = useState<number>(0);
  const [submissionCompleted, setSubmissionCompleted] =
    useState<boolean>(false);

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

  if (submissionCompleted) {
    return (
      <div className={"text-center"}>
        <Alert variant={"success"}>
          <p>Thank you for your submission!</p>
          <p>
            It will be reviewed as soon as possible. Once approved, it will be
            displayed on the site.
          </p>
          <Link href={"/"}>More Poems</Link> |{" "}
          <Link href={"/tag-list"}>Explore the tag List</Link>
        </Alert>
      </div>
    );
  }

  return (
    <Form
      action={(fd) => {
        setSubmittingInProcess(true);
        queueRequest(fd).then(() => {
          setSubmissionCompleted(true);
        });
      }}
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
          readOnly={submittingInProcess}
          isValid={validatedPrompt}
          isInvalid={!validatedPrompt}
          onChange={(evt) => {
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
        <Button
          type={"submit"}
          className={""}
          disabled={!validated || submittingInProcess}
        >
          {submittingInProcess ? "Submitting..." : "Send to Queue"}
        </Button>
      </Form.Group>
    </Form>
  );
}
