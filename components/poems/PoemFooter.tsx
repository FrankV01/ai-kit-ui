import * as Icons from "react-bootstrap-icons";
import Author from "../common/Author";
import {
  IconGitHub,
  IconLinkedIn,
  IconTheOpenSourceUorg,
} from "../common/Icons";
import CCLicense from "../common/CCLicense";
import { AiThankYou } from "../common/quips/AiThankYou";

export default function PoemFooter() {
  return (
    <div className={"container m-auto p-auto py-5 mx-0"}>
      <div className={"row"}>
        <div
          className={
            "col-md-12 col-lg-4 ps-0 m-auto p-auto text-secondary fw-light"
          }
        >
          <p>
            Artificial Intelligence (AI) / Machine Learning (ML) created Poems.
          </p>
          <p>
            An AI-Science/Art experiment containing <em>Poems</em> created by
            machine learning models trained & maintained by{" "}
            <Author includeEmailLink={true} className={"link-secondary"} />
          </p>
          <AiThankYou />
        </div>
        <div
          className={"col-md-12 col-lg-4 fs-3 text-center m-auto p-auto pe-0"}
        >
          <div className={"m-auto text-center"}>
            <IconLinkedIn className={"mx-2"} />
            <IconGitHub className={"mx-2"} />
            <IconTheOpenSourceUorg className={"mx-2"} />
          </div>
        </div>
        <div
          className={
            "col-md-12 col-lg-4 m-auto-md mt-3 p-auto text-secondary small position-relative bottom-0 end-0 text-lg-end"
          }
        >
          <div>
            Made with <Icons.HeartFill /> by <Author includeEmailLink={false} />
          </div>

          <div>
            2023-2024 &copy; <Author includeEmailLink={false} />
          </div>
          <div>
            <CCLicense />
          </div>
        </div>
      </div>
    </div>
  );
}
