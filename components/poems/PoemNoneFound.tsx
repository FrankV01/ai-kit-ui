import { Col, Container, Row } from "react-bootstrap";
import React from "react";

export default function PoemNoneFound() {
  return (
    <Container>
      <Row>
        <Col md={5} />
        <Col md={5}>
          <div className={"h3 text-dark"}>No poems found</div>
        </Col>
        <Col md={4} />
      </Row>
    </Container>
  );
}
