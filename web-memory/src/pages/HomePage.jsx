import React from "react";
import { useNavigate } from "react-router-dom";

const memorySets = {
  emojis: ["🍎", "🍌", "🍇", "🍓", "🍒", "🍍", "🥝", "🍊"],
  animals: ["🐶", "🐱", "🐰", "🦊", "🐼", "🐵", "🐮", "🐸"],
};

export default function HomePage() {
  const navigate = useNavigate();

  const handleRandom = () => {
    const keys = Object.keys(memorySets);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    navigate(`/game/${randomKey}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 p-4 space-y-6">
      <button
        onClick={handleRandom}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Zufälliges Memory starten
      </button>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(memorySets).map((key) => (
          <button
            key={key}
            onClick={() => navigate(`/game/${key}`)}
            className="bg-white text-blue-600 font-semibold px-4 py-2 rounded shadow hover:bg-blue-50"
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}-Memory
          </button>
        ))}
      </div>
    </div>
  );
}
