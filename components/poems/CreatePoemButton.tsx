import { Button } from "react-bootstrap";
import { requestPoem } from "../../lib/ApiActions";
import { useState } from "react";

export const CreatePoemButton = () => {
  const [poem, setPoem] = useState<string>("");

  return (
    <>
      <Button
        onClick={() => {
          requestPoem()
            .then((poemData) => {
              setPoem(poemData.message);
            })
            .catch((err) => {
              setPoem(`Sorry. An error occurred.`);
            });
        }}
        variant="primary"
      >
        Create Poem
      </Button>
      <div>{poem && <p>{poem}</p>}</div>
    </>
  );
};
export default CreatePoemButton;
