import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";

const avatars = ["🧚", "👽", "🤖", "🦄", "🐢", "🐧"];

//Keys für LocalStorage
const AVATAR_KEY = "memoryAvatar";
const SOUND_KEY = "memorySound";

export default function SettingsPage() {
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    const storedAvatar = localStorage.getItem(AVATAR_KEY);
    const storedSound = localStorage.getItem(SOUND_KEY);

    if (storedAvatar) setSelectedAvatar(storedAvatar);
    if (storedSound !== null) setSoundEnabled(storedSound === "true");
  }, []);

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
    localStorage.setItem(AVATAR_KEY, avatar);
  };

  const toggleSound = () => {
    const newValue = !soundEnabled;
    setSoundEnabled(newValue);
    localStorage.setItem(SOUND_KEY, newValue.toString());
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 space-y-8">
      <BackButton />

      <h1 className="text-3xl font-bold text-gray-800 mt-2">
        ⚙️ Einstellungen
      </h1>

      <div className="w-full max-w-md bg-white rounded-xl shadow p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Avatar wählen</h2>
        <div className="flex justify-between items-center space-x-4">
          {avatars.map((avatar) => (
            <button
              key={avatar}
              className={`text-3xl p-2 rounded-full border-2 transition ${
                selectedAvatar === avatar
                  ? "border-green-500 bg-green-100"
                  : "border-transparent hover:border-gray-300"
              }`}
              onClick={() => handleAvatarSelect(avatar)}
            >
              {avatar}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full max-w-md bg-white rounded-xl shadow p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Sound</h2>
        <div className="flex items-center justify-between">
          <span className="text-lg text-gray-600">
            Sound {soundEnabled ? "aktiviert" : "deaktiviert"}
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={soundEnabled}
              onChange={toggleSound}
            />
            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-green-500 transition-all duration-300"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform peer-checked:translate-x-full transition duration-300"></div>
          </label>
        </div>
      </div>
    </div>
  );
}
