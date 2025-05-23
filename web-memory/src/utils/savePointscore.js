//Konfigurationswert
const SCORE_KEY = "memoryScore";

//Punktestand zurückgeben, Umwandlung von String in Int
export function getScore() {
  const stored = localStorage.getItem(SCORE_KEY);
  return stored ? parseInt(stored, 10) : 0;
}

//Addition der neuen Punkte zu bestehendem Punktestand, Umwandlung von Int in String für localStorage
export function addScore(baseScore = 0) {
  const current = getScore();
  const newScore = current + baseScore;
  localStorage.setItem(SCORE_KEY, newScore.toString());
}

//Zurücksetzen des Punktestands auf 0
export function resetScore() {
  localStorage.setItem(SCORE_KEY, "0");
}
