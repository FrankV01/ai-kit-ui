"use server";

type ICreatePageProps = { params: {} };

import { PoemPromptInfo } from "../../../components/poems/PoemPromptInfo";
import PoemSubmissionNotice from "../../../components/poems/PoemSubmissionNotice";
import PoemPromptForm from "../../../components/poems/stateful/PoemPromptForm";

export default async function Page({ params }: ICreatePageProps) {
  return (
    <div className="container w-50">
      <div className="col-lg-3" />
      <div className="col">
        <div className="row">
          <h3>Request a Poem via Prompt</h3>
          <div>
            <PoemPromptInfo />
            <PoemSubmissionNotice />
          </div>
          <div>
            <PoemPromptForm />
          </div>
        </div>
      </div>
    </div>
  );
}
