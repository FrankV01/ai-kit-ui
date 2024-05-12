import React, { Suspense } from "react";

/**
 * This should generate and manage the content component
 * in a singe page application style.
 *
 * @constructor
 */
export async function SpaContentGeneration() {
  return (
    <div className={"container m-2"}>
      <div className={"row"}>
        <div className={"p-1 col-9 text-center"}>
          <h3>title here</h3>
        </div>
        <div className={"p-1 col-3 text-end"}>Date Published</div>
      </div>
      <div className="row">
        <div className="col ">
          <div className={""}>
            Create boxes that hold the content. Some comment elements, maybe
            eventually configuration, are date created, title, tags, and the
            content itself. The content is markdown and needs to be rendered as
            such.
          </div>
        </div>
      </div>
    </div>
  );
}
