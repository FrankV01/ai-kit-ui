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
      key={`taglink-div-${tagItem.id}`}
      data-testid={`taglink-div-${tagItem.id}`}
      className={className}
    >
      <Link
        href={`/poem/tag/${encodeURIComponent(tagItem.tag)}`}
        key={`taglink-${tagItem.id}`}
        className={linkClassName}
        data-testid={`taglink-link-${tagItem.id}`}
      >
        {tagItem.tag}
      </Link>
    </div>
  );
}
