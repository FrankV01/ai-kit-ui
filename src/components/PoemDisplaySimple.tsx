import React from "react";
import { Row, Col } from "react-bootstrap";
import { PoemResponse } from "../util/types";

interface PoemDisplaySimpleProps {
  entries: PoemResponse[];
}

const PoemDisplaySimple: React.FC<PoemDisplaySimpleProps> = ({ entries }) => {
  return (
    <>
      {entries.map((entry, index) => (
        <Row>
          <Col key={index} className="mb-3">
            <h3>{entry.title}</h3>
            <div className="p-3 border rounded">{entry.poem}</div>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default PoemDisplaySimple;
