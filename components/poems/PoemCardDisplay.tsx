"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import SafeMarkdownToHtml from "../../lib/SafeMarkdownToHtml";
import * as Icons from "react-bootstrap-icons";
import { ISessionlessResponse } from "../../lib/Types";

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
      <div className="container">
        <div className="row">
          <div className="col-md-5" />
          <div className="col-md-5">
            <div className={"h3 text-dark"}>No poems found</div>
          </div>
          <div className="col-md-4" />
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {poemDataMd.map((entry, idx) => {
        return (
          <div
            role={"card-row"}
            key={`PoemCardDisplay-${idx}`}
            className={"row"}
          >
            {entry.map((itm, idx) => {
              return (
                <div
                  key={`PoemCardDisplay-${idx}`}
                  className="col-12 col-md-4 col-lg-4"
                >
                  {
                    <div
                      role={"card"}
                      className={
                        "card bg-light text-dark border-dark my-2 my-lg-3 my-md-2 p-0 shadow height-400"
                      }
                    >
                      <div className="card-title">
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
                      </div>
                      <div className="card-body overflow-hidden">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: itm?.response || "loading",
                          }}
                          className={"card-text overflow-hidden"}
                        />
                      </div>
                      <div
                        className={
                          "card-footer bottom small text-muted text-end"
                        }
                      >
                        <Link
                          className={"link-secondary me-0"}
                          href={`/poem/${itm.id}`}
                        >
                          View...
                        </Link>
                      </div>
                    </div>
                  }
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default PoemCardDisplay;
