import PoemResponse from "../types/PoemResponse";
import { Container, Row, Col } from "react-bootstrap";
import SafeMarkdownToHtml from "../lib/SafeMarkdownToHtml";
import BasicPoemBreadcrub from "./BasicPoemBreadcrub";

type PoemBodyPropsType = {
  poemData: PoemResponse;
};

const PoemBody = ({ poemData }: PoemBodyPropsType) => {
  return (
    <Container>
      <Row>
        <Col lg={2} md={1} sm={0}></Col>
        <Col lg={8} md={10} sm={12}>
          <h2 className={""}>{poemData.title}</h2>
          <BasicPoemBreadcrub poemTitle={poemData.title} />
          <div
            className={"body p-2 my-3"}
            dangerouslySetInnerHTML={{
              __html: SafeMarkdownToHtml(poemData.poem),
            }}
          />
          <div className={"small text-secondary float-end"}>
            {poemData.id} | {new Date(poemData.createdDate).toUTCString()}
          </div>
        </Col>
        <Col lg={2} md={1} sm={0}></Col>
      </Row>
    </Container>
  );
};

export default PoemBody;
