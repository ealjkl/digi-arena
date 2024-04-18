import { Card } from "../types/card";
import { CardView } from "./CardView";

type CardPickerViewProps = {
  cards: [Card, Card, Card];
  onClick?: (card: Card) => void;
};

export function CardPickerView({ cards, onClick }: CardPickerViewProps) {
  return (
    <div>
      {cards.map((card) => (
        <CardView card={card} key={card.cardnumber} onClick={onClick} />
      ))}
    </div>
  );
}
