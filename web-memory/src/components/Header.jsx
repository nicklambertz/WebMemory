import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link to="/score" className="text-blue-600 font-medium hover:underline">
        Punktestand
      </Link>

      <Link
        to="/"
        className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
      >
        Memory-Spiel
      </Link>

      <Link to="/" className="text-blue-600 font-medium hover:underline">
        Einstellungen
      </Link>
    </header>
  );
}
