"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import * as Icons from "react-bootstrap-icons";
import { IconGitHub, IconLinkedIn, IconTheOpenSourceUorg } from "./Icons";
import LoginButton from "./LoginButton";

const sizeOfIcons = "2rem";
function HeaderMenu({ topic }: { topic: string }) {
  return (
    <Navbar
      expand="lg"
      bg={"primary"}
      variant={"light"}
      className={"shadow rounded-bottom"}
    >
      <Container>
        <Navbar.Brand href="/">
          <h3>
            <div className={"text-capitalize text-secondary"}>{topic}</div>{" "}
            Poems
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={"float-sm-end"} id="basic-navbar-nav">
          <Nav className="me-auto m-auto float-sm-end">
            <Nav.Link href="/">
              <Icons.HouseHeartFill size={sizeOfIcons} title={"Poems"} />
            </Nav.Link>
            <Nav.Link href="/tag-list">
              <Icons.TagsFill size={sizeOfIcons} title={"Tag List"} />
            </Nav.Link>
            <IconLinkedIn className={"nav-link"} size={sizeOfIcons} />
            <IconGitHub className={"nav-link"} size={sizeOfIcons} />
            <IconTheOpenSourceUorg className={"nav-link"} size={sizeOfIcons} />
            <LoginButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderMenu;
