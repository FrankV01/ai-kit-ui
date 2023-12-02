import styles from "./page.module.css";
import PoemResponse from "../types/PoemResponse";
import PoemCardDisplay from "../components/PoemCardDisplay";
import { Container, Row, Col } from "react-bootstrap";

import HeaderMenu from "../components/HeaderMenu";
import LandingBanner from "../components/LandingBanner";
import Footer from "../components/Footer";

// Ok, so why does / go to page.tsx and not index.tsx?
//  It's because it's at the root of app and page.tsx is "index.tsx" in next.js

// Everything in /app is a ***react server component***\
//  If this is the case, where do client components go when
//  creating client side components.

const url = process.env.API_URL ? `${process.env.API_URL}/poems` : ""; //"http://localhost:3001/poems";
const topic = process.env.TOPIC || "unset";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI generated Poems for the 'Hack' of it",
  description: "AI generated Poems for the 'Hack' of it",
  applicationName: "poems-ui",
  keywords: [
    "AI",
    "poems",
    "hack",
    "Portfolio",
    "GPT-3",
    "ChatGPT",
    "AI",
    "Frank Villasenor",
  ],
  authors: [
    { name: "Frank Villasenor", url: "http://www.theOpenSourceU.org/" },
  ],
  creator: "Frank Villasenor",
  publisher: "Frank Villasenor",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

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
    //cache: "no-cache",
    cache: "no-store",
    //next: { revalidate: 3600 / 2 },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log(`Failed to fetch data from ${url}`);
    throw new Error("Failed to fetch data"); //Stupid fucking error boundry.
  }
  return await res.json();
}

export default async function Home() {
  const poemData: PoemResponse[] = await getData();

  return (
    <main className={styles.main}>
      <Container>
        <Row>
          <Col>
            <HeaderMenu topic={topic} />
          </Col>
        </Row>
        <Row>
          <Col>
            <LandingBanner />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.outline}>
              <PoemCardDisplay entries={poemData} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
