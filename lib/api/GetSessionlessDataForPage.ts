"use server";
import "server-only";
import { EvnMgrSync } from "../EnvMgr";
import ISessionlessResponse from "../../types/ISessionlessResponse";

const evtMgr = EvnMgrSync();
const base = evtMgr.BASE_URL;
const url = `${base}/ai/sessionless/id`;

export default async function GetSessionlessDataForPage(
  id: number,
): Promise<ISessionlessResponse> {
  if (!id || [-1, -100].includes(id)) {
    throw new Error("Given ID Not found");
  }
  if (!url) {
    throw new Error("Invalid environment configs");
  }
  console.log(`Fetching data from ${url}/${id}`);
  const res = await fetch(`${url}/${id}`, {
    next: { revalidate: 3600 / 2 },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log(`Failed to fetch data from ${url}`);
    throw new Error("Failed to fetch data");
  }
  return await res.json();
}
