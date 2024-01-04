import styles from "./page.module.css";
import EvtMgr from "../lib/EnvMgr";

import "bootswatch/dist/litera/bootstrap.min.css";
import React, { Suspense } from "react";
import Loading from "./loading";
import PoemRow from "../components/poems/PoemRow";
import { getPoemIdList } from "../lib/ApiActions";

// Ok, so why does / go to page.tsx and not index.tsx?
//  It's because it's at the root of app and page.tsx is "index.tsx" in next.js

// Everything in /app is a ***react server component***\
//  If this is the case, where do client components go when
//  creating client side components.

/**
 * This is an indicator for Next.js
 */
export const dynamic = "force-dynamic";

// async function getData(
//   pageNum: number = 1,
//   pageSize: number = 100000,
// ): Promise<number[]> {
//   const base = (await EvtMgr()).BASE_URL;
//   //const url = `${base}/poems?pageNum=${pageNum}&pageSize=${pageSize}`;
//   const url = `${base}/poems/ids?pageNum=${pageNum}&pageSize=${pageSize}`;
//   if (!url) {
//     throw new Error("Invalid environment configs");
//   }
//   console.log(`Fetching data from ${url}`);
//   const res = await fetch(url, {
//     //cache: "no-store",
//   });
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     console.log(`Failed to fetch data from ${url}`);
//     throw new Error("Failed to fetch data"); //Stupid fucking error boundry.
//   }
//   return await res.json();
// }

export default async function Home() {
  const poemData: number[] = await getPoemIdList();
  const _poemDataMdGrouped = poemData.reduce((acc, curr, i) => {
    const chunkIndex = Math.floor(i / 3);

    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }

    acc[chunkIndex].push(curr);
    return acc;
  }, [] as number[][]);

  const rows = _poemDataMdGrouped.map((itm) => {
    console.log(itm);
    //return <div>poem {JSON.stringify(itm)} here</div>;
    return <PoemRow key={`poemRow-${itm[0]}`} poemIds={itm} />;
  });

  //Under_dev New design. Inital DB request should get a list of poem IDs (it dictactes the order, page number or
  //  number and then each component will populate iteself with it's assigned poem (via id) and output.

  // TODO: We should move this to the layout and just leave the div / poemcard display.
  // That gives us the important parts being reusable.
  return (
    <div className={styles.outline}>
      <div className={"container"}>
        <Suspense fallback={<Loading />}>{rows}</Suspense>
      </div>
    </div>
  );
}
