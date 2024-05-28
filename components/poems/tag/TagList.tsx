"use client";

import { TagActionButton } from "./TagActionButton";
import { Suspense, useState } from "react";
import { TagsResponse } from "../../../lib/Types";
import { AlphaTagList } from "./AlphaTagList";
import { ShuffledTagList } from "./ShuffledTagList";
import { TagContainerCssClass, TagLinkCssClass } from "./styles";

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
          linkClassName={TagLinkCssClass}
          containerClassName={TagContainerCssClass}
        />
      </div>
    );
  } else {
    // TLDR: The following is "version 2". It's supposed to have shuffle sorting
    //  but it doesn't work right now.
    return (
      <div className="" role="group">
        <TagActionButton
          className={TagContainerCssClass}
          linkClassName={TagLinkCssClass}
          disabled={active === false}
          onClick={(evt) => {
            evt.preventDefault();
            console.log("alpa clicked");
            setActive(false);
          }}
          buttonType={"alphabetical"}
        />
        <TagActionButton
          className={TagContainerCssClass}
          linkClassName={TagLinkCssClass}
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
            linkClassName={TagLinkCssClass}
            containerClassName={TagContainerCssClass}
          />
          <AlphaTagList
            tagData={tagData}
            visible={!active}
            linkClassName={TagLinkCssClass}
            containerClassName={TagContainerCssClass}
          />
        </Suspense>
      </div>
    );
  }
}
