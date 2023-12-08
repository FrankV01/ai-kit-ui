"use client";
import React, { useState, useEffect } from "react";
import { Card, Stack, Col, Row, Container, Badge } from "react-bootstrap";
import Link from "next/link";
import PoemResponse from "../types/PoemResponse";
import SafeMarkdownToHtml from "../lib/SafeMarkdownToHtml";
import * as Icons from "react-bootstrap-icons";

export interface PoemDisplaySimpleProps {
  entries: PoemResponse[];
}

const PoemCardDisplay = ({ entries }: PoemDisplaySimpleProps) => {
  const [poemDataMd, setPoemDataMd] = useState<PoemResponse[][]>([]);
  useEffect(() => {
    const _poemDataMd: PoemResponse[] = entries.map((itm: PoemResponse) => ({
      poem: SafeMarkdownToHtml(itm.poem),
      title: itm.title,
      id: itm.id,
      createdDate: itm.createdDate,
    }));

    const _poemDataMdGrouped = _poemDataMd.reduce((acc, curr, i) => {
      const chunkIndex = Math.floor(i / 3);

      if (!acc[chunkIndex]) {
        acc[chunkIndex] = [];
      }

      acc[chunkIndex].push(curr);
      return acc;
    }, [] as PoemResponse[][]);

    setPoemDataMd(_poemDataMdGrouped);
  }, [entries]);

  return (
    <Container>
      {poemDataMd.map((entry, idx) => {
        return (
          <Row
            key={`PoemCardDisplay-${idx}`}
            // className={"d-inline-flex w-100 m-2"}
          >
            {entry.map((itm, idx) => {
              return (
                <Col key={`PoemCardDisplay-${idx}`} xs={12} md={4} lg={4}>
                  {
                    <Card
                      bg={"light"}
                      text={"dark"}
                      border={"dark"}
                      key={`PoemCardDisplay-${idx}`}
                      style={{ height: "400px" }}
                      className={"my-lg-3 my-md-2 p-0 shadow"}
                    >
                      <Card.Title>
                        <div className={"p-1"}>
                          <Link
                            className={"link-dark"}
                            href={`/poem/${itm.id}`}
                          >
                            {itm?.title || "loading"}
                          </Link>
                          <Link
                            className={"link-secondary float-end pe-2"}
                            href={`/poem/${itm.id}`}
                          >
                            <Icons.ArrowRightCircleFill size={"1.1rem"} />
                          </Link>
                        </div>
                      </Card.Title>
                      <Card.Body className={"overflow-hidden"}>
                        <Card.Text
                          dangerouslySetInnerHTML={{
                            __html: itm?.poem || "loading",
                          }}
                          className={"overflow-hidden"}
                        />
                      </Card.Body>
                      <Card.Footer
                        className={"bottom small text-muted text-end"}
                      >
                        <Link
                          className={"link-secondary me-0"}
                          href={`/poem/${itm.id}`}
                        >
                          View...
                        </Link>
                      </Card.Footer>
                    </Card>
                  }
                </Col>
              );
            })}
          </Row>
        );
      })}
    </Container>
  );
};

export default PoemCardDisplay;
