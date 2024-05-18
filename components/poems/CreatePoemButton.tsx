"use client";
import { useState } from "react";
import { requestPoem } from "../../lib/api/ApiActions";

type CreatePoemButtonProps = {
  onCreatePoem: (poemId: number) => void;
};

export const CreatePoemButton = ({ onCreatePoem }: CreatePoemButtonProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  return (
    <>
      <button
        onClick={() => {
          setLoading(true);
          requestPoem()
            .then((poemData) => {
              onCreatePoem(poemData.id);
              setLoading(false);
            })
            .catch((err) => {
              setLoading(false);
              setError("error occurred during poem creation");
            });
        }}
        className={"btn btn-primary btn-lg m-auto p-auto btn-block"}
        disabled={loading}
      >
        {loading ? "Creating..." : "Create Poem"}
      </button>
      <div>{error}</div>
    </>
  );
};
export default CreatePoemButton;
