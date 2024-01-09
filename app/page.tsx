import styles from "./page.module.css";

import "bootswatch/dist/litera/bootstrap.min.css";
import React, { Suspense } from "react";
import Loading from "./loading";
import PoemRow from "../components/poems/PoemRow";
import { getPoemIdList } from "../lib/ApiActions";
import PoemCardDisplay from "../components/PoemCardDisplay";
import PoemResponse from "../types/PoemResponse";

const url = process.env.API_URL ? `${process.env.API_URL}/poems` : ""; //"http://localhost:3001/poems";

// Ok, so why does / go to page.tsx and not index.tsx?
//  It's because it's at the root of app and page.tsx is "index.tsx" in next.js

// Everything in /app is a ***react server component***\
//  If this is the case, where do client components go when
//  creating client side components.

/**
 * This is an indicator for Next.js
 */
export const dynamic = "force-dynamic";

async function getData(): Promise<PoemResponse[]> {
  if (!url) {
    throw new Error("Invalid environment configs");
  }
  console.log(`Fetching data from ${url}`);
  const res = await fetch(url, {
    cache: "no-store",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log(`Failed to fetch data from ${url}`);
    throw new Error("Failed to fetch data"); //Stupid fucking error boundry.
  }
  return await res.json();
}

export default async function Home() {
  const oldVersion = false;

  //New version.
  let poemData: number[] = [];
  try {
    poemData = await getPoemIdList();
  } catch (err) {
    console.log("error while getting data...");
    let message = "unknown";
    if (err instanceof Error) message = err.message;
    else message = String(err);
    console.warn("Home:poemData", message);
  }

  const _poemDataGrouped = poemData.reduce((acc, curr, i) => {
    const chunkIndex = Math.floor(i / 3.0);

    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }

    acc[chunkIndex].push(curr);
    return acc;
  }, [] as number[][]);

  console.log("Generating rows...");
  const rows = _poemDataGrouped.map((itm) => (
    <PoemRow key={`poemRow-${itm[0]}`} poemIds={itm} />
  ));

  return (
    <div className={styles.outline}>
      <div className={"container"}>
        <Suspense fallback={<Loading />}>{rows}</Suspense>
      </div>
    </div>
  );
}
