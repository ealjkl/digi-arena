export function getRandomInt(lo: number, hi?: number) {
  if (hi == null) {
    hi = lo;
    lo = 0;
  }

  return Math.floor(Math.random() * (hi - lo)) + lo;
}

export function getRandomFromArray<T>(arr: T[], n: number) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const idx = getRandomInt(arr.length - 1);
    out.push(arr[idx]);
  }
  return out;
}
