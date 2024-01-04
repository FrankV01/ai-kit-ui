"use client"; // I just added this.
import React, { useState, useEffect } from "react";
import { getPoemById, getPoemIdList } from "../../lib/ApiActions";
import PoemResponse from "../../types/PoemResponse";
import { Card } from "react-bootstrap";
import Link from "next/link";
import * as Icons from "react-bootstrap-icons";
import Placeholder from "react-bootstrap/Placeholder";

export type PoemCardProps = {
  id: number;
};

function PoemLoading({ id }: { id: number }) {
  return (
    <Card
      bg={"light"}
      text={"dark"}
      border={"dark"}
      key={`PoemCardDisplay-PoemLoading-${id}-item`}
      style={{ height: "400px" }}
      className={"my-2 my-lg-3 my-md-2 p-0 shadow"}
    >
      <Card.Body>
        <Card.Title>
          <div className={"p-1"}>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder size={"sm"} />
            </Placeholder>
          </div>
        </Card.Title>
        <Card.Text>
          <Placeholder as={Card.Body} animation="glow">
            <Placeholder size={"lg"} />
          </Placeholder>
        </Card.Text>
        <Card.Footer className={"bottom small text-muted text-end"}>
          <Placeholder as={Card.Footer} animation="glow">
            <Placeholder size={"xs"} />
          </Placeholder>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

let i = 0;
export default function PoemCard({ id }: PoemCardProps) {
  const [data, setData] = React.useState<PoemResponse>({} as PoemResponse);
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
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
  }, []);

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
      <Card.Body>
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

        <Card.Text className={"overflow-hidden"}>
          <div
            dangerouslySetInnerHTML={{
              __html: data.poem,
            }}
          />
        </Card.Text>
        <Card.Footer className={"bottom small text-muted text-end"}>
          <Link className={"link-secondary me-0"} href={`/poem/${data.id}`}>
            View...
          </Link>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
