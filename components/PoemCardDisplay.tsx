"use client";
import React, { useState, useEffect } from "react";
import { Card, Stack } from "react-bootstrap";
import PoemResponse from "../types/PoemResponse";
import SafeMarkdownToHtml from "../lib/SafeMarkdownToHtml";

export interface PoemDisplaySimpleProps {
  entries: PoemResponse[];
}

const PoemCardDisplay = ({ entries }: PoemDisplaySimpleProps) => {
  const [poemDataMd, setPoemDataMd] = useState<PoemResponse[]>([]);
  useEffect(() => {
    const _poemDataMd: PoemResponse[] = entries.map((itm: PoemResponse) => ({
      poem: SafeMarkdownToHtml(itm.poem),
      title: itm.title,
    }));
    setPoemDataMd(_poemDataMd);
  }, [entries]);

  return (
    <div className={"d-flex flex-wrap"}>
      <Stack>
        {poemDataMd.map((entry, idx) => (
          <Card
            bg={"light"}
            text={"dark"}
            border={"dark"}
            key={`PoemCardDisplay-${idx}`}
            className={"mt-3 shadow-sm"}
          >
            <Card.Body>
              <Card.Title>{entry?.title || "loading"}</Card.Title>
              <div className="p-2 border rounded">
                <Card.Text
                  dangerouslySetInnerHTML={{ __html: entry?.poem || "loading" }}
                />
              </div>
            </Card.Body>
          </Card>
        ))}
      </Stack>
    </div>
  );
};

export default PoemCardDisplay;
