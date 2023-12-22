"use server";
import { Button, Form } from "react-bootstrap";
import PoemDemandOutput from "./PoemDemandOutput";

export async function PoemDemandForm() {
  return (
    <div>
      <Form>
        <PoemDemandOutput />
        <Button className={"btn w-100"}>Demand Poem from Poembot</Button>
      </Form>
    </div>
  );
}
