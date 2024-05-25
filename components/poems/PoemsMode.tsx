import React, { Suspense } from "react";
import Loading from "../../app/loading";
import { InfinitePoems } from "./InfinitePoems";
import { PoemsLayoutComponent } from "./PoemsLayoutComponent";

export default async function PoemMode() {
  return (
    <PoemsLayoutComponent>
      <Suspense fallback={<Loading poemsMode={true} />}>
        <InfinitePoems key={1} />
      </Suspense>
    </PoemsLayoutComponent>
  );
}
