import React from "react";
import { Inter } from "next/font/google";
import "bootswatch/dist/litera/bootstrap.min.css";
import StyledComponentsRegistry from "../lib/StyledComponentsRegistry";
import styles from "./page.module.css";
import { Metadata } from "next";
import MyAnalytics from "../components/MyAnalytics";
import { LayoutComponent } from "../components/LayoutComponent";

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
    "ML",
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
  //#E0E7EE #BBC7D4 #CAD5DF
  return (
    <html lang="en">
      <body className={inter.className}>
        <React.StrictMode>
          <MyAnalytics />
          <StyledComponentsRegistry>
            <main style={{ background: "#E0E7EE" }} className={styles.main}>
              <LayoutComponent>{children}</LayoutComponent>
            </main>
          </StyledComponentsRegistry>
        </React.StrictMode>
      </body>
    </html>
  );
}
