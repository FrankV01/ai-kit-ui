import { TagListProps } from "./TagList";
import { TagLink } from "./TagLink";
import { useMemo } from "react";

type AlphaTagListProps = Omit<TagListProps, "simple"> & {
  containerClassName: string;
  linkClassName: string;
};

export function AlphaTagList({
  tagData,
  visible,
  containerClassName,
  linkClassName,
}: AlphaTagListProps) {
  const elements = useMemo(
    () =>
      tagData.map((itm) => (
        <TagLink
          key={itm.id}
          tagItem={itm}
          className={containerClassName}
          linkClassName={linkClassName}
        />
      )),
    [containerClassName, linkClassName],
  );

  if (!visible) return <></>;
  return elements;
}
