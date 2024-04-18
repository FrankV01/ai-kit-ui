"use client";

import { Col, Container, Row } from "react-bootstrap";
import HeaderMenu from "./HeaderMenu";
import LandingBanner from "./LandingBanner";
import Footer from "./Footer";
import React from "react";
import { SessionProvider } from "next-auth/react";

export function LayoutComponent({ children }: { children: React.ReactNode }) {
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
            <LandingBanner />
          </Col>
        </Row>
        <Row>
          <Col role={"main"}>{children}</Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </SessionProvider>
  );
}
