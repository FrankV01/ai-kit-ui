import { Col } from "react-bootstrap";
import dynamic from "next/dynamic";
import { PoemCardType } from "./PoemCard";
const PoemCard = dynamic(() => import("./PoemCard"), { ssr: false });

export type PoemColumnProps = {
  poemId1: number;
  poemId2?: number;
  poemId3?: number;
  isPoemCol: boolean;
};

export default function PoemColumn({
  poemId1,
  poemId2,
  poemId3,
  isPoemCol,
}: PoemColumnProps) {
  if (isPoemCol) {
    return (
      <>
        <Col key={`PoemCardDisplay-${poemId1}-1`} xs={12} md={4} lg={4}>
          <PoemCard id={poemId1} cardType={PoemCardType.PoemCard} />
        </Col>
        <Col key={`PoemCardDisplay-${poemId2}-2`} xs={12} md={4} lg={4}>
          {poemId2 && (
            <PoemCard id={poemId2} cardType={PoemCardType.PoemCard} />
          )}
        </Col>
        <Col key={`PoemCardDisplay-${poemId3}-3`} xs={12} md={4} lg={4}>
          {poemId3 && (
            <PoemCard id={poemId3} cardType={PoemCardType.PoemCard} />
          )}
        </Col>
      </>
    );
  } else {
    return (
      <>
        <Col key={`PoemCardDisplay-${poemId1}-1`} xs={12} md={4} lg={4}>
          <PoemCard
            cardType={PoemCardType.PlaceholderCard}
            placeholder={{
              title: "Welcome",
              body: "This site has been undergoing major surgery although that has mostly been on the backend. ",
            }}
          />
        </Col>
        <Col key={`PoemCardDisplay-${poemId2}-2`} xs={12} md={4} lg={4}>
          <PoemCard cardType={PoemCardType.NewPoemButtonCard} />
        </Col>
        <Col key={`PoemCardDisplay-${poemId3}-3`} xs={12} md={4} lg={4}>
          <PoemCard
            cardType={PoemCardType.PlaceholderCard}
            placeholder={{
              title: "Create a poem on demand",
              body: "See our AI model work in real time.",
            }}
          />
        </Col>
      </>
    );
  }
}
