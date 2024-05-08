import ISessionlessResponse from "../../../../types/ISessionlessResponse";
import PoemCardDisplay from "../../../../components/poems/PoemCardDisplay";
import EvtMgr from "../../../../lib/EnvMgr";

const url = process.env.API_URL ? `${process.env.API_URL}/ai/query/tag` : ""; //"http://localhost:3001/poems";

async function getData(tag: string): Promise<ISessionlessResponse[]> {
  const evtMgr = await EvtMgr();
  if (!url) {
    throw new Error("Invalid environment configs");
  }
  const _url = `${url}/${tag}`;
  console.log(`Fetching data from ${_url}`);
  //const base = evtMgr.BASE_URL;
  const res = await fetch(_url, {
    cache: "no-cache",
    headers: { "Content-Type": "application/json", appKey: evtMgr.APP_ID },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log(`Failed to fetch data from ${_url}`);
    throw new Error("Failed to fetch data"); //Stupid fucking error boundry.
  }
  return await res.json();
}

export default async function Page({
  params: { tag },
}: {
  params: { tag: string };
}) {
  if (!tag) return <>error</>;
  const data = await getData(tag);
  const tagForDisplay = decodeURIComponent(tag);
  return (
    <div>
      <h3>
        Poem tagged &quot;
        <span className={"text-info-emphasis"}>{tagForDisplay}</span>
        &quot;
      </h3>
      <PoemCardDisplay entries={data} />
    </div>
  );
}
