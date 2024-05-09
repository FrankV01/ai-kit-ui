import React from "react";
import { PoemsLayoutComponent } from "../../components/poems/PoemsLayoutComponent";
import { ReactChildrenType } from "../../lib/Types";

// TODO: Move this in to poem since this is strictly for poems.
export default async function poemsLayout({ children }: ReactChildrenType) {
  return <PoemsLayoutComponent>{children}</PoemsLayoutComponent>;
}
