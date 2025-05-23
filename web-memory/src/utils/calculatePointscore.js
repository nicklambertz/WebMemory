export function calculateScore(moves, timeInSeconds) {
  const base = 100;
  const timeValue = 60;
  const moveValue = 20;
  const timeBonus = timeInSeconds < timeValue ? 50 : 0;
  const moveBonus = moves < moveValue ? 50 : 0;
  const total = base + timeBonus + moveBonus;

  return {
    base,
    timeValue,
    moveValue,
    timeBonus,
    moveBonus,
    total,
  };
}
