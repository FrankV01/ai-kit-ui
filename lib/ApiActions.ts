"use server";
import EvtMgr from "./EnvMgr";
import { getServerSession } from "next-auth/next";

export async function queueRequest(formData: FormData) {
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

export async function RecordLogin() {
  const RecordLoginMsg = "RecordLogin::PUT";
  ("use server");
  const session = await getServerSession();
  if (session && session.user) {
    const baseUrl = (await EvtMgr()).BASE_URL;
    const result = await fetch(`${baseUrl}/user/create`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(session.user),
    });

    if (result.ok) {
      const json = await result.json();
      console.log(`${RecordLoginMsg}::ok`);
    } else {
      console.warn(`${RecordLoginMsg}::not ok`, JSON.stringify(result));
    }
  } else {
    console.log(`${RecordLoginMsg}::No session found.`);
  }
}
