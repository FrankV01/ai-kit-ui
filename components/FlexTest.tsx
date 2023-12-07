import { Card, Stack, Col, Row, Container, Badge } from "react-bootstrap";

export default function FlexTest() {
  return (
    <Container className={"border"}>
      <Row className={"border"}>
        <Col className={"border"}>box</Col>
        <Col className={"border"}>box</Col>
        <Col className={"border"}>box</Col>
      </Row>
      <Row>
        <Col>box</Col>
        <Col>box</Col>
        <Col>box</Col>
      </Row>
      <Row>
        <Col>box</Col>
        <Col>box</Col>
      </Row>
      <Row>
        <Col>box</Col>
      </Row>
    </Container>
  );
}
