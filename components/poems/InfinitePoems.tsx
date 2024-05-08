"use client";

import { getGroupedPoemIds } from "../../lib/api/ApiActions";
import PoemRow from "./PoemRow";
import React, { useEffect, useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { LoadingColumn } from "./LoadingColumn";
import { useEffectOnce } from "usehooks-ts";
import { Row } from "react-bootstrap";
import PoemRowSet from "./PoemRowSet";

type InfinitePoemsProps = {};

export const InfinitePoems = (prop: InfinitePoemsProps) => {
  const [poemData, setPoemData] = useState<number[][]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const moreData = () => {
    if (isLoading) return;
    setIsLoading(true);
    getGroupedPoemIds(page, 6)
      .then((data) => {
        setHasMore(data.length === 2);
        // There is a problem with rows being duplicated; it doesn't seem to be page number related.
        setPoemData((prev) => {
          const combined = [...prev];
          for (const datum of data) {
            if (!combined.some((i) => i[0] === datum[0])) {
              combined.push(datum);
            }
          }
          return combined;
          //return [...prev, ...data];
        });
      })
      .catch((err) => {
        setError("error occurred during retrieval of poem data");
      })
      .finally(() => {
        setIsLoading(false);
      });

    // Update the page once the promise is triggered. Don't need to wait for the promise to resolve.
    setPage((prev) => prev + 1);
  };

  useEffectOnce(() => {
    moreData();
  });

  // Produces the React components.
  const rows = useMemo(() => {
    const rows = poemData.map((itm) => (
      <PoemRow key={`poemRow-${itm[0]}`} poemIds={itm} />
    ));

    rows.unshift(
      <Row key={`PoemCardDisplay-poemCol-987654321`}>
        <PoemRowSet poemId1={987654321} isPoemCol={false} />
      </Row>,
    );

    return rows;
  }, [poemData]);

  return (
    <>
      <InfiniteScroll
        className={"p-3"}
        dataLength={poemData.length}
        next={moreData}
        hasMore={hasMore}
        loader={<LoadingColumn />}
        endMessage={
          <div className={"m-auto"}>
            <h4>All poems Displayed</h4>
          </div>
        }
      >
        {rows.length !== 0 ? rows : <LoadingColumn />}
        {isLoading && <LoadingColumn />}
        {error && <p>Error: {error}</p>}
      </InfiniteScroll>
    </>
  );
};
