import React, { Suspense } from "react";
import { Inter } from "next/font/google";
import "bootswatch/dist/litera/bootstrap.min.css";
import StyledComponentsRegistry from "../lib/StyledComponentsRegistry";
import styles from "./page.module.css";
import { Metadata, ResolvingMetadata } from "next";
import MyAnalytics from "../components/MyAnalytics";
import { LayoutComponent } from "../components/LayoutComponent";
import Loading from "./loading";
import { getSiteConfigs } from "../lib/ApiActions";
import { IConfigurationItem } from "../types/IConfigurationItem";

export const dynamic = "force-dynamic";
const inter = Inter({ subsets: ["latin"] });

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
let siteConfigs: IConfigurationItem[] = [];

function getConfigValue(key: string, strDefault: string): string {
  const item = siteConfigs.find((item) => item.key === key);
  if (!item) {
    console.warn(`Unable to find config item for key: ${key}`);
    return strDefault;
  }
  return item?.configValue ? item.configValue : strDefault;
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
      "METADATA_TITLE",
      "AI generated Poems for the 'Hack' of it",
    ),
    description: getConfigValue(
      "METADATA_DESC",
      "AI generated Poems for the 'Hack' of it",
    ),
    applicationName: getConfigValue("METADATA_APP_NAME", "poems-ui"),
    keywords: getConfigValue(
      "METADATA_KEYWORDS",
      "AI,Portfolio,GPT-3,ChatGPT,ML,Frank Villasenor,theOpenSourceU,tOSU",
    ),
    authors: [
      { name: "Frank Villasenor", url: "http://www.theOpenSourceU.org/" },
    ],
    creator: getConfigValue("METADATA_CREATOR", "Frank Villasenor"),
    publisher: getConfigValue("METADATA_PUBLISHER", "Frank Villasenor"),
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
