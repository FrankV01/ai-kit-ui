"use server";
import "server-only";
import EvtMgr from "../EnvMgr";
import { getServerSession } from "next-auth/next";
import { AdapterUser } from "next-auth/adapters";
import { User } from "next-auth";
import {
  ConvoReturnType,
  ISessionlessResponse,
  SessionlessResponseApiResponseType,
  TagsResponse,
} from "../Types";

export async function demandPoem(): Promise<string> {
  return Promise.resolve("Demand example; ".repeat(20));
}

const log = console.log.bind(console);

let baseUrlCache: string = "";
async function getBaseUrl(): Promise<string> {
  if (!baseUrlCache) {
    baseUrlCache = (await EvtMgr()).BASE_API_URL;
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
  const evtMgr = await EvtMgr();
  const base = evtMgr.BASE_API_URL;
  log("getPoemIdList:base", base);
  const url = `${base}/ai/sessionless/ids?pageNum=${pageNum}&pageSize=${pageSize}`;
  if (!url) {
    throw new Error("Invalid environment configs");
  }
  log(`Fetching data from ${url}`);
  const res = await fetch(url, {
    cache: "no-store",
    headers: { appKey: evtMgr.APP_ID, "Content-Type": "application/json" },
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

export async function getPoemById(id: number): Promise<ISessionlessResponse> {
  log("getPoemIdList:getPoemById", id);
  const evtMgr = await EvtMgr();
  const base = evtMgr.BASE_API_URL;
  const url = `${base}/ai/sessionless/id/${id}`;
  if (!url) {
    throw new Error("Invalid environment configs");
  }
  console.log(`getPoemById Fetching data from ${url}`);
  const res = await fetch(url, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      appKey: evtMgr.APP_ID,
    },
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
    const evtMgr = await EvtMgr();
    const baseUrl = evtMgr.BASE_API_URL;
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
        appKey: evtMgr.APP_ID,
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
  const evtMgr = await EvtMgr();
  const baseUrl = evtMgr.BASE_API_URL;

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
      headers: { "Content-Type": "application/json", appKey: evtMgr.APP_ID },
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
  const evtMgr = await EvtMgr();
  const baseUrl = evtMgr.BASE_API_URL;
  const data = {
    email: user.email,
    name: user.name,
    image: user.image,
    googleId: user.id,
  };

  const result = await fetch(`${baseUrl}/user/create`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", appKey: evtMgr.APP_ID },
    body: JSON.stringify(data),
  });

  if (result.ok) {
    console.log(`${RecordLoginMsg}::ok`);
  } else {
    console.warn(`${RecordLoginMsg}::not ok`, JSON.stringify(result));
  }
}

export async function getTagListData(): Promise<TagsResponse[]> {
  const evtMgr = await EvtMgr();
  const baseUrl = evtMgr.BASE_API_URL;
  const url = baseUrl ? `${baseUrl}/tags/serverless` : "";

  if (!url) {
    throw new Error("Invalid environment configs");
  }

  const res = await fetch(url, {
    cache: "no-cache",
    headers: { "Content-Type": "application/json", appKey: evtMgr.APP_ID },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log(`Failed to fetch data from ${url}`);
    throw new Error("Failed to fetch data"); //Stupid fucking error boundry.
  }
  const s1 = (await res.json()) as TagsResponse[];
  return s1;
}

function getRandomElement(arr: string[]): string {
  let m: number = arr.length,
    t: string,
    i: number;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }
  return arr[0]; // Return the first element of the shuffled array
}

export async function requestPoem(): Promise<SessionlessResponseApiResponseType> {
  const method = "POST";
  const urlEndPoint = "ai/sessionless";
  const body = {
    prompt: "",
    prompts: [
      "Create a poem about the future of computing and how fast it moves forward.",
      "Create a poem about the past of computing and the path it's taken as it it moved forward.",
      "Create a poem about how difficult this job market is and how it's distressing.",
      "Create a poem about how difficult this job market is and how it can lead to innovation.",
      "Create a poem about about the new Apple Vision Pro - an augmented reality computing platform.",
      "Craft a poem which celebrates the advancing field of artificial intelligence and its impact.",
      "Compose a poem depicting the evolution of Internet from its birth till now.",
      "Compose a poem about the way this challenging economy can encourage creativity and entrepreneurship.",
      "Compose a poem about the cutting-edge Oculus Quest VR experience and its perception-altering tendencies.",
      "Compose a poem about the influence and evolution of social media in our lives.",
      "Create a touching poem in a narrative style about a lovelorn AI chatbot longing for human affection.",
      "Write a poem about the beauty and complexity of coding languages, their similarities to human languages",
      "Illustrate a tale of struggle and triumph within the challenging ecosystem of Silicon Valley.",
      "Pen a poem about how telecommunication has connected hearts across distances.",
      "Create a poem on the blossoming romance between two AI programs.",
      "Write a poem about futuristic visions of hologram technology.",
      "Write a poem exploring the intersection between technology and art.",
      "Create a poem as an ode to the NASA's space program and the Hubble Space Telescope.",
      "Compose a poem praising the space observation made possible by the Hubble Space Telescope.",
      "Create a sonnet for the undiscovered mysteries of the quantum realm.",
      "Create a poem inspired by science fiction, depicting a world managed by IoT (Internet of Things).",
      "Compose a heartfelt poem about a programmer's love for the immensity of the digital universe.",
      "Create a poem as an ode to the NASA and the space program as a whole. Write a remembrance of anything involving NASA and the space program.",
    ],
  };
  body.prompt = getRandomElement(body.prompts);

  const ret = await apiRequest(method, urlEndPoint, body);
  return ret as SessionlessResponseApiResponseType;
}

export async function getChatSession(clientSessionId: string = "") {
  const method = "POST";
  const urlEndPoint = "ai/chat/start-session";
  const body = clientSessionId ? { sessionId: clientSessionId } : null;
  const ret = await apiRequest(method, urlEndPoint, body);
  console.log("getChatSession", ret, JSON.stringify(ret, null, 2));
  return ret;
}

export async function getChatSessionConversation(clientSessionId: string) {
  if (!clientSessionId) throw new Error("Invalid clientSessionId");
  const method = "GET";
  const urlEndPoint = `ai/chat/get-conversation/${clientSessionId}`;
  const ret = await apiRequest(method, urlEndPoint);
  console.log("getChatSessionConversation", ret, JSON.stringify(ret, null, 2));
  return ret;
}

export async function apiRequest(
  method: "GET" | "POST" | "PUT" | "DELETE",
  urlEndPoint: string,
  body?: any,
): Promise<any> {
  const evtMgr = await EvtMgr();
  const baseUrl = evtMgr.BASE_API_URL;
  const url = baseUrl ? `${baseUrl}/${urlEndPoint}` : "";
  if (!url) {
    throw new Error("Invalid environment configs");
  }

  const bodyStr = body ? JSON.stringify(body) : undefined;
  const conf = {
    method: method,
    cache: "no-cache",
    headers: { "Content-Type": "application/json", appKey: evtMgr.APP_ID },
    body: bodyStr,
  };
  if (method === "GET" || method === "DELETE") {
    delete conf.body;
  }
  const res = await fetch(url, {
    method: method,
    cache: "no-cache",
    headers: { "Content-Type": "application/json", appKey: evtMgr.APP_ID },
    body: bodyStr,
  });
  if (!res.ok) {
    console.log(`Failed to fetch data from ${url}`);
    throw new Error("Failed to fetch data");
  }
  return await res.json();
}

export async function startSession(): Promise<string> {
  const result = await apiRequest("POST", "ai/chat/start-session");
  console.log("startSession:result", result);
  return result?.sessionId;
}
export async function endSession(sessionId: string) {
  try {
    const result = await apiRequest(
      "DELETE",
      `ai/chat/end-session/${sessionId}`,
    );
    console.log("endSession:result", result);
  } catch (er) {
    console.warn("endSession", er);
  }
}

/**
 * Gets the conversation. Inherently also validates the session.
 * @param sessionId
 */
export async function getConvo(sessionId: string) {
  const convert = (itm: {
    appId: any;
    assocSessionId: any;
    senderId: any;
    message: any;
    created: string | number | Date;
    role: any;
  }): ConvoReturnType => ({
    appId: itm.appId,
    assocSessionId: itm.assocSessionId,
    senderId: itm.senderId,
    message: itm.message,
    created: new Date(itm.created),
    role: itm.role,
  });

  try {
    const result = await apiRequest(
      "GET",
      `ai/chat/get-conversation/${sessionId}`,
    );
    console.log("getConvo:result", result);
    const typedResultArray: ConvoReturnType[] = [];
    const _sessionId = result.sessionId;
    if (!_sessionId) throw new Error("unexpectedly missing the sessionId");
    if (_sessionId !== result.sessionId)
      throw new Error("unexpected mis-match of the sessionId para vs result");

    for (const msgObj of result.messages) {
      const typedResult = convert(msgObj);
      typedResultArray.push(typedResult);
    }
    console.log("getConvo:typedResultArray", typedResultArray);
    return typedResultArray;
  } catch (er) {
    console.warn("getConvo:result:err", er);
  }
}
export async function submitMessageToConvo(sessionId: string, msg: string) {
  try {
    const result = await apiRequest(
      "POST",
      `ai/chat/submit-message/${sessionId}`,
      { message: msg },
    );
    console.log("submitMessageToConvo:result", result);
    return result;
  } catch (er) {
    console.warn("submitMessageToConvo", er);
  }
}
