"use client";
import BasicPoemBreadcrub from "./BasicPoemBreadcrub";
import React from "react";

type RandomDynamicPlaceHolderType = {
  size: "xs" | "sm" | "md";
};
type DynamicPlaceHolderType = RandomDynamicPlaceHolderType & {
  n: number;
};

const DynamicPlaceHolder = ({ n, size }: DynamicPlaceHolderType) => (
  <>
    <span
      data-role="status-placeholder"
      role={"status"}
      className={`placeholder placeholder-${size}-${n}`}
    />{" "}
  </>
);
const RandomDynamicPlaceHolder = ({ size }: RandomDynamicPlaceHolderType) => (
  <DynamicPlaceHolder size={size} n={Math.floor(Math.random() * 6) + 1} />
);

const LoadingPoemBody = () => {
  return (
    <div className="container" role={"main"}>
      <div className="row">
        <div className="col-lg-2 col-md-1"></div>
        <div className="col-lg-8 col-md-10 col-sm-12">
          <h2>
            <span className="placeholder-wave">
              <DynamicPlaceHolder size={"xs"} n={4} />
              <DynamicPlaceHolder size={"xs"} n={2} />{" "}
              <DynamicPlaceHolder size={"xs"} n={4} />
            </span>
          </h2>
          <BasicPoemBreadcrub poemTitle={"Loading"} />
          <div className={"body p-2 my-3"}>
            <span className="placeholder-glow">
              <DynamicPlaceHolder size={"xs"} n={6} />
              <DynamicPlaceHolder size={"xs"} n={4} />
              <DynamicPlaceHolder size={"xs"} n={2} />
              <DynamicPlaceHolder size={"xs"} n={5} />
              <DynamicPlaceHolder size={"xs"} n={6} />
              <DynamicPlaceHolder size={"xs"} n={2} />
              <DynamicPlaceHolder size={"xs"} n={5} />
              <DynamicPlaceHolder size={"xs"} n={4} />
              <DynamicPlaceHolder size={"xs"} n={3} />
              <DynamicPlaceHolder size={"xs"} n={4} />
              <DynamicPlaceHolder size={"xs"} n={4} />
              <DynamicPlaceHolder size={"xs"} n={4} />
              <DynamicPlaceHolder size={"xs"} n={6} />
              <DynamicPlaceHolder size={"xs"} n={4} />
              <DynamicPlaceHolder size={"xs"} n={2} />
              <DynamicPlaceHolder size={"xs"} n={5} />
              <DynamicPlaceHolder size={"xs"} n={6} />
              <DynamicPlaceHolder size={"xs"} n={2} />
              <DynamicPlaceHolder size={"xs"} n={5} />
              <DynamicPlaceHolder size={"xs"} n={4} />
              <DynamicPlaceHolder size={"xs"} n={3} />
              <DynamicPlaceHolder size={"xs"} n={4} />
              <DynamicPlaceHolder size={"xs"} n={4} />
              <DynamicPlaceHolder size={"xs"} n={4} />
              <DynamicPlaceHolder size={"xs"} n={6} />
              <DynamicPlaceHolder size={"xs"} n={4} />
              <DynamicPlaceHolder size={"xs"} n={2} />
              <DynamicPlaceHolder size={"xs"} n={5} />
              <DynamicPlaceHolder size={"xs"} n={6} />
              <DynamicPlaceHolder size={"xs"} n={2} />
              <DynamicPlaceHolder size={"xs"} n={5} />
              <DynamicPlaceHolder size={"xs"} n={4} />
              <DynamicPlaceHolder size={"xs"} n={3} />
              <DynamicPlaceHolder size={"xs"} n={4} />
              <DynamicPlaceHolder size={"xs"} n={4} />
              <DynamicPlaceHolder size={"xs"} n={4} />
            </span>
          </div>
          <h4 className={"text-body-secondary"} title={"loading widget"}>
            <span className="placeholder-glow">
              <DynamicPlaceHolder size={"md"} n={12} />
            </span>
          </h4>
          <div title={"loading widget"} className={"small text-body-secondary"}>
            <span className="placeholder-glow">
              <DynamicPlaceHolder size={"md"} n={12} />
            </span>
          </div>
          <div className={"mt-3 small text-secondary float-end"}>
            <span className="placeholder-glow">
              <DynamicPlaceHolder size={"md"} n={12} />
            </span>
          </div>
        </div>
        <div className="col-lg-2 col-md-1"></div>
      </div>
    </div>
  );
};

export default LoadingPoemBody;
