"use client";

import { Form } from "react-bootstrap";

export default function PoemDemandOutput() {
  return (
    <Form.Group className="mb-3" controlId="poemtextarea">
      <Form.Label>Poem</Form.Label>
      <Form.Control as="textarea" rows={5} />
    </Form.Group>
  );
}
