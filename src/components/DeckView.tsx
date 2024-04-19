import { DeckCard } from "../types/card";
import { CardView } from "./CardView";
import "../styles/DeckView.scss";
import CounterWrapper from "./CounterWrapper";

type DeckViewProps = {
  deck: { [key: string]: DeckCard };
};

export default function DeckView({ deck }: DeckViewProps) {
  return (
    <div className="deck-view">
      {Object.values(deck).map(({ card, count }) => (
        <CounterWrapper key={card.cardnumber} count={count}>
          <CardView card={card} />
        </CounterWrapper>
      ))}
    </div>
  );
}
