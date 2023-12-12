"use client";
import { Col, Container, Row } from "react-bootstrap";
import { PoemPromptInfo } from "./PoemPromptInfo";
import Notice from "./Notice";
import IntrinsicAttributes = React.JSX.IntrinsicAttributes;

type FormContainerProps = {
  //action: (fd: FormData) => Promise<void>;
  children: any;
};

export default function FormContainer(props: FormContainerProps) {
  return (
    <Container className={"w-50"}>
      <Col lg={3} />
      <Col>
        <Row>
          <h3>Request a Poem via Prompt</h3>
          <div>
            <PoemPromptInfo />
            <Notice />
          </div>
          <div>{props.children}</div>
        </Row>
      </Col>
    </Container>
  );
}
