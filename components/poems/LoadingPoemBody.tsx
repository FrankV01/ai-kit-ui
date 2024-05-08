"use client";
import { Col, Container, Row } from "react-bootstrap";
import Placeholder from "react-bootstrap/Placeholder";
import BasicPoemBreadcrub from "./BasicPoemBreadcrub";
import React from "react";

const LoadingPoemBody = () => {
  return (
    <Container role={"main"}>
      <Row>
        <Col lg={2} md={1} sm={0}></Col>
        <Col lg={8} md={10} sm={12}>
          <h2>
            <Placeholder role={"status"} animation={"wave"}>
              <Placeholder xs={4} /> <Placeholder xs={2} />{" "}
              <Placeholder xs={4} />
            </Placeholder>{" "}
          </h2>
          <BasicPoemBreadcrub poemTitle={"Loading"} />
          <div className={"body p-2 my-3"}>
            <Placeholder role={"status"} animation={"glow"}>
              <Placeholder xs={6} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={2} /> <Placeholder xs={5} />{" "}
              <Placeholder xs={6} /> <Placeholder xs={2} />{" "}
              <Placeholder xs={5} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={3} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={6} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={2} /> <Placeholder xs={5} />{" "}
              <Placeholder xs={6} /> <Placeholder xs={2} />{" "}
              <Placeholder xs={5} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={3} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={6} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={2} /> <Placeholder xs={5} />{" "}
              <Placeholder xs={6} /> <Placeholder xs={2} />{" "}
              <Placeholder xs={5} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={3} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            </Placeholder>
          </div>
          <h4 className={"text-body-secondary"} title={"loading widget"}>
            <Placeholder animation={"glow"}>
              <Placeholder md={12} />
            </Placeholder>
          </h4>
          <div title={"loading widget"} className={"small text-body-secondary"}>
            <Placeholder animation={"glow"}>
              <Placeholder md={12} />
            </Placeholder>
          </div>
          <div className={"mt-3 small text-secondary float-end"}>
            <Placeholder animation={"glow"}>
              <Placeholder md={12} />
            </Placeholder>
          </div>
        </Col>
        <Col lg={2} md={1} sm={0}></Col>
      </Row>
    </Container>
  );
};

export default LoadingPoemBody;
