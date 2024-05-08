"use client";

import { Col, Container, Row } from "react-bootstrap";
import HeaderMenu from "../HeaderMenu";
import PoemsLandingBanner from "./PoemsLandingBanner";
import PoemFooter from "./PoemFooter";
import React from "react";
import { SessionProvider } from "next-auth/react";

export function PoemsLayoutComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <Container>
        <Row>
          <Col>
            <HeaderMenu topic={"AI Poems"} />
          </Col>
        </Row>
        <Row>
          <Col>
            <PoemsLandingBanner />
          </Col>
        </Row>
        <Row>
          <Col role={"main"}>{children}</Col>
        </Row>
        <Row>
          <Col>
            <PoemFooter />
          </Col>
        </Row>
      </Container>
    </SessionProvider>
  );
}