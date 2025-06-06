import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton({ to = "/" }) {
  const navigate = useNavigate();

  return (
    <div className="text-xl w-full flex justify-start mb-4">
      <button
        onClick={() => navigate(to)}
        className="text-blue-600 border border-blue-500 bg-white px-3 py-1 rounded hover:bg-blue-50 transition"
      >
        ←
      </button>
    </div>
  );
}
