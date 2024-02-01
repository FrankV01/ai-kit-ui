import { Row } from "react-bootstrap";
import PoemColumn from "./PoemColumn";

type PoemRowProps = {
  poemIds: number[];
};

export function PoemRow({ poemIds }: PoemRowProps) {
  const id1 = poemIds[0];
  const id2 = poemIds[1] ? poemIds[1] : undefined;
  const id3 = poemIds[2] ? poemIds[2] : undefined;

  return (
    <Row key={`PoemCardDisplay-${id1}-${id2 ?? "NA"}-${id3 ?? "NA"}`}>
      <PoemColumn poemId1={id1} poemId2={id2} poemId3={id3} isPoemCol={true} />
    </Row>
  );
}

export default PoemRow;
