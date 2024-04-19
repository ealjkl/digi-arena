import { Deck } from "../types/deck";
import { repeat } from "./repeat";
type FormatType = "PD" | "TTS" | "Text";
type TransformOptions = {
  format: FormatType;
};

const formatFunctions = {
  PD: formatPD,
  TTS: formatTTS,
  Text: formatText,
} as const;

export function formatDeck(
  deck: Deck,
  { format = "TTS" }: TransformOptions
): string {
  return formatFunctions[format](deck);
}

function formatTTS(deck: Deck) {
  return JSON.stringify(
    Object.values(deck).flatMap((deckCard) =>
      repeat(deckCard.card.cardnumber, deckCard.count)
    )
  );
}

function formatPD(deck: Deck) {
  return JSON.stringify(
    Object.values(deck).flatMap((deckCard) =>
      repeat(deckCard.card.cardnumber, deckCard.count)
    )
  );
}

function formatText(deck: Deck) {
  const lines: string[] = ["// New Deck"];
  for (const key in deck) {
    const deckCard = deck[key];
    const newLine = `${deckCard.count} ${deckCard.card.name} ${deckCard.card.cardnumber}`;
    lines.push(newLine);
  }

  return lines.join();
}
