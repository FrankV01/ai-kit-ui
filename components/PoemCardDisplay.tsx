"use client";
import React from "react";
import { Card, Stack } from "react-bootstrap";
import PoemResponse from "../types/PoemResponse";

export interface PoemDisplaySimpleProps {
  entries: PoemResponse[];
}

const PoemCardDisplay = ({ entries }: PoemDisplaySimpleProps) => {
  return (
    <div className={"d-flex flex-wrap"}>
      <Stack>
        {entries.map((entry, idx) => (
          <Card
            bg={"light"}
            text={"dark"}
            border={"dark"}
            key={`PoemCardDisplay-${idx}`}
            className={"mt-3"}
          >
            <Card.Body>
              <Card.Title>{entry?.title || "loading"}</Card.Title>
              <div className="p-2 border rounded">
                <Card.Text>{entry?.poem || "loading"}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Stack>
    </div>
  );
};

export default PoemCardDisplay;
