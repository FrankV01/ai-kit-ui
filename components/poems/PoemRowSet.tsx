import { Col } from "react-bootstrap";
import dynamic from "next/dynamic";
import { PoemCardType, RotationType } from "./PoemCard";
import PoemRowGenerator from "./PoemRowGenerator";
const PoemCard = dynamic(() => import("./PoemCard"), { ssr: false });

export type PoemColumnProps = {
  poemId1: number;
  poemId2?: number;
  poemId3?: number;
  isPoemCol: boolean;
};

export default function PoemRowSet({
  poemId1,
  poemId2,
  poemId3,
  isPoemCol,
}: PoemColumnProps) {
  if (isPoemCol) {
    return (
      <>
        <Col key={`PoemCardDisplay-${poemId1}-1`} xs={12} md={4} lg={4}>
          <PoemCard
            id={poemId1}
            rotation={RotationType.Left}
            cardType={PoemCardType.PoemCard}
          />
        </Col>
        <Col key={`PoemCardDisplay-${poemId2}-2`} xs={12} md={4} lg={4}>
          {poemId2 && (
            <PoemCard
              id={poemId2}
              rotation={RotationType.Right}
              cardType={PoemCardType.PoemCard}
            />
          )}
        </Col>
        <Col key={`PoemCardDisplay-${poemId3}-3`} xs={12} md={4} lg={4}>
          {poemId3 && (
            <PoemCard
              id={poemId3}
              rotation={RotationType.Left}
              cardType={PoemCardType.PoemCard}
            />
          )}
        </Col>
      </>
    );
  } else {
    return <PoemRowGenerator />;
  }
}
