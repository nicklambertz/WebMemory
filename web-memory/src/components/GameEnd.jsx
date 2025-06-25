import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { calculateScore } from "../utils/calculatePointscore";
import { getRandomSetKey } from "../utils/randomSet";
import ScoreProgressBar from "./ScoreProgressBar";

export default function GameEnd({ moves, time, onClose }) {
  const { base, timeValue, moveValue, timeBonus, moveBonus, total } =
    calculateScore(moves, time);
  const navigate = useNavigate();

  const timeValueMet = time < timeValue;
  const moveValueMet = moves < moveValue;

  const handleRandomGame = () => {
    const randomKey = getRandomSetKey();
    navigate(`/game/${randomKey}`);
  };

  const handleHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const soundSetting = localStorage.getItem("memorySound");
    const soundEnabled = soundSetting === null || soundSetting === "true";

    if (soundEnabled) {
      const audio = new Audio("/sounds/success.mp3");
      audio
        .play()
        .catch((e) =>
          console.error("Sound konnte nicht abgespielt werden:", e)
        );
    }
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 w-full max-w-md sm:max-w-lg lg:max-w-xl space-y-6">
        <h2 className="text-4xl font-bold text-center text-green-600">
          🎉 Spiel abgeschlossen!
        </h2>

        <div className="space-y-2 text-lg text-gray-800">
          <div className="text-xl flex justify-between items-center border-b pb-2">
            <span>✅ 🏆 Spiel beendet</span>
            <span className="font-semibold text-green-600">+{base}</span>
          </div>
          <div className="text-xl flex justify-between items-center border-b pb-2">
            <span>
              {timeValueMet ? "✅" : "❌"} ⏱️ <strong>Zeitbonus</strong> (unter{" "}
              {timeValue} Sekunden)
            </span>
            <span className="font-semibold text-blue-600">+{timeBonus}</span>
          </div>
          <div className="text-xl flex justify-between items-center border-b pb-2">
            <span>
              {moveValueMet ? "✅" : "❌"} 🧠 <strong>Zugbonus</strong> (unter{" "}
              {moveValue} Züge)
            </span>
            <span className="font-semibold text-purple-600">+{moveBonus}</span>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-xl font-bold text-gray-900">
            Gesamt:{" "}
            <span className="text-3xl text-orange-500 font-extrabold">
              {total} Punkte
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <ScoreProgressBar />
        </div>

        <div className="flex justify-between pt-6">
          <button
            onClick={handleHome}
            className="text-xl bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            🔙 Zur Startseite
          </button>
          <button
            onClick={handleRandomGame}
            className="text-xl bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition"
          >
            🎲 Zufälliges Spiel
          </button>
        </div>
      </div>
    </div>
  );
}
