import React from "react";
import styles from "../../page.module.css";
import PoemBody from "../../../components/poems/PoemBody";
import GetSessionlessDataForPage from "../../../lib/api/GetSessionlessDataForPage";

export const dynamic = "force-dynamic";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const poemData = await GetSessionlessDataForPage(parseInt(id));

  if (!poemData) {
    // or is loading?
    return (
      <main className={styles.main}>
        <div className={"container"}>
          <h1>Poem not found...</h1>
        </div>
      </main>
    );
  }

  return (
    <main className={`${styles.main} mt-3`}>
      <div className={"container"}>
        <PoemBody poemData={poemData} />
      </div>
    </main>
  );
}
