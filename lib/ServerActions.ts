"use server";

// TODO: combine w/ ApiActions.
import { getServerSession } from "next-auth/next";
import EvtMgr from "./EnvMgr";

const msg = "RecordLogin::PUT";

export async function RecordLogin() {
  "use server";
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
      console.log(`${msg}::ok`);
    } else {
      console.warn(`${msg}::not ok`, JSON.stringify(result));
    }
  } else {
    console.log(`${msg}::No session found.`);
  }
}
