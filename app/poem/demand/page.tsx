"use server";
import { PoemDemandInfo } from "../../../components/poems/PoemDemandInfo";
import { PoemDemandForm } from "../../../components/poems/PoemDemandForm";

type IDemandPageParams = { params: {} };

export default async function Page({ params }: IDemandPageParams) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-1"></div>
        <div className="col-lg-6 col-md-10 col-sm-12">
          <h3>Poem upon Request</h3>
          <div>
            <PoemDemandInfo />
          </div>
          <div>
            <PoemDemandForm />
          </div>
        </div>
        <div className="col-lg-3 col-md-1"></div>
      </div>
    </div>
  );
}
