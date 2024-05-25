"use client";
import React from "react";

export default function PoemLoading({ id }: { id: number }) {
  return (
    <div
      key={`PoemCardDisplay-PoemLoading-${id}-item`}
      className={
        "card bg-light text-dark border-dark my-2 my-lg-3 my-md-2 p-0 shadow height-400"
      }
    >
      <div className="card-body">
        <h5 className="card-title">
          <div className={"p-1"}>
            <span className="placeholder-wave">
              <span className="placeholder-xs-2" />{" "}
              <span className="placeholder-xs-2" />{" "}
              <span className="placeholder-xs-4" />
            </span>
            &nbsp;
          </div>
        </h5>
        <p className="card-text">
          <span className="placeholder-glow">
            <span className="placeholder-xs-6" />{" "}
            <span className="placeholder-xs-4" />{" "}
            <span className="placeholder-xs-2" />{" "}
            <span className="placeholder-xs-5" />{" "}
            <span className="placeholder-xs-6" />{" "}
            <span className="placeholder-xs-2" />{" "}
            <span className="placeholder-xs-5" />{" "}
            <span className="placeholder-xs-4" />{" "}
            <span className="placeholder-xs-3" />{" "}
            <span className="placeholder-xs-4" />{" "}
            <span className="placeholder-xs-4" />{" "}
            <span className="placeholder-xs-4" />{" "}
          </span>
        </p>
      </div>
      <div
        className={
          "card-footer bottom small text-muted text-end position-sticky bottom-0 top-100"
        }
      >
        <span className="placeholder-glow">
          <span className="placeholder-xs-2" />
        </span>
        &nbsp;
      </div>
    </div>
  );
}
