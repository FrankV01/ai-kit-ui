"use client";

import { TagActionButton } from "./TagActionButton";
import { TagLink } from "./TagLink";
import { useEffect, useMemo, useState } from "react";
import { TagsResponse } from "../../../lib/Types";

/** might want this public and reused */
const linkStyles: string =
  " link-offset-1 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover";
const link2Styles: string =
  " link-offset-1 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover";
const tagClasses: string =
  "d-inline-flex flex-wrap link-secondary m-1 p-2 bg-primary-subtle border border-primary-subtle rounded";

export type TagListProps = {
  tagData: TagsResponse[];
};

export function TagList({ tagData }: TagListProps) {
  const [active, setActive] = useState(false);
  const [shuffledTagData, setShuffledTagData] = useState(tagData);

  useEffect(() => {
    if (active) {
      setShuffledTagData(tagData.sort(() => Math.random() - 0.5));
    }
  }, [active]);

  const tagDataToShow = useMemo(() => {
    return active ? shuffledTagData : tagData;
  }, [active, shuffledTagData, tagData]);

  return (
    <div className="" role="group">
      <TagActionButton
        className={tagClasses}
        linkClassName={linkStyles}
        onClick={() => setActive(!active)}
        buttonType={"alphabetical"}
      />
      <TagActionButton
        className={tagClasses}
        linkClassName={linkStyles}
        onClick={() => setActive(active)}
        buttonType={"mix"}
      />
      {tagDataToShow.map((itm) => (
        <TagLink
          key={itm.id}
          tagItem={itm}
          className={tagClasses}
          linkClassName={link2Styles}
        />
      ))}
    </div>
  );
}
