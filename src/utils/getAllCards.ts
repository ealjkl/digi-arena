const URL = `https://digimoncard.io/api-public/getAllCards.php?sort=name&series=Digimon%20Card%20Game&sortdirection=asc`;

export async function getAllCards() {
  const dataRaw = await fetch(URL);
  const dataJson = await dataRaw.json();
  return dataJson;
}

