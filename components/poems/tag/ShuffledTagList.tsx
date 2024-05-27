import { TagLink } from "./TagLink";
import { useMemo } from "react";
import { TagListProps } from "./TagList";

type ShuffledTagListProps = Omit<TagListProps, "simple"> & {
  containerClassName: string;
  linkClassName: string;
};

export function ShuffledTagList({
  tagData,
  visible,
  containerClassName,
  linkClassName,
}: ShuffledTagListProps) {
  const elements = useMemo(
    () =>
      tagData
        .sort(() => Math.random() - 0.5)
        .map((itm) => (
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
