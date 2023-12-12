"use client";
import { Form, Placeholder, FloatingLabel, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { eLoadingState } from "../types/Common";
import IntrinsicAttributes = React.JSX.IntrinsicAttributes;

type PoemPromptFormProps = {
  action: (fd: FormData) => Promise<void>;
} & IntrinsicAttributes;

export default function PoemPromptForm(props: PoemPromptFormProps) {
  const [state, setState] = useState<eLoadingState>(eLoadingState.loading);
  const [validated, setValidated] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setState(eLoadingState.loaded);
    }, 500);
  }, []);

  return (
    <Form action={props.action} noValidate className={""} validated={validated}>
      <Form.Group className="mb-3" controlId="email">
        <FloatingLabel label="Email Address" className="mb-3">
          <Form.Control type="email" placeholder="" />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId="prompt">
        <Form.Label>Poem Prompt</Form.Label>
        <Form.Control
          as="textarea"
          rows={10}
          placeholder={
            "Example: Create a poem in the style of the band Blue October's; the topic of the poem is the struggle of life as a musician on the road while missing family."
          }
        />
      </Form.Group>
      <Form.Group className={"text-end"}>
        {state === eLoadingState.loading ? (
          <Placeholder.Button variant="primary" md={6} />
        ) : (
          <Button className={""}>Send to Queue</Button>
        )}
      </Form.Group>
    </Form>
  );
}
