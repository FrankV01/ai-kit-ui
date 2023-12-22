"use server";
import { Col, Container, Row } from "react-bootstrap";
import { PoemDemandInfo } from "../../../components/PoemDemandInfo";
import { PoemDemandForm } from "../../../components/PoemDemandForm";

type IDemandPageParams = { params: {} };

export default async function Page({ params }: IDemandPageParams) {
  return (
    <Container className={"w-50"}>
      <Col lg={3} />
      <Col>
        <Row>
          <h3>Poem upon Request</h3>
          <div>
            <PoemDemandInfo />
          </div>
          <div>
            <PoemDemandForm />
          </div>
        </Row>
      </Col>
    </Container>
  );
}
