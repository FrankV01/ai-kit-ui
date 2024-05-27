"use server";
import React from "react";
import LoadingPoemBody from "../../components/poems/LoadingPoemBody";
import { PoemsLayoutComponent } from "../../components/poems/PoemsLayoutComponent";

export default async function Loading() {
  return (
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
