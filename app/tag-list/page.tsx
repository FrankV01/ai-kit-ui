import Link from "next/link";
const url = process.env.API_URL ? `${process.env.API_URL}/tags` : ""; //"http://localhost:3001/poems";

type TagsResponse = { id: number; tag: string };

async function getData(): Promise<TagsResponse[]> {
  if (!url) {
    throw new Error("Invalid environment configs");
  }
  console.log(`Fetching data from ${url}`);
  const res = await fetch(url, {
    cache: "no-store",
    //cache: "no-cache",
    //next: { revalidate: 3600 / 2 },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log(`Failed to fetch data from ${url}`);
    throw new Error("Failed to fetch data"); //Stupid fucking error boundry.
  }
  const s1 = (await res.json()) as TagsResponse[];
  console.log(s1);
  return s1;
}

export default async function Page() {
  const results = await getData();
  return (
    <div key={`tag-list-div`}>
      <h3>Tags List</h3>
      {results.map((itm) => (
        <div key={`tag-list-div-${itm.id}`}>
          <Link
            href={`/poem/tag/${encodeURIComponent(itm.tag)}`}
            key={`tag-list-${itm.id}`}
          >
            {itm.tag}
          </Link>
        </div>
      ))}
    </div>
  );
}
