import { ReactNode } from "react";
import { AllCardsContext } from "../context/AllCardsContext";
import { useEffect, useState } from "react";
import { Card } from "../types/card";
import { getAllCards2 as getAllCards } from "../utils/getAllCards2";

type AllCardsProviderProps = {
  children?: ReactNode;
};

export function AllCardsProvider({ children }: AllCardsProviderProps) {
  const [loading, setLoading] = useState(true);
  const [allCards, setAllCards] = useState<Card[] | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllCards()
      .then((data) => {
        setAllCards(data);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (error) {
    return <h1>Error</h1>;
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <AllCardsContext.Provider value={allCards}>
      {children}
    </AllCardsContext.Provider>
  );
}
