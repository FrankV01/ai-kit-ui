import React from "react";
import { Row, Col } from "react-bootstrap";

interface PoemDisplaySimpleProps {
  entries: string[];
}

const PoemDisplaySimple: React.FC<PoemDisplaySimpleProps> = ({ entries }) => {
  return (
    <>
      {entries.map((entry, index) => (
        <Row>
          <Col key={index} className="mb-3">
            <div className="p-3 border rounded">{entry}</div>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default PoemDisplaySimple;
