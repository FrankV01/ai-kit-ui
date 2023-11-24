import { ReactNode } from "react";
import { Row, Col, Container } from "react-bootstrap";

interface StructureProps {
  menu: ReactNode;
  children: ReactNode;
}

const Structure2: React.FC<StructureProps> = ({
  menu,
  children,
}: StructureProps) => {
  return (
    <Container fluid>
      <Row>
        <Col>{menu}</Col>
      </Row>
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
};

export default Structure2;
