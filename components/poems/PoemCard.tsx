"use client";
import React, { useCallback, useEffect } from "react";
import { getPoemById } from "../../lib/ApiActions";
import { ISessionlessResponse } from "../../types/ISessionlessResponse";
import { Card } from "react-bootstrap";
import Link from "next/link";
import * as Icons from "react-bootstrap-icons";
import PoemLoading from "./PoemLoading";
import SafeMarkdownToHtml from "../../lib/SafeMarkdownToHtml";
import { useInterval } from "usehooks-ts";
import { useSession } from "next-auth/react";

export enum PoemCardType {
  PoemCard,
  NewPoemButtonCard,
  PlaceholderCard,
}

export type PoemCardProps = {
  id: number;
  cardType?: PoemCardType;
};

export default function PoemCard({ id, cardType }: PoemCardProps) {
  const [data, setData] = React.useState<ISessionlessResponse>(
    {} as ISessionlessResponse,
  );
  cardType = cardType || PoemCardType.PoemCard;
  const [loading, setLoading] = React.useState<boolean>(true);
  const { data: session } = useSession();
  const refreshData = useCallback(() => {
    if (cardType !== PoemCardType.PoemCard) return;
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
  }, [id]);

  useInterval(refreshData, 60000);
  useEffect(() => {
    refreshData();
  }, [id, refreshData]);

  if (loading)
    return (
      <div>
        <PoemLoading id={id} />
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

  return (
    <Card
      bg={"light"}
      text={"dark"}
      border={"dark"}
      key={`PoemCardDisplay-${data.id}-item`}
      style={{ height: "400px" }}
      className={"my-2 my-lg-3 my-md-2 p-0 shadow overflow-hidden"}
    >
      <Card.Body
        style={{ height: "auto" }}
        className={"overflow-hidden p-0 m-0"}
      >
        {isPoemCard ? (
          <>
            <Card.Title>
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
            </Card.Title>

            <Card.Text
              as={"div"}
              className={"overflow-hidden p-1 m-1"}
              dangerouslySetInnerHTML={{
                __html: SafeMarkdownToHtml(data.response),
              }}
            />
          </>
        ) : (
          <>
            isPlaceholder ? <Card.Title>Placeholder</Card.Title> :{" "}
            <>
              <Card.Title>
                <div className={"p-1"}>isNewPoemButton title</div>
              </Card.Title>

              <Card.Text as={"div"} className={"overflow-hidden p-1 m-1"}>
                <div>Under Development</div>
              </Card.Text>
            </>
          </>
        )}
      </Card.Body>
      {isPoemCard ? (
        <Card.Footer className={"bottom small text-muted "}>
          {session?.user?.email && (
            <span>Training Rating: {data.internalTrainingRating}</span>
          )}
          <span className={"float-end"}>
            <Link className={"link-secondary me-0 "} href={`/poem/${data.id}`}>
              View...
            </Link>
          </span>
        </Card.Footer>
      ) : (
        <Card.Footer className={"bottom small text-muted "}> </Card.Footer>
      )}
    </Card>
  );
}
