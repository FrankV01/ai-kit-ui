import { TagListData } from "../../../components/poems/tag/TagListData";

export const dynamic = "force-dynamic";

export default async function Page() {
  return (
    <div key={`tag-list-div`}>
      <div className="container">
        <h3>Tags List</h3>
        <TagListData />
      </div>
    </div>
  );
}
