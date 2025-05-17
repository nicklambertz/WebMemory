import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function shuffle(array) {
  //Kartendeck wird zufällig gemischt
  return array.sort(() => Math.random() - 0.5);
}

export default function MemoryGame({ cards }) {
  const [deck, setDeck] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    //Kartendeck wird erstellt
    const shuffledDeck = shuffle([...cards, ...cards]).map((card, index) => ({
      id: index,
      value: card,
      isFlipped: false,
      isMatched: false,
    }));
    setDeck(shuffledDeck);
    setMoves(0);
    setMatched([]);
    setTime(0);
    setIsActive(true);
    setFlipped([]);
  }, [cards]);

  useEffect(() => {
    // Timmer startet bei Spielstart
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActive]);

  //Timer stoppt, wenn alle Karten auf
  useEffect(() => {
    if (matched.length === cards.length) {
      setIsActive(false);
    }
  }, [matched, cards.length]);

  //Reaktion beim Aufdecken einer Karte
  const handleClick = (card) => {
    if (flipped.length === 2 || card.isFlipped || card.isMatched) return;

    const newDeck = deck.map((c) =>
      c.id === card.id ? { ...c, isFlipped: true } : c
    );
    setDeck(newDeck);
    const newFlipped = [...flipped, card];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      const [first, second] = newFlipped;
      if (first.value === second.value) {
        setMatched((prev) => [...prev, first.value]);
        setDeck((d) =>
          d.map((c) =>
            c.value === first.value ? { ...c, isMatched: true } : c
          )
        );
      }
      setTimeout(() => {
        setDeck((d) =>
          d.map((c) =>
            c.value === first.value && first.value === second.value
              ? c
              : { ...c, isFlipped: false }
          )
        );
        setFlipped([]);
      }, 1000);
    }
  };

  //Funktion zum Zurücksetzen des Spiels -> neu mischen und Zähler zurücksetzen
  const resetGame = () => {
    const shuffledDeck = shuffle([...cards, ...cards]).map((card, index) => ({
      id: index,
      value: card,
      isFlipped: false,
      isMatched: false,
    }));
    setDeck(shuffledDeck);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setTime(0);
    setIsActive(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-lg">Züge: {moves}</p>
        <p className="text-lg">Zeit: {time}s</p>
        <button
          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
          onClick={resetGame}
        >
          Reset
        </button>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {deck.map((card) => (
          <motion.div
            key={card.id}
            className={`w-20 h-20 rounded-xl flex items-center justify-center cursor-pointer text-2xl shadow-md ${
              card.isFlipped || card.isMatched ? "bg-white" : "bg-blue-500"
            }`}
            onClick={() => handleClick(card)}
            whileTap={{ scale: 0.9 }}
          >
            {card.isFlipped || card.isMatched ? card.value : "❓"}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
