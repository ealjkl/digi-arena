export type Card = {
  cardnumber: string;
  name: string;
};

export type DeckCard = {
  card: Card;
  count: number;
};
