import { Col } from "react-bootstrap";
import dynamic from "next/dynamic";
const PoemCard = dynamic(() => import("./PoemCard"), { ssr: false });

export type PoemColumnProps = {
  poemId1: number;
  poemId2?: number;
  poemId3?: number;
};

export default function PoemColumn({
  poemId1,
  poemId2,
  poemId3,
}: PoemColumnProps) {
  return (
    <>
      <Col
        key={`PoemCardDisplay-${poemId1}-${poemId2}-${poemId3}`}
        xs={12}
        md={4}
        lg={4}
      >
        <PoemCard id={poemId1} />
      </Col>
      <Col
        key={`PoemCardDisplay-${poemId1}-${poemId2}-${poemId3}`}
        xs={12}
        md={4}
        lg={4}
      >
        {poemId2 && <PoemCard id={poemId2} />}
      </Col>
      <Col
        key={`PoemCardDisplay-${poemId1}-${poemId2}-${poemId3}`}
        xs={12}
        md={4}
        lg={4}
      >
        {poemId3 && <PoemCard id={poemId3} />}
      </Col>
    </>
  );
}
