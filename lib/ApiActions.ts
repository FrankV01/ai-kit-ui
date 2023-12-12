"use server";
import EvtMgr from "./EnvMgr";

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
