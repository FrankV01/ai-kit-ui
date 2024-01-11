"use client";

import { getGroupedPoemIds } from "../../lib/ApiActions";
import PoemRow from "./PoemRow";
import React, { useEffect, useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

type InfinitePoemsProps = {};

export const InfinitePoems = (prop: InfinitePoemsProps) => {
  const [poemData, setPoemData] = useState<number[][]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const moreData = () => {
    setIsLoading(true);
    console.log("more data", page, hasMore);
    getGroupedPoemIds(page, 6)
      .then((data) => {
        const s = poemData.flat();

        //setHasMore(data.length === 2);
        console.log("have new data", data, data.length);
        setPoemData((prev) => [...prev, ...data]);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("error occurred during retrieval of poem data");
        setIsLoading(false);
      });
    setPage((prev) => prev + 1);
  };

  // Produces the react component.
  const rows = useMemo(
    () =>
      poemData.map((itm) => (
        <PoemRow key={`poemRow-${itm[0]}`} poemIds={itm} />
      )),
    [poemData, page],
  );

  console.log("poemData", poemData.length, poemData);
  console.log("rows", rows.length);
  console.log("hasMore", hasMore);

  return (
    <>
      <InfiniteScroll
        dataLength={poemData.length}
        next={moreData}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
        endMessage={<p>No more data to load.</p>}
      >
        {rows.length ? rows : <></>}
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </InfiniteScroll>
    </>
  );
};
