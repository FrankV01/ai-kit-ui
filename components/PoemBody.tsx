import ISessionlessResponse from "../types/ISessionlessResponse";
import { Container, Row, Col } from "react-bootstrap";
import SafeMarkdownToHtml from "../lib/SafeMarkdownToHtml";
import BasicPoemBreadcrub from "./BasicPoemBreadcrub";
import PoemRatingWidget from "./poems/PoemRatingWidget";

type PoemBodyPropsType = {
  poemData: ISessionlessResponse;
};

const promptTitle =
  "This is the request made of the AI system that lead to the poem above";

const PoemBody = ({ poemData }: PoemBodyPropsType) => {
  const { prompt } = poemData;
  const PromptWidget = () => {
    return prompt ? (
      <span>{prompt}</span>
    ) : (
      <span className={"fst-italic"}>
        Sorry, the prompt wasn&apos;t captured.
      </span>
    );
  };

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
              __html: SafeMarkdownToHtml(poemData.response),
            }}
          />
          <h4 className={"text-body-secondary"} title={promptTitle}>
            Prompt sent to the Poembot AI
          </h4>
          <div title={promptTitle} className={"small text-body-secondary"}>
            <PromptWidget />
          </div>
          <PoemRatingWidget poemId={poemData.id!} poemData={poemData} />
          <div className={"mt-3 small text-secondary float-end"}>
            <span title={"ID"}>{poemData.id}</span> |{" "}
            <span title={"Created Date"}>
              {new Date(poemData.createdDate).toUTCString()}
            </span>{" "}
            |{" "}
            <span title={"AI Generation"}>
              AI Generation: <i>{poemData?.aiModelGeneration || "unknown"}</i>
            </span>
          </div>
        </Col>
        <Col lg={2} md={1} sm={0}></Col>
      </Row>
    </Container>
  );
};

export default PoemBody;
