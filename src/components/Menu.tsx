import {
  Navbar,
  Nav,
  Button,
  ButtonGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";
import styled from "styled-components";

const StyledNav = styled(Nav)`
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

const HeaderItem = () => (
  <h3>
    <div className={"text-secondary"}>Alina's</div> Poems
  </h3>
);

const MainMenuNavPill = () => (
  <Navbar fixed="top">
    <Container fluid>
      <Navbar.Brand>
        <HeaderItem />
      </Navbar.Brand>
      <Navbar.Toggle>
        <Icons.HouseHeartFill size={25} title={"Poems"} />
      </Navbar.Toggle>
      <Navbar.Toggle>
        <Icons.Building title={"About"} />
      </Navbar.Toggle>
    </Container>
  </Navbar>
);

// If we export this but also export a stylized one, we can continue
// to build on it while also maintaining styled versions in a
// central location.
export const Menu = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <MainMenuNavPill />
        </Col>
      </Row>
    </Container>
  );
};
