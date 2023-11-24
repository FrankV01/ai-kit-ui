import React from "react";
import { Card, Stack } from "react-bootstrap";
import { PoemResponse } from "../util/types";
import styled from "styled-components";

interface PoemDisplaySimpleProps {
  entries: PoemResponse[];
}

const PoemCard = styled(Card)`
  //max-width: 25rem;
  margin: 1rem;
`;

const PoemCardDisplay: React.FC<PoemDisplaySimpleProps> = ({ entries }) => {
  return (
    <div className={"d-flex flex-wrap"}>
      <Stack gap={3}>
        {entries.map((entry, idx) => (
          <PoemCard
            bg={"light"}
            text={"dark"}
            border={"dark"}
            key={`PoemCardDisplay-${idx}`}
          >
            <Card.Body>
              <Card.Title>{entry.title}</Card.Title>
              <div className="p-2 border rounded">
                <Card.Text>{entry.poem}</Card.Text>
              </div>
            </Card.Body>
          </PoemCard>
        ))}
      </Stack>
    </div>
  );
};

export default PoemCardDisplay;
