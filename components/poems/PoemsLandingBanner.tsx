import Author from "../common/Author";
import PoemsImageRotate from "./PoemsImageRotate";
const space: string = " ";

function PoemsLandingBanner() {
  return (
    <div className={"container mb-3"}>
      <div className={"row"}>
        <div className={"col-xl-7 col-lg-7 col-md-5"}>
          <div className={"mt-5 pt-5"}>
            <h1>
              Artificial Intelligence{space}
              <span className={"text-secondary"}>(AI)</span> / Machine Learning
              {space}
              <span className={"text-secondary"}>(ML)</span> based Poems.
            </h1>
            <p className="lead">
              An AI-Science/Art experiment containing <em>Poems</em> created by
              machine learning models trained & maintained by
              {space}
              <Author includeEmailLink={true} />!
            </p>
          </div>
        </div>
        <div className={"col-xl-5 col-lg-5 col-md-7 me-0 pe-0"}>
          <PoemsImageRotate />
        </div>
      </div>
    </div>
  );
}
export default PoemsLandingBanner;
