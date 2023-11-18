import {ReactNode} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


interface StructureProps {
  children: ReactNode;
}

const Structure: React.FC<StructureProps> = ({ children }: StructureProps)  => {
  return (
    <Container>
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
}

export default Structure;