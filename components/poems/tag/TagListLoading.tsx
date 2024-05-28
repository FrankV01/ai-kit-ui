"use client";
import { TagLinkPlaceholderGroup } from "./TagLinkPlaceholderGroup";

/**
 * Shown while the Tag List is populated (AJAX)
 * @constructor
 */
export function TagListLoading() {
  return (
    <div className="" role="group">
      <TagLinkPlaceholderGroup />
      <TagLinkPlaceholderGroup />
      <TagLinkPlaceholderGroup />
      <TagLinkPlaceholderGroup />
      <TagLinkPlaceholderGroup />
    </div>
  );
}
