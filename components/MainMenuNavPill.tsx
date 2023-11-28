"use client";
import { Nav, Navbar } from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";

const HeaderItem = () => (
  <h3>
    <div className={"text-secondary"}>{"Topic from Env goes here"}</div> Poems
  </h3>
);
const sizeOfIcons = "2rem";
function MainMenuNavPill() {
  return (
    <Navbar bg={"primary"} className={"rounded m-0  App-header"}>
      <Navbar.Brand className={"ml-2 p-2"}>
        <HeaderItem />
      </Navbar.Brand>

      <Nav className="me-auto m-auto h-auto">
        <Nav.Link href="/">
          <Icons.HouseHeartFill size={sizeOfIcons} title={"Poems"} />
        </Nav.Link>
        <Nav.Link href="/about-us">
          <Icons.Building size={sizeOfIcons} title={"About"} />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default MainMenuNavPill;
