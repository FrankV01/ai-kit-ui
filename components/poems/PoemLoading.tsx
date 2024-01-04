"use client";
import { Card } from "react-bootstrap";
import Placeholder from "react-bootstrap/Placeholder";
import React from "react";

export default function PoemLoading({ id }: { id: number }) {
  return (
    <Card
      bg={"light"}
      text={"dark"}
      border={"dark"}
      key={`PoemCardDisplay-PoemLoading-${id}-item`}
      style={{ height: "400px" }}
      className={"my-2 my-lg-3 my-md-2 p-0 shadow"}
    >
      <Card.Body>
        <Card.Title>
          <div className={"p-1"}>
            <Placeholder animation={"wave"}>
              <Placeholder xs={2} /> <Placeholder xs={2} />{" "}
              <Placeholder xs={4} />
            </Placeholder>
            &nbsp;
          </div>
        </Card.Title>
        <Card.Text>
          <Placeholder animation={"glow"}>
            <Placeholder xs={6} /> <Placeholder xs={4} /> <Placeholder xs={2} />{" "}
            <Placeholder xs={5} /> <Placeholder xs={6} /> <Placeholder xs={2} />{" "}
            <Placeholder xs={5} /> <Placeholder xs={4} /> <Placeholder xs={3} />{" "}
            <Placeholder xs={4} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
          </Placeholder>
        </Card.Text>
      </Card.Body>
      <Card.Footer
        className={
          "bottom small text-muted text-end position-sticky bottom-0 top-100"
        }
      >
        <Placeholder animation={"glow"}>
          <Placeholder xs={2} />
        </Placeholder>
        &nbsp;
      </Card.Footer>
    </Card>
  );
}
