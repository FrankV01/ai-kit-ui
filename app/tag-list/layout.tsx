import React from "react";
import { PoemsLayoutComponent } from "../../components/poems/PoemsLayoutComponent";

// TODO: Move this in to poem since this is strictly for poems.
export default async function poemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PoemsLayoutComponent>{children}</PoemsLayoutComponent>;
}
