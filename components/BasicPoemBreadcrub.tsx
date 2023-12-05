"use client";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import * as Icons from "react-bootstrap-icons";

export type BasicPoemBreadcrubProps = {
  poemTitle: string;
};

export default function BasicPoemBreadcrub(props: BasicPoemBreadcrubProps) {
  const poemTitle = props.poemTitle || "Viewing Poem";
  return (
    <Breadcrumb className={"text-center"}>
      <Breadcrumb.Item href="/">
        <Icons.ArrowReturnLeft /> Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#" active>
        Viewing Poem: {poemTitle}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}
