"use client";
import * as Icons from "react-bootstrap-icons";

export type BasicPoemBreadcrubProps = {
  poemTitle: string;
};

export default function BasicPoemBreadcrub(props: BasicPoemBreadcrubProps) {
  const poemTitle = props.poemTitle || "Viewing Poem";
  return (
    <nav
      aria-label="breadcrumb"
      role={"breadcrumb"}
      className={"text-center fw-bold"}
    >
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a title={"Go to Home Page"} href="/">
            <Icons.ArrowLeftCircleFill /> Home
          </a>
        </li>
        <li
          className="breadcrumb-item active"
          role={"breadcrumb-item"}
          aria-current="page"
        >
          <span role={"contentinfo"} title={`Poem Title: ${poemTitle}`}>
            <Icons.EnvelopeOpenHeart />: {poemTitle}
          </span>
        </li>
      </ol>
    </nav>
  );
}
