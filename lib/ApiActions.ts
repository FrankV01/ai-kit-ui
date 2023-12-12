"use server";

export async function queueRequest(formData: FormData) {
  console.log("queueRequest", formData);
  const rawFormData = {
    email: formData.get("email"),
    prompt: formData.get("prompt"),
  };
  console.log("queueRequest", rawFormData);
}
