"use client";
import React, { useState, useEffect } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import Link from "next/link";
import ISessionlessResponse from "../types/ISessionlessResponse";
import SafeMarkdownToHtml from "../lib/SafeMarkdownToHtml";
import * as Icons from "react-bootstrap-icons";

export interface PoemDisplaySimpleProps {
  entries: ISessionlessResponse[];
}

const PoemCardDisplay = ({ entries }: PoemDisplaySimpleProps) => {
  const [poemDataMd, setPoemDataMd] = useState<ISessionlessResponse[][]>([]);
  useEffect(() => {
    const _poemDataMd: ISessionlessResponse[] = entries.map(
      (itm: ISessionlessResponse) => ({
        response: SafeMarkdownToHtml(itm.response),
        title: itm.title,
        id: itm.id,
        createdDate: itm.createdDate,
        hidden: itm.hidden,
        prompt: itm.prompt || "",
        responseRaw: itm.responseRaw || "",
        internalTrainingRating: itm.internalTrainingRating,
        aiModelGeneration: itm.aiModelGeneration || "unknown",
      }),
    );

    const _poemDataMdGrouped = _poemDataMd.reduce((acc, curr, i) => {
      const chunkIndex = Math.floor(i / 3);

      if (!acc[chunkIndex]) {
        acc[chunkIndex] = [];
      }

      acc[chunkIndex].push(curr);
      return acc;
    }, [] as ISessionlessResponse[][]);

    setPoemDataMd(_poemDataMdGrouped);
  }, [entries]);

  if (!entries || entries.length === 0) {
    return (
      <Container>
        <Row>
          <Col md={5} />
          <Col md={5}>
            <div className={"h3 text-dark"}>No poems found</div>
          </Col>
          <Col md={4} />
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      {poemDataMd.map((entry, idx) => {
        return (
          <Row
            role={"card-row"}
            key={`PoemCardDisplay-${idx}`}
            // className={"d-inline-flex w-100 m-2"}
          >
            {entry.map((itm, idx) => {
              return (
                <Col key={`PoemCardDisplay-${idx}`} xs={12} md={4} lg={4}>
                  {
                    <Card
                      role={"card"}
                      bg={"light"}
                      text={"dark"}
                      border={"dark"}
                      key={`PoemCardDisplay-${idx}`}
                      style={{ height: "400px" }}
                      className={"my-2 my-lg-3 my-md-2 p-0 shadow"}
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
                            __html: itm?.response || "loading",
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
