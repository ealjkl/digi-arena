export function repeat<T>(x: T, n: number) {
  const out = [];
  for (let i = 0; i < n; i++) {
    out.push(x);
  }
  return out;
}
