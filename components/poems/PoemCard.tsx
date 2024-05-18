"use client";
import React, { useCallback, useEffect } from "react";
import { getPoemById } from "../../lib/api/ApiActions";
import Link from "next/link";
import * as Icons from "react-bootstrap-icons";
import PoemLoading from "./PoemLoading";
import SafeMarkdownToHtml from "../../lib/SafeMarkdownToHtml";
import { useInterval } from "usehooks-ts";
import { useSession } from "next-auth/react";
import CreatePoemButton from "./CreatePoemButton";
import { ISessionlessResponse } from "../../lib/Types";

export enum PoemCardType {
  PoemCard,
  NewPoemButtonCard,
  PlaceholderCard,
}
export enum RotationType {
  None,
  Right,
  Left,
}

export type PoemCardProps = {
  id?: number;
  cardType?: PoemCardType;
  rotation?: RotationType;
  newPoem?: {
    onCreatePoem: (poemId: number) => void;
  };
  placeholder?: {
    title: string;
    body: string;
  };
};
const fancyHeader = {
  textShadow: "1px 1px 1px black",
  fontFamily: "Arial, sans-serif",
  fontWeight: "bold",
  color: "#3a3a3a",
  fontSize: "1.4em",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const cardStyle = { height: "400px" };
const rotateRightStyle = {
  transform: "rotate(1deg)",
};
const rotateLeftStyle = {
  transform: "rotate(-1deg)",
};

export default function PoemCard({
  id,
  cardType,
  rotation,
  placeholder,
  newPoem,
}: PoemCardProps) {
  rotation = rotation || RotationType.None;
  const [data, setData] = React.useState<ISessionlessResponse>(
    {} as ISessionlessResponse,
  );

  cardType = cardType || PoemCardType.PoemCard;
  const [loading, setLoading] = React.useState<boolean>(true);
  const { data: session } = useSession();
  const refreshData = useCallback(() => {
    if (cardType !== PoemCardType.PoemCard) {
      setLoading(false);
      return;
    }
    if (!id)
      throw new Error("id is undefined and required for PoemCardType.PoemCard");
    getPoemById(id)
      .then((poem) => {
        setData(poem);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.error(`an error occurred during getPoemById for ${id}`);
        console.error(err);
      });
  }, [id, cardType]);

  useInterval(refreshData, 60000);
  useEffect(() => {
    refreshData();
  }, [id, refreshData]);

  if (loading)
    return (
      <div data-testid={"loading-notif"}>
        <PoemLoading id={789} />
      </div>
    );

  if (cardType === PoemCardType.NewPoemButtonCard) {
  }
  if (cardType === PoemCardType.PlaceholderCard) {
  }

  // Under_Dev I'm not sure what the placeholder should look like yet. Should it just be
  //  blank or should it have the placeholder text? That could be misleading...
  //  Oh! It could be a "message card" for a static message. Then I could put the welcome or introduction
  //  message there.
  const isPlaceholder = cardType === PoemCardType.PlaceholderCard;
  const isNewPoemButton = cardType === PoemCardType.NewPoemButtonCard;
  const isPoemCard = cardType === PoemCardType.PoemCard;
  const styles =
    rotation === RotationType.None
      ? cardStyle
      : rotation === RotationType.Right
        ? { ...cardStyle, ...rotateRightStyle }
        : { ...cardStyle, ...rotateLeftStyle };

  return (
    <div
      key={`PoemCardDisplay-${data.id}-item`}
      style={styles}
      className={
        "card bg-light text-dark border-dark my-2 my-lg-3 my-md-2 p-0 shadow overflow-hidden"
      }
    >
      <div
        style={{ height: "auto" }}
        className={"card-body overflow-hidden p-0 m-0"}
      >
        {isPoemCard ? (
          <>
            <div className={"card-title"}>
              <div className={"p-1"}>
                <Link
                  key={`Link-${data.id}-title`}
                  className={"link-dark"}
                  href={`/poem/${data.id}`}
                >
                  {data?.title || "loading"}
                </Link>
                <Link
                  key={`Link-${data.id}-2`}
                  className={"link-secondary float-end pe-2"}
                  href={`/poem/${data.id}`}
                >
                  <Icons.ArrowRightCircleFill size={"1.1rem"} />
                </Link>
              </div>
            </div>

            <div
              className={"card-text overflow-hidden p-1 m-1"}
              dangerouslySetInnerHTML={{
                __html: SafeMarkdownToHtml(data.response),
              }}
            />
          </>
        ) : (
          <>
            {isPlaceholder ? (
              <>
                <div className={"card-title"}>
                  <div className={"p-1 mb-3"} style={fancyHeader}>
                    {placeholder?.title ? placeholder?.title : "-"}
                  </div>
                </div>
                <div className={"card-text overflow-hidden p-1 m-1"}>
                  {placeholder?.body ? placeholder?.body : "-"}
                </div>
              </>
            ) : (
              <>
                <div className={"card-title"}>
                  <div className={"p-1 mb-3"} style={fancyHeader}>
                    Generate a new Poem
                  </div>
                </div>
                <div
                  className={" p-auto m-auto"}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CreatePoemButton
                    onCreatePoem={(poemId: number) => {
                      if (!newPoem || !newPoem.onCreatePoem)
                        throw new Error(
                          "newPoem.onCreatePoem is required and not provided",
                        );
                      newPoem.onCreatePoem(poemId);
                    }}
                  />
                </div>
              </>
            )}
          </>
        )}
      </div>
      {isPoemCard ? (
        <div className={"card-footer bottom small text-muted "}>
          {session?.user?.email && (
            <span>Training Rating: {data.internalTrainingRating}</span>
          )}
          <span className={"float-end"}>
            <Link className={"link-secondary me-0 "} href={`/poem/${data.id}`}>
              View...
            </Link>
          </span>
        </div>
      ) : (
        <div className={"card-footer bottom small text-muted "}>
          <span className={"float-end"}>
            <span className={"text-secondary me-0 "} aria-disabled={"true"}>
              View...
            </span>
          </span>
        </div>
      )}
    </div>
  );
}
