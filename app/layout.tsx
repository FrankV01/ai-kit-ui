import React, { Suspense } from "react";
import { Inter } from "next/font/google";
import "bootswatch/dist/litera/bootstrap.min.css";
import StyledComponentsRegistry from "../components/StyledComponentsRegistry";
import styles from "./page.module.css";
import { Metadata, ResolvingMetadata } from "next";
import MyAnalytics from "../components/MyAnalytics";
import { LayoutComponent } from "../components/LayoutComponent";
import Loading from "./loading";
import { getSiteConfigs } from "../lib/ApiActions";
import { ConfigurationResultType } from "../lib/Types";
import {
  ConfigKeys,
  getConfigValue as _getConfigValue,
} from "../lib/Utilities";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";
const inter = Inter({ subsets: ["latin"] });

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
let siteConfigs: ConfigurationResultType[] = [];

function getConfigValue(key: string, strDefault: string): string {
  return _getConfigValue(siteConfigs, key, strDefault);
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // API call.

  if (!siteConfigs.length) {
    siteConfigs = await getSiteConfigs();
  }

  const metadata: Metadata = {
    title: getConfigValue(
      ConfigKeys.metadata.title,
      "ai-kit-ui - A white-labeled UI for AI-kit by Frank V.",
    ),
    description: getConfigValue(
      ConfigKeys.metadata.desc,
      "Fran's AI-Kit UI. Please configure these values in the database.",
    ),
    applicationName: getConfigValue("METADATA_APP_NAME", "ai-kit-ui"),
    keywords: getConfigValue(
      ConfigKeys.metadata.keywords,
      "AI,Portfolio,GPT-3,ChatGPT,ML,Frank Villasenor,theOpenSourceU,tOSU",
    ),
    authors: [
      { name: "Frank Villasenor", url: "http://www.theOpenSourceU.org/" },
    ],
    creator: getConfigValue(ConfigKeys.metadata.creator, "Frank Villasenor"),
    publisher: getConfigValue(
      ConfigKeys.metadata.publisher,
      "Frank Villasenor",
    ),
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
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nonce: string = (headers().get("x-nonce") as string) || missingNonce;

  //#E0E7EE #BBC7D4 #CAD5DF
  return (
    <html lang="en">
      <body className={inter.className}>
        <React.StrictMode>
          <MyAnalytics nonce={nonce} />
          <StyledComponentsRegistry>
            <main
              style={{ background: "#E0E7EE" }}
              nonce={nonce}
              className={styles.main}
            >
              <LayoutComponent>
                <Suspense fallback={<Loading />}>{children}</Suspense>
              </LayoutComponent>
            </main>
          </StyledComponentsRegistry>
        </React.StrictMode>
      </body>
    </html>
  );
}
