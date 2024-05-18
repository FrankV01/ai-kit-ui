"use server";
import "server-only";
import { ConfigurationResultType, Configurations } from "../Types";
import EvtMgr from "../EnvMgr";

/**
 * Restructures the config data from an array type to
 * a key value pair of Records. Not sure which is better.
 * @param data Input Data to convert.
 */
function restructureData(
  data: ConfigurationResultType[],
): Readonly<Configurations> {
  const result: Configurations = {};
  const booleanStrs = [true.toString(), false.toString()];
  data.forEach((item) => {
    const { key, value } = item;
    if (booleanStrs.includes(value.toLowerCase())) {
      result[key] = value.toLowerCase() === true.toString();
    } else {
      result[key] = Number.isSafeInteger(value)
        ? Number.parseInt(value)
        : value;
    }
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
