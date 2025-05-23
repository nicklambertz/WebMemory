import React from "react";
import { useNavigate } from "react-router-dom";
import memorySets from "../data/memorySets";
import { getRandomSetKey } from "../utils/randomSet";

export default function HomePage() {
  const navigate = useNavigate();

  const handleRandom = () => {
    const randomKey = getRandomSetKey();
    navigate(`/game/${randomKey}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-100 to-blue-200 p-4 space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Willkommen zum Memory-Spiel!
      </h1>

      <button
        onClick={handleRandom}
        className="text-lg md:text-xl bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
      >
        🎲 Zufälliges Memory starten
      </button>

      <div className="w-full max-w-screen-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Object.entries(memorySets).map(([key, set]) => (
          <button
            key={key}
            onClick={() => navigate(`/game/${key}`)}
            className="aspect-[4/3] bg-white rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col p-4 border border-gray-200"
          >
            <div className="text-center text-base md:text-xl font-semibold mb-2">
              {set.name}
            </div>
            <div className="flex-1 bg-gray-100 rounded-md grid grid-cols-3 gap-2 p-2 justify-items-center items-center text-2xl sm:text-3xl md:text-4xl overflow-hidden">
              {set.cards.slice(0, 6).map((emoji, index) => (
                <span
                  key={index}
                  className="text-5xl transform transition-transform"
                >
                  {emoji}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
