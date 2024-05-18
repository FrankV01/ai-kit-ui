import PoemCard, { PoemCardType, RotationType } from "./PoemCard";
import { useMemo, useState } from "react";
import PoemMessageCard from "./PoemMessageCard";

type PoemRowGeneratorProps = {};

export const PoemRowGenerator = ({}: PoemRowGeneratorProps) => {
  const [generatedPoemIds, setGeneratedPoemIds] = useState<number[]>([]);

  const newPoemCards = useMemo(() => {
    const cards = generatedPoemIds.map((poemId) => (
      <div
        key={`PoemCardDisplay-${poemId}`}
        className="col-12 col-md-4 col-lg-4"
      >
        <PoemCard
          cardType={PoemCardType.PoemCard}
          id={poemId}
          rotation={RotationType.Left}
        />
      </div>
    ));
    const cardStartingLength = cards.length;
    if (cardStartingLength === 0) {
      cards.push(<PoemMessageCard key={`gen-card-0`} messageIndex={0} />);
      cards.push(<PoemMessageCard key={`gen-card-1`} messageIndex={1} />);
    }
    if (cardStartingLength === 1) {
      cards.push(<PoemMessageCard messageIndex={1} key={`gen-card-1`} />);
    }
    if (cards.length !== 2) {
      console.warn("incorrect number of cards", cards.length, cards);
    }
    return cards;
  }, [generatedPoemIds]);
  return (
    <>
      <div
        key={`PoemCardDisplay-generator-2`}
        role={"PoemRowGenerator"}
        className="col-12 col-md-4 col-lg-4"
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
      </div>
      {newPoemCards}
    </>
  );
};
export default PoemRowGenerator;
