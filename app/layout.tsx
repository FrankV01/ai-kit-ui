import React, { Suspense } from "react";
import { Metadata, ResolvingMetadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "bootswatch/dist/litera/bootstrap.min.css";
import StyledComponentsRegistry from "../components/StyledComponentsRegistry";
import styles from "./page.module.css";
import MyAnalytics from "../components/common/MyAnalytics";
import Loading from "./loading";
import { ConfigKeys } from "../lib/Utilities";
import getSiteConfigs from "../lib/api/GetSiteConfigs";
import { ReactChildrenType } from "../lib/Types";
import "./global.css";
import AppSessionProvider from "../components/common/AppSessionProvider";

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
                <Suspense fallback={<Loading poemsMode={false} />}>
                  {children}
                </Suspense>
              </main>
            </AppSessionProvider>
          </StyledComponentsRegistry>
        </React.StrictMode>
      </body>
    </html>
  );
}
