import {ReactNode} from "react";
import { Row, Col, Container, Navbar, ModalFooter } from 'react-bootstrap';


interface StructureProps {
  children: ReactNode;
}

const Structure: React.FC<StructureProps> = ({ children }: StructureProps)  => {
  return (
    <>
      <Navbar bg={'primary'} variant={'dark'}>
        <Navbar.Brand href="#home">Poems</Navbar.Brand>
      </Navbar>
      
      <Container style={{ marginTop: '20px' }}>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
      
      <ModalFooter style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#f8f9fa', textAlign: 'center', padding: '10px 0' }}>
        © 2023 Frank Villasenor
      </ModalFooter>
    </>
  );
}

export default Structure;