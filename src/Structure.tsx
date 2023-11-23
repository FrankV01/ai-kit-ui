import { ReactNode } from "react";
import { Row, Col, Container, Navbar, ModalFooter } from "react-bootstrap";

interface StructureProps {
  menu: ReactNode;
  userChats: ReactNode;
  children: ReactNode;
}
const styleDebug = {
  border: "1px solid grey",
};

const Structure: React.FC<StructureProps> = ({
  menu,
  userChats,
  children,
}: StructureProps) => {
  return (
    <>
      <Container fluid style={{ marginTop: "20px", height: "100%" }}>
        <Row>
          <Col style={styleDebug} md={1}>
            {menu}
          </Col>
          <Col style={styleDebug} md={3}>
            {userChats}
          </Col>
          <Col style={styleDebug} md={8}>
            {children}
          </Col>
        </Row>
      </Container>

      <ModalFooter
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          backgroundColor: "#f8f9fa",
          textAlign: "center",
          padding: "10px 0",
        }}
      >
        © 2023 Frank Villasenor
      </ModalFooter>
    </>
  );
};

export default Structure;
