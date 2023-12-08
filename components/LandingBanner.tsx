import { Container, Row, Col } from "react-bootstrap";
import Author from "./Author";
import Image from "react-bootstrap/Image";
const space: string = " ";

function LandingBanner() {
  const logos = [
    "/logo_2023-12-04T18-59-05.png",
    "/logo_2023-12-04T19-11-38.png",
    "/logo_2023-12-04T19-14-19.png",
    "/logo_2023-12-08T03-11-37.png",
    "/logo_2023-12-08T03-15-42.png",
    "/logo_2023-12-08T03-20-43.png",
  ];

  return (
    <Container className={"mb-3"}>
      <Row>
        <Col xl={7} lg={7} md={5}>
          <div className={"mt-5 pt-5"}>
            <h1>
              Artificial Intelligence{space}
              <span className={"text-secondary"}>(AI)</span> / Machine Learning
              {space}
              <span className={"text-secondary"}>(ML)</span> based Poems.
            </h1>
            <p className="lead">
              An AI-Science/Art experiment containing <em>Poems</em> created by
              machine learning models trained & maintained by
              {space}
              <Author />!
            </p>
          </div>
        </Col>
        <Col xl={5} lg={5} md={7} className={"me-0 pe-0"}>
          <Image
            alt={"AI Generated Poems by Frank Villasenor"}
            className={"shadow p-1 pe-0 rounded float-end rounded fluid"}
            src={
              logos.find(
                (logo, indx) =>
                  indx === Math.floor(Math.random() * logos.length),
              ) || logos[0]
            }
            width={400}
            height={400}
            roundedCircle={true}
          />
        </Col>
      </Row>
    </Container>
  );
}
export default LandingBanner;
