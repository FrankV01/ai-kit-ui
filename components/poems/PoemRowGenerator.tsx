import { Col } from "react-bootstrap";
import PoemCard, { PoemCardType, RotationType } from "./PoemCard";
import { useMemo, useState } from "react";
import MessageCard from "./MessageCard";

type PoemRowGeneratorProps = {};

// New component here. Simpliest way.  Then we can contain
//  the state there and pass it where we need it. This way, i
// can maintain the original thought/design.
export const PoemRowGenerator = ({}: PoemRowGeneratorProps) => {
  //Need a place to put the new poem data.
  // Need the handler to get the new poem and add it to the list.
  const [generatedPoemIds, setGeneratedPoemIds] = useState<number[]>([]);

  const newPoemCards = useMemo(() => {
    // generatedPoemIds === 0 or 1 then add placeholder
    const cards = generatedPoemIds.map((poemId) => (
      <Col key={`PoemCardDisplay-${poemId}`} xs={12} md={4} lg={4}>
        <PoemCard
          cardType={PoemCardType.PoemCard}
          id={poemId}
          rotation={RotationType.Left}
        />
      </Col>
    ));
    const cardStartingLength = cards.length;
    if (cardStartingLength === 0) {
      cards.push(<MessageCard key={`gen-card-0`} messageIndex={0} />);
      cards.push(<MessageCard key={`gen-card-1`} messageIndex={1} />);
    }
    if (cardStartingLength === 1) {
      cards.push(<MessageCard messageIndex={1} key={`gen-card-1`} />);
    }
    if (cards.length !== 2) {
      console.warn("incorrect number of cards", cards.length, cards);
    }
    return cards;
  }, [generatedPoemIds]);

  return (
    <>
      <Col
        key={`PoemCardDisplay-generator-2`}
        role={"PoemRowGenerator"}
        xs={12}
        md={4}
        lg={4}
      >
        <PoemCard
          rotation={RotationType.Right}
          cardType={PoemCardType.NewPoemButtonCard}
          newPoem={{
            onCreatePoem: (poemId: number) => {
              if (!poemId)
                throw new Error(
                  "poemId is undefined and required for PoemCardType.NewPoemButtonCard",
                );

              setGeneratedPoemIds((prev) => {
                const newVal = Array.from(new Set([...prev, poemId]));
                setGeneratedPoemIds(newVal);
                return newVal;
              });
            },
          }}
        />
      </Col>
      {newPoemCards}
    </>
  );
};
export default PoemRowGenerator;
