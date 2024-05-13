import React from "react";

/**
 * This should generate and manage the content component
 * in a singe page application style.
 *
 * @constructor
 */
export async function SpaContentGeneration() {
  // This is the general layout concept.
  return (
    <div className={"border bg-gradient container m-2 shadow-sm rounded-3"}>
      <div className={"row border-bottom"}>
        <div className={"p-1 col-9 text-center"}>
          <div className={"h3"}>title here</div>
        </div>
        <div className={"p-1 pt-3 col-3 text-end"}>05/12/2024</div>
      </div>
      <div className="row fs-5">
        <div className="col p-2">
          <div className={"text l"}>
            Create boxes that hold the content. Some comment elements, maybe
            eventually configuration, are date created, title, tags, and the
            content itself. The content is markdown and needs to be rendered as
            such.
          </div>
          <div className={"text l"}>
            How about a writing type tool. Mixed with ai for {'"'}inspiration
            {'"'} but also just writing.
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col p-2 small text-end">
          <span className={"ms-3"}>
            <a href={"#"}>#Tag1</a>
          </span>
          <span className={"ms-3"}>
            <a href={"#"}>#tag2</a>
          </span>
          <span className={"ms-3"}>
            <a href={"#"}>#cats</a>
          </span>
          <span className={"ms-3"}>
            <a href={"#"}>#dogs</a>
          </span>
        </div>
      </div>
    </div>
  );
}
