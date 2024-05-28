"use client";

import { TagList } from "./TagList";
import { useEffectOnce } from "usehooks-ts";
import { getTagListData } from "../../../lib/api/ApiActions";
import { useState } from "react";
import { TagsResponse } from "../../../lib/Types";
import { TagListLoading } from "./TagListLoading";

export function TagListData() {
  const [tagData, setTagData] = useState<TagsResponse[]>([]);

  useEffectOnce(() => {
    getTagListData().then((tags) => {
      setTagData(tags);
    });
  });

  if (!tagData || tagData.length === 0) return <TagListLoading />;

  return <TagList simple={true} visible={true} tagData={tagData} />;
}
