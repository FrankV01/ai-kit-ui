import React from "react";

export type BasicPlaceHolderProps = { n: number };

const BasicPlaceHolder = ({ n }: BasicPlaceHolderProps) => (
  <>
    <span
      data-role="status-placeholder"
      role={"status"}
      className={`placeholder col-${n}`}
    />{" "}
  </>
);

export default BasicPlaceHolder;
