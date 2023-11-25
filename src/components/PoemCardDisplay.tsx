import React from "react";
import { Card, Stack } from "react-bootstrap";
import { PoemResponse } from "../util/types";
import styled from "styled-components";

interface PoemDisplaySimpleProps {
  entries: PoemResponse[];
}

const PoemCard = styled(Card)``;

const PoemCardDisplay: React.FC<PoemDisplaySimpleProps> = ({ entries }) => {
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
              <Card.Title>{entry.title}</Card.Title>
              <div className="p-2 border rounded">
                <Card.Text>{entry.poem}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Stack>
    </div>
  );
};

export default PoemCardDisplay;
