import React, { useEffect, useState } from "react";
import { getScore, resetScore } from "../utils/savePointscore";
import { calculateScore } from "../utils/calculatePointscore";
import ScoreProgressBar from "../components/ScoreProgressBar";

export default function ScorePage() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    setScore(getScore());
  }, []);

  const handleReset = () => {
    resetScore();
    setScore(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 px-4 py-10 bg-gradient-to-b from-white to-blue-100">
      <div className="bg-green-500 text-white px-8 py-6 rounded-xl text-center shadow-md">
        <p className="text-xl font-medium">Deine Punkte</p>
        <p className="text-5xl font-bold mt-2">{score}</p>
      </div>

      <ScoreProgressBar />

      <button
        onClick={handleReset}
        className="text-xl mt-10 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded shadow"
      >
        Punktestand zurücksetzen
      </button>
    </div>
  );
}
