"use server";
import EvtMgr from "./EnvMgr";
import { getServerSession } from "next-auth/next";
import { AdapterUser } from "next-auth/adapters";
import { User } from "next-auth";

export async function queueRequest(formData: FormData) {
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
