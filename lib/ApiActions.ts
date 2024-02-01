"use server";
import EvtMgr from "./EnvMgr";
import { getServerSession } from "next-auth/next";
import { AdapterUser } from "next-auth/adapters";
import { User } from "next-auth";
import { ISessionlessResponse } from "../types/ISessionlessResponse";
import {
  IConfigurationItem,
  IConfigurations,
} from "../types/IConfigurationItem";
import "server-only";
import { SessionlessResponseApiResponseType, TagsResponse } from "./Types";

export async function demandPoem(): Promise<string> {
  return Promise.resolve("Demand example; ".repeat(20));
}

const log = console.log.bind(console);

let baseUrlCache: string = "";
async function getBaseUrl(): Promise<string> {
  if (!baseUrlCache) {
    baseUrlCache = (await EvtMgr()).BASE_URL;
  }
  return baseUrlCache;
}

export async function allowedEmails(): Promise<Set<string>> {
  return new Set([
    "jawzx01@gmail.com",
    "frank.villasenor@gmail.com",
    "frank@theOpenSourceU.org",
  ]);
}

export async function getPoemIdList(
  pageNum: number = 1,
  pageSize: number = 1000,
): Promise<number[]> {
  log("getPoemIdList:paging", pageNum, pageSize);
  const base = await getBaseUrl();
  log("getPoemIdList:base", base);
  const url = `${base}/ai/sessionless/ids?pageNum=${pageNum}&pageSize=${pageSize}`;
  if (!url) {
    throw new Error("Invalid environment configs");
  }
  log(`Fetching data from ${url}`);
  const res = await fetch(url, {
    cache: "no-store",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    log(`getPoemIdList Failed to fetch data from ${url}`);
    throw new Error("Failed to fetch data"); //Stupid fucking error boundry.
  }
  return await res.json();
}

export async function getGroupedPoemIds(
  pageNum: number = 1,
  pageSize: number = 1000,
): Promise<number[][]> {
  log("getGroupedPoemIds:paging", pageNum, pageSize);
  const dataSet = await getPoemIdList(pageNum, pageSize);
  const _poemDataGrouped = dataSet.reduce((acc, curr, i) => {
    const chunkIndex = Math.floor(i / 3.0);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(curr);
    return acc;
  }, [] as number[][]);
  return _poemDataGrouped;
}

export async function getSiteConfigs(): Promise<
  IConfigurations | IConfigurationItem[]
> {
  const base = await getBaseUrl();
  const url = `${base}/config`;
  console.log(`Fetching data from ${url}`);
  const res = await fetch(url, {
    cache: "no-store",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log(`Failed to fetch data from ${url}`);
    throw new Error("Failed to fetch data"); //Stupid fucking error boundry.
  }
  return (await res.json()) as IConfigurationItem[];
}

export async function getPoemById(id: number): Promise<ISessionlessResponse> {
  log("getPoemIdList:getPoemById", id);
  const base = await getBaseUrl();
  const url = `${base}/ai/sessionless/id/${id}`;
  if (!url) {
    throw new Error("Invalid environment configs");
  }
  console.log(`getPoemById Fetching data from ${url}`);
  const res = await fetch(url, {
    cache: "no-store",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log(`getPoemById Failed to fetch data from ${url}`);
    throw new Error("Failed to fetch data"); //Stupid fucking error boundry.
  }
  return await res.json();
}

export async function setPoemRating(poemId: number, rating: number) {
  console.log("setPoemRating");
  if (!poemId) return;
  if (rating > -1 && rating < 11) {
    const baseUrl = await getBaseUrl();
    const url = `${baseUrl}/ai/query/${poemId}/rating`;
    const body = {
      id: poemId,
      rating: rating,
    };
    console.log(`setPoemRating: Fetching data from ${url}`);

    const res = await fetch(url, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "same-origin", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      console.log(`setPoemRating: Failed to fetch data from ${url}`);
      //throw new Error("Failed to fetch data");
    }
  }
}

export async function queueRequest(formData: FormData) {
  log("getPoemIdList:queueRequest", formData);
  const session = await getServerSession();
  if (!session || !session.user) {
    console.warn("queueRequest::No session found.");
    return;
  }

  const baseUrl = await getBaseUrl(); // process.env.API_URL ? `${process.env.API_URL}` : ""; //"http://localhost:3001/poems";

  const url = `${baseUrl}/promptQ`;
  console.log("queueRequest", formData);
  const rawFormData = {
    source: formData.get("email"),
    prompt: formData.get("prompt"),
    userId: 1, // UNDER_DEV: session.user.id,
  };

  try {
    //Submit the data to the endpoint.
    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rawFormData),
    });
    if (resp.ok) {
      console.log("resp.ok", JSON.stringify(resp.json()));
    }
    return resp.ok === true;
  } catch (er) {
    console.warn("QueueRequest error", er);
    return false;
  }
}

export async function RecordLogin(user: User | AdapterUser) {
  log("getPoemIdList:RecordLogin");
  const RecordLoginMsg = "RecordLogin::PUT";

  const baseUrl = (await EvtMgr()).BASE_URL;
  const data = {
    email: user.email,
    name: user.name,
    image: user.image,
    googleId: user.id,
  };

  const result = await fetch(`${baseUrl}/user/create`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (result.ok) {
    console.log(`${RecordLoginMsg}::ok`);
  } else {
    console.warn(`${RecordLoginMsg}::not ok`, JSON.stringify(result));
  }
}

export async function getTagListData(): Promise<TagsResponse[]> {
  const baseUrl = (await EvtMgr()).BASE_URL;
  const url = baseUrl ? `${baseUrl}/tags/serverless` : "";

  if (!url) {
    throw new Error("Invalid environment configs");
  }
  const res = await fetch(url, {
    cache: "no-cache",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log(`Failed to fetch data from ${url}`);
    throw new Error("Failed to fetch data"); //Stupid fucking error boundry.
  }
  const s1 = (await res.json()) as TagsResponse[];
  return s1;
}

export async function requestPoem(): Promise<SessionlessResponseApiResponseType> {
  const method = "POST";
  const urlEndPoint = "ai/sessionless";
  const body = {
    prompt:
      "Create a poem about the future of computing and how fast it moves forward.",
  };
  const ret = await apiRequest(method, urlEndPoint, body);
  return ret as SessionlessResponseApiResponseType;
}

export async function apiRequest(
  method: "GET" | "POST" | "PUT" | "DELETE",
  urlEndPoint: string,
  body?: any,
): Promise<any> {
  const baseUrl = (await EvtMgr()).BASE_URL;
  const url = baseUrl ? `${baseUrl}/${urlEndPoint}` : "";
  if (!url) {
    throw new Error("Invalid environment configs");
  }

  const bodyStr = body ? JSON.stringify(body) : "";
  const res = await fetch(url, {
    method: method,
    cache: "no-cache",
    headers: { "Content-Type": "application/json" },
    body: bodyStr,
  });
  if (!res.ok) {
    console.log(`Failed to fetch data from ${url}`);
    throw new Error("Failed to fetch data");
  }
  return await res.json();
}
