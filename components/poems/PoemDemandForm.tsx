"use client";
import { Button, Form } from "react-bootstrap";
import PoemDemandOutput from "./PoemDemandOutput";
import { demandPoem } from "../../lib/ApiActions";
import { useState } from "react";

export function PoemDemandForm() {
  const [poem, setPoem] = useState<string>("");
  return (
    <div>
      <Form>
        {poem.length == 0 ? <div /> : <PoemDemandOutput content={poem} />}
        <Button
          onClick={() => {
            demandPoem().then((poem) => {
              setPoem(poem);
            });
          }}
          className={"btn w-100"}
        >
          Demand Poem from Poembot
        </Button>
      </Form>
    </div>
  );
}
