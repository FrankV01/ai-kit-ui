"use server";
import React from "react";
import LoadingPoemBody from "../../components/poems/LoadingPoemBody";

export default async function page() {
  return <LoadingPoemBody />;
}
