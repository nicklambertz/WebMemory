import React, { useEffect, useState } from "react";
import { getScore, resetScore } from "../utils/savePointscore";
import ScoreProgressBar from "../components/ScoreProgressBar";
import BackButton from "../components/BackButton";

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
    <div className="min-h-screen flex flex-col items-center justify-start gap-10 px-4 py-10">
      <BackButton />
      <div className="w-full max-w-md flex flex-col gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <div className="bg-green-500 text-white px-8 py-6 rounded-xl text-center shadow-md">
            <p className="text-3xl font-medium">Deine Punkte</p>
            <p className="text-7xl font-bold mt-2">{score}</p>
          </div>

          <ScoreProgressBar />
        </div>

        <div className="bg-white p-6 rounded-xl shadow flex justify-center ">
          <button
            onClick={handleReset}
            className="text-2xl bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded shadow"
          >
            Punktestand zurücksetzen
          </button>
        </div>
      </div>
    </div>
  );
}
