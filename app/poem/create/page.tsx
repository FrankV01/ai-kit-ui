import { Container, Form, Placeholder, Row, Col } from "react-bootstrap";
import PoemPromptForm from "../../../components/PoemPromptForm";
import { PoemPromptInfo } from "../../../components/PoemPromptInfo";
import Notice from "../../../components/Notice";

type ICreatePageProps = { params: {} };

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
