import styles from "./page.module.css";
//import "bootswatch/dist/litera/bootstrap.min.css";
import React, { Suspense } from "react";
import Loading from "./loading";
import { InfinitePoems } from "../components/poems/InfinitePoems";

const url = process.env.API_URL ? `${process.env.API_URL}/poems` : ""; //"http://localhost:3001/poems";

// Everything in /app is a ***react server component***\
//  If this is the case, where do client components go when
//  creating client side components.

/**
 * This is an indicator for Next.js
 */
export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <div className={styles.outline}>
      <div className={"container"}>
        <Suspense fallback={<Loading />}>
          <InfinitePoems key={1} />
        </Suspense>
      </div>
    </div>
  );
}
