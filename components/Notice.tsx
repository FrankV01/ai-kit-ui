import { Alert } from "react-bootstrap";

export default function Notice() {
  return (
    <div>
      <Alert variant={"primary"}>
        <p className={"m-0 p-0"}>
          <strong>Note:</strong> For the time being submitted entries are queued
          for review. The review is done manually. We appreciate your patience.
        </p>
      </Alert>
    </div>
  );
}
