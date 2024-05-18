"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useDebounce } from "usehooks-ts";
import { allowedEmails, setPoemRating } from "../../lib/api/ApiActions";
import * as Icons from "react-bootstrap-icons";
import { ISessionlessResponse } from "../../lib/Types";

type PoemRowProps = {
  poemId: number;
  poemData?: ISessionlessResponse;
};

export function PoemRatingWidget({ poemId, poemData }: PoemRowProps) {
  // Two things.
  //  We need to get the current rating and display one UI.
  // If not rating, display the Range control.
  const { data: session } = useSession();
  const [poemDetails, setPoemDetails] = useState<
    ISessionlessResponse | undefined
  >(poemData);
  const [currentRating, setCurrentRating] = useState<number>(0);
  const debouncedCurrentRating = useDebounce<number>(currentRating, 1000);
  const [saving, setSaving] = useState<boolean>(false);
  const [allowed, setAllowed] = useState<boolean>(false);

  useEffect(() => {
    allowedEmails().then((emails) => {
      const email = session?.user?.email || "";
      setAllowed(emails.has(email));
    });
  }, [session]);
  useEffect(() => {
    if (poemData) {
      setCurrentRating(poemData.internalTrainingRating * 10);
      setPoemDetails(poemData);
    }
  }, [poemData]);
  useEffect(() => {
    if (!debouncedCurrentRating) return;
    const normalizedRating = Math.round(debouncedCurrentRating / 10);
    if (poemData?.internalTrainingRating === normalizedRating) return; //Unchanged
    setSaving(true);

    setPoemRating(poemId, normalizedRating)
      .then(() => {
        if (poemData?.internalTrainingRating) {
          poemData.internalTrainingRating = normalizedRating;
        }
      })
      .catch((er) => {
        console.error("Error during saving");
        console.error(er);
      })
      .finally(() => {
        setSaving(false);
      });
  }, [debouncedCurrentRating, poemId, poemData]);

  if (!session || !session?.user) return <></>; //hide if not logged in.
  if (!allowed)
    return (
      <div className={"mt-4"}>
        <h5 className={"text-body-secondary"}>Current Rating</h5>
        <div className={"text-info-emphasis"}>
          {poemDetails?.internalTrainingRating}
        </div>
      </div>
    );
  return (
    <form className={"mt-4"}>
      <div className="form-group" id="toRate">
        <label>
          <h5 className={"text-body-secondary"}>
            Change the Rating{" "}
            {saving && (
              <strong>
                <Icons.SaveFill />
              </strong>
            )}
          </h5>
        </label>
        <input
          type="range"
          className="form-range"
          value={currentRating}
          onChange={(e) => {
            const rating = parseInt(e.target.value);
            setCurrentRating(rating);
          }}
        />
      </div>
    </form>
  );
}

export default PoemRatingWidget;
