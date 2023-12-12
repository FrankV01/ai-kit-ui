"use server";

import PoemPromptForm from "../../../components/PoemPromptForm";

type ICreatePageProps = { params: {} };
import { queueRequest } from "../../../lib/ApiActions";
import { Col, Container, Row } from "react-bootstrap";
import { PoemPromptInfo } from "../../../components/PoemPromptInfo";
import Notice from "../../../components/Notice";

export default async function Page({ params }: ICreatePageProps) {
  // async function queueRequest(formData: FormData) {
  //   "use server";
  //   console.log("queueRequest", formData);
  //   const rawFormData = {
  //     email: formData.get("email"),
  //     prompt: formData.get("prompt"),
  //   };
  //   console.log("queueRequest", rawFormData);
  // }

  // Move Container, Col and Row to be in a client componetn?
  // It seems Next.js doesn't work with react-bootstrap. Not server
  //side.
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
            <PoemPromptForm action={queueRequest} />
          </div>
        </Row>
      </Col>
    </Container>
  );
}
