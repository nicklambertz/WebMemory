import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getScore } from "../utils/savePointscore";

const AVATAR_KEY = "memoryAvatar";

export default function Header() {
  const [score, setScore] = useState(0);
  const [avatar, setAvatar] = useState("⚙️"); //Fallback: Zahnrad
  const location = useLocation();

  //Punktestand und Avatar bei Seitenwechsel laden
  useEffect(() => {
    setScore(getScore());
    const storedAvatar = localStorage.getItem(AVATAR_KEY);
    if (storedAvatar) {
      setAvatar(storedAvatar);
    }
  }, [location]);

  return (
    <header className="bg-white shadow px-4 sm:px-6 py-3 sm:py-4 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <Link
          to="/score"
          className="border border-blue-500 text-blue-600 px-3 py-1 rounded text-sm sm:text-3xl hover:bg-blue-50 transition min-w-[120px] text-center"
        >
          ⭐ {score}
        </Link>

        <Link
          to="/"
          className="text-lg sm:text-4xl font-bold text-gray-800 text-center flex-1"
        >
          Memory-Spiel
        </Link>

        <Link
          to="/settings"
          className="border border-blue-500 text-blue-600 px-3 py-1 rounded text-sm sm:text-3xl hover:bg-blue-50 transition min-w-[120px] text-center"
        >
          {avatar}
        </Link>
      </div>
    </header>
  );
}
