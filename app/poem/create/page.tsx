"use server";

type ICreatePageProps = { params: {} };

import { Col, Container, Row } from "react-bootstrap";
import { PoemPromptInfo } from "../../../components/poems/PoemPromptInfo";
import PoemSubmissionNotice from "../../../components/poems/PoemSubmissionNotice";
import PoemPromptForm from "../../../components/poems/stateful/PoemPromptForm";

export default async function Page({ params }: ICreatePageProps) {
  return (
    <Container className={"w-50"}>
      <Col lg={3} />
      <Col>
        <Row>
          <h3>Request a Poem via Prompt</h3>
          <div>
            <PoemPromptInfo />
            <PoemSubmissionNotice />
          </div>
          <div>
            <PoemPromptForm />
          </div>
        </Row>
      </Col>
    </Container>
  );
}
