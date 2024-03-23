"use server";

type ICreatePageProps = { params: {} };

import { Col, Container, Row } from "react-bootstrap";
import { PoemPromptInfo } from "../../../components/PoemPromptInfo";
import Notice from "../../../components/Notice";
import PoemPromptForm from "../../../components/stateful/PoemPromptForm";

export default async function Page({ params }: ICreatePageProps) {
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
          <div>
            <PoemPromptForm />
          </div>
        </Row>
      </Col>
    </Container>
  );
}
