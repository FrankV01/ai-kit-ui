import styles from "../../page.module.css";
import { Container } from "react-bootstrap";
import ISessionlessResponse from "../../../types/ISessionlessResponse";
import PoemBody from "../../../components/poems/PoemBody";
import Loading from "../loading";
import React, { Suspense } from "react";

export const dynamic = "force-dynamic";

const url = process.env.API_URL
  ? `${process.env.API_URL}/ai/sessionless/id`
  : "";

async function getData(id: number): Promise<ISessionlessResponse> {
  if (!id || [-1, -100].includes(id)) {
    throw new Error("Given ID Not found");
  }
  if (!url) {
    throw new Error("Invalid environment configs");
  }
  console.log(`Fetching data from ${url}/${id}`);
  const res = await fetch(`${url}/${id}`, {
    next: { revalidate: 3600 / 2 },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log(`Failed to fetch data from ${url}`);
    throw new Error("Failed to fetch data");
  }
  return await res.json();
}

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const poemData = await getData(parseInt(id));

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
