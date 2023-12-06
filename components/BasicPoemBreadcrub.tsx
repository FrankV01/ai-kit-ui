"use client";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import * as Icons from "react-bootstrap-icons";

export type BasicPoemBreadcrubProps = {
  poemTitle: string;
};

export default function BasicPoemBreadcrub(props: BasicPoemBreadcrubProps) {
  const poemTitle = props.poemTitle || "Viewing Poem";
  return (
    <Breadcrumb className={"text-center fw-bold"}>
      <Breadcrumb.Item title={"Go to Home Page"} href="/">
        <Icons.ArrowLeftCircleFill /> Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#" title={"Go to Home Page"} active>
        <Icons.EnvelopeOpenHeart />: {poemTitle}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}
