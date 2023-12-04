"use client";
import React, { useState, useEffect } from "react";
import { Card, Stack, Col, Row, Container } from "react-bootstrap";
import PoemResponse from "../types/PoemResponse";
import SafeMarkdownToHtml from "../lib/SafeMarkdownToHtml";

export interface PoemDisplaySimpleProps {
  entries: PoemResponse[];
}

const PoemCardDisplay = ({ entries }: PoemDisplaySimpleProps) => {
  const [poemDataMd, setPoemDataMd] = useState<PoemResponse[][]>([]);
  useEffect(() => {
    const _poemDataMd: PoemResponse[] = entries.map((itm: PoemResponse) => ({
      poem: SafeMarkdownToHtml(itm.poem),
      title: itm.title,
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
    <Container className={"d-flexbox"}>
      {poemDataMd.map((entry, idx) => {
        return (
          <Row
            key={`PoemCardDisplay-${idx}`}
            className={"d-inline-flex w-100 m-2"}
            style={{ height: "400px" }}
          >
            {entry.map((itm, idx) => {
              return (
                <Col key={`PoemCardDisplay-${idx}`} className={"h-100 w-50"}>
                  {
                    <Card
                      bg={"light"}
                      text={"dark"}
                      border={"dark"}
                      key={`PoemCardDisplay-${idx}`}
                      className={"mt-3 p-1 shadow-sm overflow-hidden h-100"}
                    >
                      <Card.Body>
                        <Card.Title>{itm?.title || "loading"}</Card.Title>
                        <div className="p-2 border rounded">
                          <Card.Text
                            dangerouslySetInnerHTML={{
                              __html: itm?.poem || "loading",
                            }}
                          />
                        </div>
                      </Card.Body>
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

  // return (
  //   <div className={"d-flex flex-wrap g-2"}>
  //     <Stack>
  //       {poemDataMd.map((entry, idx) => (
  //         <Card
  //           bg={"light"}
  //           text={"dark"}
  //           border={"dark"}
  //           key={`PoemCardDisplay-${idx}`}
  //           className={"mt-3 p-1 shadow-sm"}
  //         >
  //           <Card.Body>
  //             <Card.Title>{entry?.title || "loading"}</Card.Title>
  //             <div className="p-2 border rounded">
  //               <Card.Text
  //                 dangerouslySetInnerHTML={{ __html: entry?.poem || "loading" }}
  //               />
  //             </div>
  //           </Card.Body>
  //         </Card>
  //       ))}
  //     </Stack>
  //   </div>
  // );
};

export default PoemCardDisplay;
