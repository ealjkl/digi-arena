// type CardPickerControllerProps = {

import { useContext, useState } from "react";
import { CardPickerView } from "./CardPicker";
import { getRandomFromArray } from "../utils/random";
import {
  AllCardsContext,
  useAllCardsContext,
} from "../context/AllCardsContext";
import { Card } from "../types/card";

type CardTriplet = [Card, Card, Card];
export function CardPickerController() {
  const allCards = useAllCardsContext();
  const [cards, setCards] = useState(() => {
    return getRandomFromArray(allCards, 3) as CardTriplet;
  });

  return (
    <div>
      <CardPickerView
        cards={cards}
        onClick={(card) => {
          const newCards = getRandomFromArray(allCards, 3) as CardTriplet;
          setCards(newCards);
        }}
      />
    </div>
  );
}
