"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import * as Icons from "react-bootstrap-icons";

const sizeOfIcons = "2rem";
function HeaderMenu({ topic }: { topic: string }) {
  return (
    <Navbar expand="lg" bg={"primary"} variant={"light"}>
      <Container>
        <Navbar.Brand href="/">
          <h3>
            <div className={"text-secondary"}>{topic}</div> Poems
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto m-auto">
            <Nav.Link href="/">
              <Icons.HouseHeartFill size={sizeOfIcons} title={"Poems"} />
            </Nav.Link>
            <Nav.Link href="/">
              <Icons.Building size={sizeOfIcons} title={"About"} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderMenu;
