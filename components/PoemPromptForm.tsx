"use client";
import { Form, Placeholder, FloatingLabel, Button } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { eLoadingState } from "../types/Common";
import IntrinsicAttributes = React.JSX.IntrinsicAttributes;

type PoemPromptFormProps = {
  action: (fd: FormData) => Promise<void>;
};

export default function PoemPromptForm(props: PoemPromptFormProps) {
  const [state, setState] = useState<eLoadingState>(eLoadingState.loading);
  //const [validated, setValidated] = useState<boolean>(true);
  //const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setState(eLoadingState.loaded);
    }, 500);
  }, []);

  return (
    <Form
      //ref={formRef}
      action={props.action} //Allows handling/invokcation of server methods.
      noValidate
      //onSubmit={handleSubmit}
      className={""}
      //validated={validated}
    >
      <Form.Group className="mb-3" controlId="email">
        <FloatingLabel label="Email Address" className="mb-3">
          <Form.Control
            type="email"
            required
            aria-required
            placeholder=""
            name="email"
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
          placeholder={
            "Example Prompt: Create a poem in the style of the band Blue October's; the topic of the poem is the struggle of life as a musician on the road while missing family."
          }
        />
      </Form.Group>
      <Form.Group className={"text-end"}>
        {state === eLoadingState.loading ? (
          <Placeholder.Button variant="primary" md={6} />
        ) : (
          <Button type={"submit"} className={""}>
            Send to Queue
          </Button>
        )}
      </Form.Group>
    </Form>
  );
}
