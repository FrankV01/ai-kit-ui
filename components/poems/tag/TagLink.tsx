import Link from "next/link";
import { TagsResponse } from "../../../lib/Types";

export type TagLinkProps = {
  className: string;
  linkClassName: string;
  tagItem: TagsResponse;
};
export function TagLink({ className, linkClassName, tagItem }: TagLinkProps) {
  if (tagItem.tag === "") {
    throw new Error("Tag is empty");
  }
  if (tagItem.id === 0) {
    throw new Error("Tag is empty");
  }

  return (
    <div
      key={`tag-list-div-${tagItem.id}`}
      data-testid={`tag-link-div-${tagItem.id}`}
      className={className}
    >
      <Link
        href={`/poem/tag/${encodeURIComponent(tagItem.tag)}`}
        key={`tag-list-${tagItem.id}`}
        className={linkClassName}
        data-testid={`tag-link-link-${tagItem.id}`}
      >
        {tagItem.tag}
      </Link>
    </div>
  );
}
