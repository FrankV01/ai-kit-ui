import React, { Suspense } from "react";
import { Container } from "react-bootstrap";
import styles from "../../page.module.css";
import PoemBody from "../../../components/poems/PoemBody";
import Loading from "../loading";
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
        <Container>
          <h1>Poem not found...</h1>
        </Container>
      </main>
    );
  }

  return (
    <main className={`${styles.main} mt-3`}>
      <Container>
        <Suspense fallback={<Loading />}>
          <PoemBody poemData={poemData} />
        </Suspense>
      </Container>
    </main>
  );
}
