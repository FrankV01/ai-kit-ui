"use client";
import BasicPoemBreadcrub from "./BasicPoemBreadcrub";
import React from "react";

const LoadingPoemBody = () => {
  return (
    <div className="container" role={"main"}>
      <div className="row">
        <div className="col-lg-2 col-md-1"></div>
        <div className="col-lg-8 col-md-10 col-sm-12">
          <h2>
            <span className="placeholder-wave">
              <span className="placeholder-xs-4" />{" "}
              <span className="placeholder-xs-2" />{" "}
              <span className="placeholder-xs-4" />
            </span>{" "}
          </h2>
          <BasicPoemBreadcrub poemTitle={"Loading"} />
          <div className={"body p-2 my-3"}>
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
          </div>
          <h4 className={"text-body-secondary"} title={"loading widget"}>
            <span className="placeholder-glow">
              <span className="placeholder-md-12" />
            </span>
          </h4>
          <div title={"loading widget"} className={"small text-body-secondary"}>
            <span className="placeholder-glow">
              <span className="placeholder-md-12" />
            </span>
          </div>
          <div className={"mt-3 small text-secondary float-end"}>
            <span className="placeholder-glow">
              <span className="placeholder-md-12" />
            </span>
          </div>
        </div>
        <div className="col-lg-2 col-md-1"></div>
      </div>
    </div>
  );
};

export default LoadingPoemBody;
