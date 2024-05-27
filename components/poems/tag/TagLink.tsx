import Link from "next/link";
import { TagsResponse } from "../../../lib/Types";

export type TagLinkProps = {
  className: string;
  linkClassName: string;
  tagItem: TagsResponse;
};
export function TagLink({ className, linkClassName, tagItem }: TagLinkProps) {
  return (
    <div key={`tag-list-div-${tagItem.id}`} className={className}>
      <Link
        href={`/poem/tag/${encodeURIComponent(tagItem.tag)}`}
        key={`tag-list-${tagItem.id}`}
        className={
          " link-offset-1 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        }
      >
        {tagItem.tag}
      </Link>
    </div>
  );
}
