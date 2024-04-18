"use client";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function CookieAlert() {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title aria-label={"title: Cookie FYI"}>Cookie FYI</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>We use cookies. By continuing, you agree to accept them. </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Fine</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default CookieAlert;
