"use server";
import { Col, Container, Row } from "react-bootstrap";
import { PoemDemandInfo } from "../../../components/poems/PoemDemandInfo";
import { PoemDemandForm } from "../../../components/poems/PoemDemandForm";

type IDemandPageParams = { params: {} };

export default async function Page({ params }: IDemandPageParams) {
  return (
    <Container>
      <Row>
        <Col lg={3} md={1} sm={0}></Col>
        <Col lg={12 - 3 - 3} md={12 - 2} sm={12}>
          <h3>Poem upon Request</h3>
          <div>
            <PoemDemandInfo />
          </div>
          <div>
            <PoemDemandForm />
          </div>
        </Col>
        <Col lg={3} md={1} sm={0}></Col>
      </Row>
    </Container>
  );
}
