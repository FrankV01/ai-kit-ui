import Link from "next/link";
import { getTagListData } from "../../../lib/api/ApiActions";

export const dynamic = "force-dynamic";

export default async function Page() {
  const results = await getTagListData();
  return (
    <div key={`tag-list-div`}>
      <div className="container">
        <h3>Tags List</h3>
        <div className="pe-3" role="group">
          {results.map((itm) => (
            <div
              key={`tag-list-div-${itm.id}`}
              className="d-inline-flex flex-wrap link-secondary m-1 p-2 bg-primary-subtle border border-primary-subtle rounded"
            >
              <Link
                href={`/poem/tag/${encodeURIComponent(itm.tag)}`}
                key={`tag-list-${itm.id}`}
                className={
                  " link-offset-1 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                }
              >
                {itm.tag}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
