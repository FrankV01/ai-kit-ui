import { getTagListData } from "../../../lib/api/ApiActions";
import { TagList } from "../../../components/poems/tag/TagList";

export const dynamic = "force-dynamic";

export default async function Page() {
  const results = await getTagListData();

  return (
    <div key={`tag-list-div`}>
      <div className="container">
        <h3>Tags List</h3>
        <TagList tagData={results} />
      </div>
    </div>
  );
}
