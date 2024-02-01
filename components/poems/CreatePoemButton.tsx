import { Button } from "react-bootstrap";
import { requestPoem } from "../../lib/ApiActions";
import { useState } from "react";

type CreatePoemButtonProps = {
  onCreatePoem: (poemId: number) => void;
};

export const CreatePoemButton = ({ onCreatePoem }: CreatePoemButtonProps) => {
  const [havePoem, setHavePoem] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  return (
    <>
      <Button
        onClick={() => {
          requestPoem()
            .then((poemData) => {
              onCreatePoem(poemData.id);
              setHavePoem(true);
            })
            .catch((err) => {
              setHavePoem(true);
              setError("error occurred during poem creation");
            });
        }}
        variant="primary"
      >
        Create Poem
      </Button>
      <div>{error}</div>
    </>
  );
};
export default CreatePoemButton;
