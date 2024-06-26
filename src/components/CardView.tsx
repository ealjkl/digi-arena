import { getCardImageUrl } from "../utils/getCardImageUrl";
import type { Card } from "../types/card";
import "../styles/CardView.scss";

type CardViewProps = {
  card: Card;
  onClick?: (card: Card) => void;
};

export function CardView({ card, onClick }: CardViewProps) {
  return (
    <div
      className="card-view"
      onClick={() => {
        onClick && onClick(card);
      }}
    >
      <img
        src={getCardImageUrl(card.cardnumber)}
        alt={`The card ${card.cardnumber}`}
      />
    </div>
  );
}
