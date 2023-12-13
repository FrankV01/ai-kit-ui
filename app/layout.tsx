"use server";
import React from "react";
import { Inter } from "next/font/google";

import "bootswatch/dist/litera/bootstrap.min.css";
import StyledComponentsRegistry from "../lib/StyledComponentsRegistry";
import styles from "./page.module.css";
import { Container, Row, Col } from "react-bootstrap";
import HeaderMenu from "../components/HeaderMenu";
import LandingBanner from "../components/LandingBanner";
import Footer from "../components/Footer";
import { Metadata } from "next";
import myAnalytics from "../lib/myAnalytics";
import { AnalyticsInstance } from "analytics";
import { PageData } from "analytics";

const inter = Inter({ subsets: ["latin"] });
const topic = process.env.TOPIC || "unset";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const myAnalyticsInstance =
    (await myAnalytics()) as unknown as AnalyticsInstance;

  await myAnalyticsInstance.page({
    name: "AI-Poems",
    path: "/",
    url: "https://poems.theOpenSourceU.org/",
    title: "AI generated Poems for the 'Hack' of it",
    description: "AI generated Poems for the 'Hack' of it",
    topic: topic,
  } as PageData);

  //#E0E7EE #BBC7D4 #CAD5DF
  return (
    <html lang="en">
      <body className={inter.className}>
        <React.StrictMode>
          <StyledComponentsRegistry>
            <main style={{ background: "#E0E7EE" }} className={styles.main}>
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
                  <Col>{children}</Col>
                </Row>
                <Row>
                  <Col>
                    <Footer />
                  </Col>
                </Row>
              </Container>
            </main>
          </StyledComponentsRegistry>
        </React.StrictMode>
      </body>
    </html>
  );
}
