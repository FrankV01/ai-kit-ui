"use client";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import PoemResponse from "../../types/PoemResponse";
import { useDebounce } from "usehooks-ts";
import { setPoemRating } from "../../lib/ApiActions";

type PoemRowProps = {
  poemId: number;
  poemData?: PoemResponse;
};

const allowed = new Set([
  "jawzx01@gmail.com",
  "frank.villasenor@gmail.com",
  "frank@theOpenSourceU.org",
]);

export function PoemRatingWidget({ poemId, poemData }: PoemRowProps) {
  // Two things.
  //  We need to get the current rating and display one UI.
  // If not rating, display the Range control.
  const { data: session } = useSession();
  const [poemDetails, setPoemDetails] = useState<PoemResponse | undefined>(
    poemData,
  );
  const [currentRating, setCurrentRating] = useState<number>(0);
  const debouncedCurrentRating = useDebounce<number>(currentRating, 1000);
  const [saving, setSaving] = useState<boolean>(false);

  useEffect(() => {
    if (poemData) {
      setCurrentRating(poemData.useForTraining * 10);
    }
  }, [poemData]);
  useEffect(() => {
    if (!debouncedCurrentRating) return;

    const normalizedRating = Math.round(debouncedCurrentRating / 10);
    if (poemData?.useForTraining === normalizedRating) return; //Unchanged
    setSaving(true);

    console.log("normalizedRating", poemId, normalizedRating);
    setPoemRating(poemId, normalizedRating)
      .then(() => {
        if (poemData?.useForTraining) {
          poemData.useForTraining = normalizedRating;
        }
        setSaving(false);
      })
      .catch((er) => {
        console.error("Error during saving");
        console.error(er);
        setSaving(false);
      });
  }, [debouncedCurrentRating]);

  if (!session || !session?.user) return <></>; //hide if not logged in.
  const email = session?.user?.email || "";
  if (!allowed.has(email))
    return (
      <div className={"mt-4"}>
        <h5 className={"text-body-secondary"}>Current Rating</h5>
        <div className={"text-info-emphasis"}>
          {poemDetails?.useForTraining}
        </div>
      </div>
    );
  return (
    <Form className={"mt-4"}>
      <Form.Group controlId="toRate">
        <Form.Label>
          <h5 className={"text-body-secondary"}>
            Change the Rating {saving && <strong>saving</strong>}
          </h5>
        </Form.Label>
        <Form.Range
          value={currentRating}
          onChange={(e) => {
            const rating = parseInt(e.target.value);
            setCurrentRating(rating);
          }}
        />
      </Form.Group>
    </Form>
  );
}

export default PoemRatingWidget;
