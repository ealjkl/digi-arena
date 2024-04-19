// type CardPickerControllerProps = {

import { useState } from "react";
import { CardPickerView } from "./CardPicker";
import { getRandomFromArray } from "../utils/random";
import { useAllCardsContext } from "../context/AllCardsContext";
import { Card } from "../types/card";
import DeckView from "./DeckView";

type CardTriplet = [Card, Card, Card];
export function CardPickerController() {
  const allCards = useAllCardsContext();
  const [cards, setCards] = useState(() => {
    return getRandomFromArray(allCards, 3) as CardTriplet;
  });
  const [deck, setDeck] = useState<Card[]>([]) 
  
  return (
    <div>
      <CardPickerView
        cards={cards}
        onClick={(card) => {
          const newCards = getRandomFromArray(allCards, 3) as CardTriplet;
          setDeck((deck) => [...deck, card])
          setCards(newCards);
        }}
      />
      <DeckView deck={deck}/>
    </div>
  );
}
