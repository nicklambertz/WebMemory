import React, { useEffect, useState } from "react";
import { getScore } from "../utils/savePointscore";
import { calculateScore } from "../utils/calculatePointscore";

export default function ScoreProgressBar() {
  const [score, setScore] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    const value = getScore();
    const { levelSize } = calculateScore(0, 0);
    const progressInLevel = value % levelSize;
    const targetPercent = (progressInLevel / levelSize) * 100;

    //Delay, damit Animation greift
    setScore(value);
    setTimeout(() => {
      setProgressPercent(targetPercent);
    }, 100);
  }, []);

  const level = Math.floor(score / calculateScore(0, 0).levelSize) + 1;
  const levelSize = calculateScore(0, 0).levelSize;
  const progressInLevel = score % levelSize;

  return (
    <div className="w-full max-w-md relative mt-4">
      <p className="text-2xl text-center text-gray-600 mb-2">
        ⭐ Level {level} ⭐
      </p>
      <div className="relative w-full bg-gray-300 rounded-full h-6 overflow-hidden">
        <div
          className="bg-green-500 h-full transition-all duration-1000 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <p className="text-lg text-center text-sm text-gray-500 mt-1">
        {progressInLevel} / {levelSize} Punkte im Level {level}
      </p>
    </div>
  );
}
