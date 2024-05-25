import Link from "next/link";
import { getTagListData } from "../../lib/api/ApiActions";

export const dynamic = "force-dynamic";

export default async function Page() {
  const results = await getTagListData();
  return (
    <div key={`tag-list-div`}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Tags List</h3>
            <div
              className="list-group d-flex flex-wrap flex-fill m-0"
              role="group"
            >
              {results.map((itm) => (
                <div
                  key={`tag-list-div-${itm.id}`}
                  className="list-group-item m-0 bg-primary"
                >
                  <Link
                    href={`/poem/tag/${encodeURIComponent(itm.tag)}`}
                    key={`tag-list-${itm.id}`}
                  >
                    {itm.tag}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
