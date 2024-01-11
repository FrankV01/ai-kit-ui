"use client";
import React, { useEffect } from "react";
import { getPoemById } from "../../lib/ApiActions";
import PoemResponse from "../../types/PoemResponse";
import { Card } from "react-bootstrap";
import Link from "next/link";
import * as Icons from "react-bootstrap-icons";
import PoemLoading from "./PoemLoading";
import SafeMarkdownToHtml from "../../lib/SafeMarkdownToHtml";
import { useInterval } from "usehooks-ts";
import { useSession } from "next-auth/react";

export type PoemCardProps = {
  id: number;
};

export default function PoemCard({ id }: PoemCardProps) {
  const [data, setData] = React.useState<PoemResponse>({} as PoemResponse);
  const [loading, setLoading] = React.useState<boolean>(true);
  const { data: session } = useSession();

  const refreshData = () => {
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
  };

  useInterval(refreshData, 5000 * 2);
  useEffect(() => {
    refreshData();
  }, [id]);

  if (loading)
    return (
      <div>
        <PoemLoading id={id} />
      </div>
    );

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
            __html: SafeMarkdownToHtml(data.poem),
          }}
        />
      </Card.Body>
      <Card.Footer className={"bottom small text-muted "}>
        {session?.user?.email && (
          <span>Training Rating: {data.useForTraining}</span>
        )}
        <span className={"float-end"}>
          <Link className={"link-secondary me-0 "} href={`/poem/${data.id}`}>
            View...
          </Link>
        </span>
      </Card.Footer>
    </Card>
  );
}
