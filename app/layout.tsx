import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import StyledComponentsRegistry from "../components/StyledComponentsRegistry";
import styles from "./page.module.css";
import MyAnalytics from "../components/common/MyAnalytics";
import { ConfigKeys } from "../lib/Utilities";
import getSiteConfigs from "../lib/api/GetSiteConfigs";
import { ReactChildrenType } from "../lib/Types";
import AppSessionProvider from "../components/common/AppSessionProvider";

//This is setting the theme. We need to make this dynamic
//  though. Other wise everything will look the same and
//  that isn't cool
//import "bootswatch/dist/litera/bootstrap.min.css"; // Maybe we should just use the core for now.
// The thing with bootswatch is that it doesn't seem to be very dynamic.
// Atleast, I've not found a viable way to make it dynamic.
//
//
// Our custom styles.
import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";
//import * as bootstrap from "bootstrap/dist/js/bootstrap.min";
import "./global.css";

export const dynamic = "force-dynamic";
const inter = Inter({ subsets: ["latin"] });

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const siteConfigs = await getSiteConfigs();

  const metadata: Metadata = {
    title:
      (siteConfigs[ConfigKeys.metadata.title] as string) ||
      "ai-kit-ui - A white-labeled UI for AI-kit by Frank V.",
    description:
      (siteConfigs[ConfigKeys.metadata.desc] as string) ||
      "Frank's AI-Kit UI. Please configure these values in the database.",
    applicationName:
      (siteConfigs[ConfigKeys.metadata.appName] as string) || "ai-kit-ui",
    keywords:
      (siteConfigs[ConfigKeys.metadata.keywords] as string) ||
      "AI,Portfolio,GPT-3,ChatGPT,ML,Frank Villasenor,theOpenSourceU,tOSU",
    authors: [
      { name: "Frank Villasenor", url: "http://www.theOpenSourceU.org/" },
    ],
    creator:
      (siteConfigs[ConfigKeys.metadata.creator] as string) ||
      "Frank Villasenor",
    publisher:
      (siteConfigs[ConfigKeys.metadata.publisher] as string) ||
      "Frank Villasenor",
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
  return metadata;
}

const missingNonce = ""; //Use a blank string so it doesn't break the CSP.
export default async function RootLayout({ children }: ReactChildrenType) {
  const nonce: string = (headers().get("x-nonce") as string) || missingNonce;
  //#E0E7EE #BBC7D4 #CAD5DF
  return (
    <html lang="en">
      <body className={inter.className}>
        <React.StrictMode>
          <MyAnalytics nonce={nonce} gaMeasurementId={"G-BWCTMTSQR4"} />
          <StyledComponentsRegistry>
            <AppSessionProvider>
              <main
                style={{ background: "#E0E7EE" }}
                nonce={nonce}
                className={styles.main}
              >
                {children}
              </main>
            </AppSessionProvider>
          </StyledComponentsRegistry>
        </React.StrictMode>
      </body>
    </html>
  );
}
