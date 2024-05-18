import React from "react";

export default function PoemNoneFound() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5" />
        <div className="col-md-5">
          <div className={"h3 text-dark"}>No poems found</div>
        </div>
        <div className="col-md-2" />
      </div>
    </div>
  );
}
