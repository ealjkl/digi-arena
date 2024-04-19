import { Card } from "../types/card";
import { CardView } from "./CardView";
import "../styles/CardPicker.scss"

type CardPickerViewProps = {
  cards: [Card, Card, Card];
  onClick?: (card: Card) => void;
};

export function CardPickerView({ cards, onClick }: CardPickerViewProps) {
  return (
    <div className="card-picker">
      {cards.map((card) => (
        <CardView card={card} key={card.cardnumber} onClick={onClick} />
      ))}
    </div>
  );
}
