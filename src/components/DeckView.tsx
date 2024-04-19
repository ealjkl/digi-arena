import { Card } from "../types/card";
import { CardView } from "./CardView";
import "../styles/DeckView.scss";

type DeckViewProps = {
  deck: Card[];
};

export default function DeckView({ deck }: DeckViewProps) {
  return (
    <div className="deck-view">
      {deck.map((card) => (
        <div className="card-wrapper" key={card.cardnumber}>
          <div className="card-counter">
            <p>1</p>
          </div>
          <CardView card={card} />
        </div>
      ))}
    </div>
  );
}
