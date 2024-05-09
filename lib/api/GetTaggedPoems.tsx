"use server";
import "server-only";
import ISessionlessResponse from "../../types/ISessionlessResponse";
import { EvnMgrSync } from "../EnvMgr";

const evtMgr = EvnMgrSync();
const base = evtMgr.BASE_URL;
const url = `${base}/ai/query/tag`;
const requestConfig: Partial<RequestInit> = {
  cache: "no-cache",
  headers: { "Content-Type": "application/json", appKey: evtMgr.APP_ID },
};

export default async function GetTaggedPoems(
  tag: string,
): Promise<ISessionlessResponse[]> {
  if (!url) {
    throw new Error("Invalid environment configs");
  }
  const _url = `${url}/${tag}`;
  const res = await fetch(_url, requestConfig);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log(`Failed to fetch data from ${_url}`);
    throw new Error("Failed to fetch data"); //Stupid fucking error boundry.
  }
  return await res.json();
}
