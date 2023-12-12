"use server";

import PoemPromptForm from "../../../components/PoemPromptForm";
import FormContainer from "../../../components/FormContainer";

type ICreatePageProps = { params: {} };
import { queueRequest } from "../../../lib/ApiActions";

export default async function Page({ params }: ICreatePageProps) {
  // async function queueRequest(formData: FormData) {
  //   "use server";
  //   console.log("queueRequest", formData);
  //   const rawFormData = {
  //     email: formData.get("email"),
  //     prompt: formData.get("prompt"),
  //   };
  //   console.log("queueRequest", rawFormData);
  // }

  // Move Container, Col and Row to be in a client componetn?
  // It seems Next.js doesn't work with react-bootstrap. Not server
  //side.
  return (
    <FormContainer>
      <PoemPromptForm action={queueRequest} />
    </FormContainer>
  );
}
