import PoemCardDisplay from "../../../../components/poems/PoemCardDisplay";
import GetTaggedPoems from "../../../../lib/api/GetTaggedPoems";

export default async function Page({
  params: { tag },
}: {
  params: { tag: string };
}) {
  if (!tag) return <>error</>;
  const data = await GetTaggedPoems(tag);
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
