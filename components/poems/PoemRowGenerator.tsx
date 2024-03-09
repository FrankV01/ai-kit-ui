import { Col } from "react-bootstrap";
import PoemCard, { PoemCardType } from "./PoemCard";
import { useMemo, useState } from "react";

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
        <PoemCard cardType={PoemCardType.PoemCard} id={poemId} />
      </Col>
    ));
    const cardStartingLength = cards.length;
    const GenCard = (prop: { idx: number }) => (
      <Col
        key={`PoemCardDisplay-placeholder-${prop.idx}`}
        xs={12}
        md={4}
        lg={4}
      >
        <PoemCard
          cardType={PoemCardType.PlaceholderCard}
          placeholder={{
            title: prop.idx === 0 ? "Welcome" : "Glad you are here",
            body:
              prop.idx === 0
                ? "Welcome to the site.  We are glad you are here.  Please feel free to look around and enjoy the poems."
                : "Thanks for visiting. Revisions are consistently coming and although changes sometimes slow down, be assured that things are progressing. This isn't a commercial endeavor and the content may reflect that; please bear this in mind as you use & read the site.",
          }}
        />
      </Col>
    );
    if (cardStartingLength === 0) {
      cards.push(<GenCard key={`gen-card-0`} idx={0} />);
      cards.push(<GenCard key={`gen-card-1`} idx={1} />);
    }
    if (cardStartingLength === 1) {
      cards.push(<GenCard idx={1} key={`gen-card-1`} />);
    }
    if (cards.length !== 2) {
      console.warn("incorrect number of cards", cards.length, cards);
    }
    return cards;
  }, [generatedPoemIds]);

  return (
    <>
      <Col key={`PoemCardDisplay-generator-2`} xs={12} md={4} lg={4}>
        <PoemCard
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
