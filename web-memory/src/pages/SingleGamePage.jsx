import React from "react";
import { useParams } from "react-router-dom";
import MemoryGame from "../components/MemoryGame";

const memorySets = {
  emojis: ["🍎", "🍌", "🍇", "🍓", "🍒", "🍍", "🥝", "🍊"],
  animals: ["🐶", "🐱", "🐰", "🦊", "🐼", "🐵", "🐮", "🐸"],
};

export default function SingleGamePage() {
  const { id } = useParams();
  const cards = memorySets[id] || memorySets["emojis"];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Memory-Spiel</h1>
        <MemoryGame cards={cards} />
      </div>
    </div>
  );
}
