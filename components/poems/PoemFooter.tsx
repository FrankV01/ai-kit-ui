import { Container, Row, Col } from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";
import Author from "../Author";
import { IconGitHub, IconLinkedIn, IconTheOpenSourceUorg } from "../Icons";
import CCLicense from "../CCLicense";

export default function PoemFooter() {
  return (
    <Container className={"m-auto p-auto py-5 mx-0"}>
      <Row>
        <Col
          md={12}
          lg={4}
          className={"ps-0 m-auto p-auto text-secondary fw-light"}
        >
          <p>
            Artificial Intelligence (AI) / Machine Learning (ML) created Poems.
          </p>
          <p>
            An AI-Science/Art experiment containing <em>Poems</em> created by
            machine learning models trained & maintained by{" "}
            <Author className={"link-secondary"} />
          </p>
          <p>We thank the AI overlords for their contribution to this site.</p>
        </Col>
        <Col md={12} lg={4} className={"fs-3 text-center m-auto p-auto pe-0"}>
          <div className={"m-auto text-center"}>
            <IconLinkedIn className={"mx-2"} />
            <IconGitHub className={"mx-2"} />
            <IconTheOpenSourceUorg className={"mx-2"} />
          </div>
        </Col>
        <Col
          md={12}
          lg={4}
          className={
            "m-auto-md mt-3 p-auto text-secondary small position-relative bottom-0 end-0 text-lg-end"
          }
        >
          <div>
            Made with <Icons.HeartFill /> by Frank Villasenor
          </div>

          <div>2023-2024 &copy; Frank Villasenor</div>
          <div>
            <CCLicense />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
