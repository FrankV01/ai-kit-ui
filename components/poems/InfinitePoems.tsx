"use client";

import { getPoemIdList } from "../../lib/ApiActions";
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

  useEffect(() => {
    console.log("InfinitePoems:useEffect");
    setIsLoading(true);
    getPoemIdList(page, 6)
      .then((poemData2) => {
        console.log("poemData2", poemData2);

        setHasMore(poemData2.length > 0);
        const _poemDataGrouped = poemData2.reduce((acc, curr, i) => {
          const chunkIndex = Math.floor(i / 3.0);

          if (!acc[chunkIndex]) {
            acc[chunkIndex] = [];
          }

          acc[chunkIndex].push(curr);
          return acc;
        }, [] as number[][]);

        //setPoemData((prevItems) => [...prevItems, ..._poemDataGrouped]);
        const existing = [...poemData];
        existing.push(..._poemDataGrouped);
        setPoemData(existing);
        setIsLoading(false);
      })
      .catch((er) => {
        console.error(String(er));
        setError("Loading failed");
        setIsLoading(false);
      });
  }, [page]);

  const rows = useMemo(
    () =>
      poemData.map((itm) => (
        <PoemRow key={`poemRow-${itm[0]}`} poemIds={itm} />
      )),
    [poemData],
  );

  return (
    <>
      <InfiniteScroll
        dataLength={poemData.length}
        next={() => {
          setPage((prevPage) => prevPage + 1);
        }}
        hasMore={true} // TODO: Replace with a condition based on your data source
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
