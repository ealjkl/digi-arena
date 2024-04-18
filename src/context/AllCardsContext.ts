import { createContext, useContext } from "react";
import { Card } from "../types/card";

export const AllCardsContext = createContext<Card[] | null>(null);

export function useAllCardsContext() {
  const allCardsContext = useContext(AllCardsContext);

  if (!allCardsContext) {
    throw new Error("Not in GlobalContext");
  }
  return allCardsContext;
}
