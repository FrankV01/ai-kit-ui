import { ReactNode } from "react";
import { Row, Col, Container, Nav, Card } from "react-bootstrap";
import styled from "styled-components";

interface StructureProps {
  menu: ReactNode;
  //userChats: ReactNode;
  children: ReactNode;
}
const styleDebug = {
  border: "1px solid grey",
};

const BigRow = styled(Row)`
  min-height: 20rem;
`;

const Structure2: React.FC<StructureProps> = ({
  menu,
  children,
}: StructureProps) => {
  return (
    <Container fluid>
      <BigRow>
        <Col>{menu}</Col>
      </BigRow>
      <Row>
        <Col sm={11}>{children}</Col>
      </Row>
    </Container>
  );
};

export default Structure2;
