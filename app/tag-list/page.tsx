import Link from "next/link";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
const url = process.env.API_URL ? `${process.env.API_URL}/tags` : ""; //"http://localhost:3001/poems";

type TagsResponse = { id: number; tag: string };

export const dynamic = "force-dynamic";

async function getData(): Promise<TagsResponse[]> {
  if (!url) {
    throw new Error("Invalid environment configs");
  }
  console.log(`Fetching data from ${url}`);
  const res = await fetch(url, {
    cache: "no-cache",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log(`Failed to fetch data from ${url}`);
    throw new Error("Failed to fetch data"); //Stupid fucking error boundry.
  }
  const s1 = (await res.json()) as TagsResponse[];
  return s1;
}

export default async function Page() {
  const results = await getData();
  return (
    <div key={`tag-list-div`}>
      <Container>
        <Row>
          <Col md={12} className={""}>
            <h3>Tags List</h3>
            <ListGroup className={"flex-wrap flex-fill m-0"} horizontal={"lg"}>
              {results.map((itm) => (
                <ListGroupItem
                  key={`tag-list-div-${itm.id}`}
                  className={"m-0"}
                  variant={"primary"}
                >
                  <Link
                    href={`/poem/tag/${encodeURIComponent(itm.tag)}`}
                    key={`tag-list-${itm.id}`}
                    className={"m-0"}
                  >
                    {itm.tag}
                  </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
