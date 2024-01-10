import styles from "./page.module.css";

import "bootswatch/dist/litera/bootstrap.min.css";
import React, { Suspense } from "react";
import Loading from "./loading";
import PoemRow from "../components/poems/PoemRow";
import { getPoemIdList } from "../lib/ApiActions";

const url = process.env.API_URL ? `${process.env.API_URL}/poems` : ""; //"http://localhost:3001/poems";

// Everything in /app is a ***react server component***\
//  If this is the case, where do client components go when
//  creating client side components.

/**
 * This is an indicator for Next.js
 */
export const dynamic = "force-dynamic";

export default async function Home() {
  //
  // Under_Dev: From here to next marker, move to a component.
  let poemData: number[] = [];
  try {
    poemData = await getPoemIdList(1, 10);
  } catch (err) {
    console.log("error while getting data...");
    let message = "unknown";
    if (err instanceof Error) message = err.message;
    else message = String(err);
    console.warn("Home:poemData", message);
  }

  // Should probably be moved.
  const _poemDataGrouped = poemData.reduce((acc, curr, i) => {
    const chunkIndex = Math.floor(i / 3.0);

    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }

    acc[chunkIndex].push(curr);
    return acc;
  }, [] as number[][]);

  const rows = _poemDataGrouped.map((itm) => (
    <PoemRow key={`poemRow-${itm[0]}`} poemIds={itm} />
  ));
  // Under_Dev: done.

  return (
    <div className={styles.outline}>
      <div className={"container"}>
        <Suspense fallback={<Loading />}>{rows}</Suspense>
      </div>
    </div>
  );
}
