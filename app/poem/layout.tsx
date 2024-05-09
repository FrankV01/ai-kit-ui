import React from "react";
import { PoemsLayoutComponent } from "../../components/poems/PoemsLayoutComponent";

export default async function PoemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PoemsLayoutComponent>{children}</PoemsLayoutComponent>;
}
