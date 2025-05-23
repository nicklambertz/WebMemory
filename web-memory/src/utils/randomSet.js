import memorySets from "../data/memorySets";

export function getRandomSetKey() {
  const keys = Object.keys(memorySets);
  return keys[Math.floor(Math.random() * keys.length)];
}
