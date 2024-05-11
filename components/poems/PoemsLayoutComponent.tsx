"use client";

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SessionProvider } from "next-auth/react";
import PoemHeaderMenu from "./PoemHeaderMenu";
import PoemsLandingBanner from "./PoemsLandingBanner";
import PoemFooter from "./PoemFooter";
import { ReactChildrenType } from "../../lib/Types";

/**
 * Contains the layout for the Poem version of the site (legacy).
 *
 * @param children - react children.
 * @constructor
 */
export function PoemsLayoutComponent({ children }: ReactChildrenType) {
  return (
    <Container>
      <Row>
        <Col>
          <PoemHeaderMenu topic={"AI Poems"} />
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
  );
}
