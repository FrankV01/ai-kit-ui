import React from "react";
import { Card } from "react-bootstrap";
import { PoemResponse } from "../util/types";
import styled from "styled-components";

interface PoemDisplaySimpleProps {
  entries: PoemResponse[];
}

const PoemCard = styled(Card)`
  max-width: 25rem;
  margin: 1rem;
`;

const PoemCardDisplay: React.FC<PoemDisplaySimpleProps> = ({ entries }) => {
  return (
    <>
      {entries.map((entry, idx) => (
        <PoemCard
          fluid
          bg={"light"}
          text={"dark"}
          border={"dark"}
          className={"flex-column"}
          key={`PoemCardDisplay-${idx}`}
        >
          <Card.Body>
            <Card.Title>{entry.title}</Card.Title>
            <Card.Text>
              <div className="p-3 border rounded">{entry.poem}</div>
            </Card.Text>
          </Card.Body>
        </PoemCard>
      ))}
    </>
  );
};

export default PoemCardDisplay;
