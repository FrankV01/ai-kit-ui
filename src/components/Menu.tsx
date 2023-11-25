import { Navbar, Nav, Row, Col } from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";

const HeaderItem = () => (
  <h3>
    <div className={"text-secondary"}>Alina's</div> Poems
  </h3>
);
const sizeOfIcons = "2rem";
const MainMenuNavPill = () => (
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

// If we export this but also export a stylized one, we can continue
// to build on it while also maintaining styled versions in a
// central location.
export const Menu = () => {
  return (
    <div>
      <MainMenuNavPill />
    </div>
  );
};
