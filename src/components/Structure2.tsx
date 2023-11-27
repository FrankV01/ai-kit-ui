import { ReactNode } from "react";
import { Row, Col, Container } from "react-bootstrap";

export interface StructureProps {
  menu: ReactNode;
  children: ReactNode;
}

function Structure2({ menu, children }: StructureProps) {
  return (
    <Container>
      <Row>
        <Col>{menu}</Col>
      </Row>
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
}

export default Structure2;
