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
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder size={"sm"} />
            </Placeholder>
          </div>
        </Card.Title>
        <Card.Text>
          <Placeholder as={Card.Body} animation="glow">
            <Placeholder size={"lg"} />
          </Placeholder>
        </Card.Text>
        <Card.Footer className={"bottom small text-muted text-end"}>
          <Placeholder as={Card.Footer} animation="glow">
            <Placeholder size={"xs"} />
          </Placeholder>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
