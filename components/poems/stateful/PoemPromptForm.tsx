"use client";
import { useEffect, useMemo, useState } from "react";
import { queueRequest } from "../../../lib/api/ApiActions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { eLoadingState } from "../../../lib/Types";

type PoemPromptFormProps = {};

const emailValidationRegex =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
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
        setValidatedEmail(emailValidationRegex.test(session.user.email!));
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
        <div className={"alert alert-success"}>
          <p>Thank you for your submission!</p>
          <p>
            It will be reviewed as soon as possible. Once approved, it will be
            displayed on the site.
          </p>
          <Link href={"/"}>More Poems</Link> |{" "}
          <Link href={"/tag-list"}>Explore the tag List</Link>
        </div>
      </div>
    );
  }

  return (
    <form
      action={(fd) => {
        setSubmittingInProcess(true);
        queueRequest(fd).then(() => {
          setSubmissionCompleted(true);
        });
      }}
      noValidate
      className={""}
    >
      <div className="mb-3">
        <label>Logged in as</label>
        <input
          type="email"
          required
          readOnly
          defaultValue={session && session.user && session.user.email!}
          aria-required
          name="email"
          className={`form-control ${
            validatedEmail ? "is-valid" : "is-invalid"
          }`}
          onChange={(evt) => {
            setValidatedEmail(
              emailValidationRegex.test(evt.currentTarget.value),
            );
          }}
        />
        <div className="invalid-feedback">
          Please enter a validate email address.
        </div>
      </div>
      <div className="mb-3">
        <label>Poem Prompt</label>
        <textarea
          name={"prompt"}
          rows={10}
          required
          aria-required
          readOnly={submittingInProcess}
          className={`form-control ${
            validatedPrompt ? "is-valid" : "is-invalid"
          }`}
          onChange={(evt) => {
            const val = evt.currentTarget.value || "";
            setPromptLength(val.length || 0);
            setValidatedPrompt(val.length >= CHARACTERS_NEEDED);
          }}
          placeholder={
            "Example Prompt: Create a poem in the style of the band 'Blue October'; the topic of the poem is the struggle of life as a musician on the road while missing family."
          }
        />
        <div className="invalid-feedback">
          {!validatedPrompt
            ? `At least ${
                CHARACTERS_NEEDED - promptLength
              } more characters needed`
            : ""}
        </div>
      </div>
      <div className={"text-end"}>
        <button
          type={"submit"}
          className={`btn btn-primary ${
            !validated || submittingInProcess ? "disabled" : ""
          }`}
        >
          {submittingInProcess ? "Submitting..." : "Send to Queue"}
        </button>
      </div>
    </form>
  );
}
