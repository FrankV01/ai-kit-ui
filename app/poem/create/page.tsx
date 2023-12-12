import { Container, Form, Placeholder, Row, Col } from "react-bootstrap";
import PoemPromptForm from "../../../components/PoemPromptForm";
import { PoemPromptInfo } from "../../../components/PoemPromptInfo";
import Notice from "../../../components/Notice";
import { QueuePoemForm } from "../../../types/Common";

type ICreatePageProps = { params: {} };

export default async function Page({ params }: ICreatePageProps) {
  async function queueRequest(formData: FormData) {
    "use server";

    const rawFormData = {
      email: formData.get("email"),
      prompt: formData.get("prompt"),
    };
    console.log(rawFormData);
  }

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
