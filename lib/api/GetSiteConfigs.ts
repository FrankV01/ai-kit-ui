"use server";
import "server-only";
import { ConfigurationResultType, Configurations } from "../Types";
import EvtMgr from "../EnvMgr";

function restructureData(
  data: ConfigurationResultType[],
): Readonly<Configurations> {
  const result: Configurations = {};
  data.forEach((item) => {
    result[item.key] = item.value;
  });
  return result;
}

let lazyLoadedSettings: Readonly<Configurations> | false = false;
export default async function getSiteConfigs(): Promise<
  Readonly<Configurations>
> {
  if (lazyLoadedSettings) {
    return lazyLoadedSettings;
  }

  const evtMgr = await EvtMgr();
  const base = evtMgr.BASE_URL;
  const url = `${base}/config`;
  console.log(`Fetching data from ${url}`);
  const res = await fetch(url, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      appKey: evtMgr.APP_ID,
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log(`Failed to fetch data from ${url}`);
    throw new Error("Failed to fetch data"); //Stupid fucking error boundry.
  }
  const rawResponse = await res.json();
  return (lazyLoadedSettings = restructureData(rawResponse));
}
