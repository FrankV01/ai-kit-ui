"use client";

import { TagActionButton } from "./TagActionButton";
import { Suspense, useState } from "react";
import { TagsResponse } from "../../../lib/Types";
import { AlphaTagList } from "./AlphaTagList";
import { ShuffledTagList } from "./ShuffledTagList";

/** might want this public and reused */
const linkStyles: string =
  " link-offset-1 link-offset-2-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover";
const tagClasses: string =
  "d-inline-flex flex-wrap link-secondary m-1 p-2 bg-primary-subtle border border-primary-subtle rounded";

export type TagListProps = {
  simple: boolean;
  tagData: TagsResponse[];
  visible: boolean;
};

// Under_dev: create a simple version of this. This one doesn't act right and
//  while I eventually want to fix it it's not important enough to fix now.
export function TagList({ simple, tagData, visible }: TagListProps) {
  const [active, setActive] = useState(false);

  if (!visible) return <></>;

  if (simple) {
    return (
      <div className="" role="group">
        <AlphaTagList
          tagData={tagData}
          visible={true}
          linkClassName={linkStyles}
          containerClassName={tagClasses}
        />
      </div>
    );
  } else {
    // TLDR: The following is "version 2". It's supposed to have shuffle sorting
    //  but it doesn't work right now.
    return (
      <div className="" role="group">
        <TagActionButton
          className={tagClasses}
          linkClassName={linkStyles}
          disabled={active === false}
          onClick={(evt) => {
            evt.preventDefault();
            console.log("alpa clicked");
            setActive(false);
          }}
          buttonType={"alphabetical"}
        />
        <TagActionButton
          className={tagClasses}
          linkClassName={linkStyles}
          disabled={active === true}
          onClick={(evt) => {
            evt.preventDefault();
            setActive(true);
          }}
          buttonType={"mix"}
        />
        <Suspense>
          <ShuffledTagList
            tagData={tagData}
            visible={active}
            linkClassName={linkStyles}
            containerClassName={tagClasses}
          />
          <AlphaTagList
            tagData={tagData}
            visible={!active}
            linkClassName={linkStyles}
            containerClassName={tagClasses}
          />
        </Suspense>
      </div>
    );
  }
}
