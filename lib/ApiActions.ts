"use server";
import EvtMgr from "./EnvMgr";
import { getServerSession } from "next-auth/next";
import { AdapterUser } from "next-auth/adapters";
import { User } from "next-auth";
import PoemResponse from "../types/PoemResponse";

export async function demandPoem(): Promise<string> {
  return Promise.resolve("Demand example; ".repeat(20));
}

const log = console.log.bind(console);

export async function getPoemIdList(
  pageNum: number = 1,
  pageSize: number = 1000,
): Promise<number[]> {
  log("getPoemIdList:paging", pageNum, pageSize);
  const base = (await EvtMgr()).BASE_URL;
  log("getPoemIdList:base", base);
  //const url = `${base}/poems?pageNum=${pageNum}&pageSize=${pageSize}`;
  const url = `${base}/poems/ids?pageNum=${pageNum}&pageSize=${pageSize}`;
  if (!url) {
    throw new Error("Invalid environment configs");
  }
  log(`Fetching data from ${url}`);
  const res = await fetch(url, {
    cache: "no-store",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    log(`Failed to fetch data from ${url}`);
    throw new Error("Failed to fetch data"); //Stupid fucking error boundry.
  }
  return await res.json();
}

export async function getPoemById(
  id: number,
  pageNum: number = 1,
  pageSize: number = 100000,
): Promise<PoemResponse> {
  log("getPoemIdList:getPoemById", id, pageNum, pageSize);
  const base = (await EvtMgr()).BASE_URL;
  const url = `${base}/poem/${id}?pageNum=${pageNum}&pageSize=${pageSize}`;
  if (!url) {
    throw new Error("Invalid environment configs");
  }
  console.log(`Fetching data from ${url}`);
  const res = await fetch(url, {
    //cache: "no-store",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log(`Failed to fetch data from ${url}`);
    throw new Error("Failed to fetch data"); //Stupid fucking error boundry.
  }
  return await res.json();
}

export async function queueRequest(formData: FormData) {
  log("getPoemIdList:queueRequest", formData);
  const session = await getServerSession();
  if (!session || !session.user) {
    console.warn("queueRequest::No session found.");
    return;
  }

  const baseUrl = (await EvtMgr()).BASE_URL; // process.env.API_URL ? `${process.env.API_URL}` : ""; //"http://localhost:3001/poems";

  const url = `${baseUrl}/queue_prompt`;
  console.log("queueRequest", formData);
  const rawFormData = {
    source: formData.get("email"),
    prompt: formData.get("prompt"),
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
