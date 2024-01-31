import Link from "next/link";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { getTagListData } from "../../lib/ApiActions";
const url = process.env.API_URL ? `${process.env.API_URL}/tags/serverless` : "";

export const dynamic = "force-dynamic";

export default async function Page() {
  const results = await getTagListData();
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
