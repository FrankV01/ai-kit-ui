import React from "react";
import { PoemsLayoutComponent } from "../../components/poems/PoemsLayoutComponent";
import { ReactChildrenType } from "../../lib/Types";

export default async function PoemsLayout({ children }: ReactChildrenType) {
  return <PoemsLayoutComponent>{children}</PoemsLayoutComponent>;
}
