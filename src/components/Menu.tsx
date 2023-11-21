import { Nav } from "react-bootstrap";

export const Menu = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/">Poems</Nav.Link>
      <Nav.Link eventKey="link-1">About</Nav.Link>

      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  );
};
