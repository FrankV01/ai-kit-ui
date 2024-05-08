"use client";
import { Button } from "react-bootstrap";
import { requestPoem } from "../../lib/api/ApiActions";
import { useState } from "react";

type CreatePoemButtonProps = {
  onCreatePoem: (poemId: number) => void;
};

export const CreatePoemButton = ({ onCreatePoem }: CreatePoemButtonProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  return (
    <>
      <Button
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
        variant="primary"
        size={"lg"}
        className={"m-auto p-auto btn btn-block"}
        disabled={loading}
      >
        {loading ? "Creating..." : "Create Poem"}
      </Button>
      <div>{error}</div>
    </>
  );
};
export default CreatePoemButton;
