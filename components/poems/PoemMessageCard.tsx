import PoemCard, { PoemCardType, RotationType } from "./PoemCard";
import { Col } from "react-bootstrap";

type MessageCardProps = {
  messageIndex: 0 | 1;
};

const validIndexes = [0, 1];

export const PoemMessageCard = ({ messageIndex }: MessageCardProps) => {
  if (!validIndexes.includes(messageIndex)) {
    throw new Error("Invalid message index");
  }
  return (
    <Col
      key={`PoemCardDisplay-placeholder-${messageIndex}`}
      xs={12}
      md={4}
      lg={4}
    >
      <PoemCard
        rotation={messageIndex === 0 ? RotationType.Left : RotationType.Right}
        cardType={PoemCardType.PlaceholderCard}
        placeholder={{
          title: messageIndex === 0 ? "Welcome" : "Glad you are here",
          body:
            messageIndex === 0
              ? "Welcome to the site.  We are glad you are here.  Please feel free to look around and enjoy the poems."
              : "Thanks for visiting. Revisions are consistently coming and although changes sometimes slow down, be assured that things are progressing. This isn't a commercial endeavor and the content may reflect that; please bear this in mind as you use & read the site.",
        }}
      />
    </Col>
  );
};

export default PoemMessageCard;
