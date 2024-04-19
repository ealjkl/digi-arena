// type CardPickerControllerProps = {

import { useState } from "react";
import { CardPickerView } from "./CardPicker";
import { getRandomFromArray } from "../utils/random";
import { useAllCardsContext } from "../context/AllCardsContext";
import { Card, DeckCard } from "../types/card";
import DeckView from "./DeckView";

type CardTriplet = [Card, Card, Card];
type Deck = {
  [key: string]: DeckCard;
};
export function CardPickerController() {
  const allCards = useAllCardsContext();
  const [cards, setCards] = useState(() => {
    return getRandomFromArray(allCards, 3) as CardTriplet;
  });
  const [deck, setDeck] = useState<Deck>({});

  return (
    <div>
      <CardPickerView
        cards={cards}
        onClick={(card) => {
          const newCards = getRandomFromArray(allCards, 3) as CardTriplet;
          setDeck((deck) => {
            const prevCount = deck[card.cardnumber]?.count ?? 0;
            return {
              ...deck,
              [card.cardnumber]: { card, count: prevCount + 1 },
            };
          });
          setCards(newCards);
        }}
      />
      <DeckView deck={deck} />
    </div>
  );
}
