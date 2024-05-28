import React from "react";
import BasicPlaceHolder, { BasicPlaceHolderProps } from "./BasicPlaceHolder";

export type ResponsivePlaceHolderProps = BasicPlaceHolderProps & {
  size: "xs" | "sm" | "md";
};

const ResponsivePlaceHolder = ({ n, size }: ResponsivePlaceHolderProps) => (
  <>
    <span
      data-role="status-placeholder"
      role={"status"}
      className={`placeholder col-${size}-${n}`}
    />{" "}
  </>
);

export default BasicPlaceHolder;
