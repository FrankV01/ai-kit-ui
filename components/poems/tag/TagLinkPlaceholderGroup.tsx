import { TagContainerCssClass, TagLinkCssClass } from "./styles";
import { TagLinkPlaceholder } from "./TagLinkPlaceholder";

/**
 * A group of 10 place holders with staticly genrated keys
 * Otherwise they may not show up and that ruins the effect.
 */
export function TagLinkPlaceholderGroup() {
  return (
    <>
      <TagLinkPlaceholder
        key={`tag-list-loading-placeholder-1`}
        className={TagContainerCssClass}
        linkClassName={TagLinkCssClass}
      />
      <TagLinkPlaceholder
        key={`tag-list-loading-placeholder-2`}
        className={TagContainerCssClass}
        linkClassName={TagLinkCssClass}
      />
      <TagLinkPlaceholder
        key={`tag-list-loading-placeholder-3`}
        className={TagContainerCssClass}
        linkClassName={TagLinkCssClass}
      />
      <TagLinkPlaceholder
        key={`tag-list-loading-placeholder-4`}
        className={TagContainerCssClass}
        linkClassName={TagLinkCssClass}
      />
      <TagLinkPlaceholder
        key={`tag-list-loading-placeholder-5`}
        className={TagContainerCssClass}
        linkClassName={TagLinkCssClass}
      />
      <TagLinkPlaceholder
        key={`tag-list-loading-placeholder-6`}
        className={TagContainerCssClass}
        linkClassName={TagLinkCssClass}
      />
      <TagLinkPlaceholder
        key={`tag-list-loading-placeholder-7`}
        className={TagContainerCssClass}
        linkClassName={TagLinkCssClass}
      />
      <TagLinkPlaceholder
        key={`tag-list-loading-placeholder-8`}
        className={TagContainerCssClass}
        linkClassName={TagLinkCssClass}
      />
      <TagLinkPlaceholder
        key={`tag-list-loading-placeholder-9`}
        className={TagContainerCssClass}
        linkClassName={TagLinkCssClass}
      />
      <TagLinkPlaceholder
        key={`tag-list-loading-placeholder-10`}
        className={TagContainerCssClass}
        linkClassName={TagLinkCssClass}
      />
    </>
  );
}
