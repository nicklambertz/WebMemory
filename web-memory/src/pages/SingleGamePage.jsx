import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import MemoryGame from "../components/MemoryGame";
import memorySets from "../data/memorySets";
import BackButton from "../components/BackButton";

export default function SingleGamePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const set = memorySets[id] || memorySets["fruits"]; //Fallback, falls Zugriff auf memorySets.js nicht funktioniert

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-4xl">
        <BackButton />

        <h1 className="text-4xl font-bold mb-4 text-center">{set.name}</h1>
        <MemoryGame cards={set.cards} />
      </div>
    </div>
  );
}
