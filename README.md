# 🧠 Memory Game

Ein webbasiertes Memory-Spiel mit React, Vite und Tailwind CSS. Wähle aus verschiedenen Memory-Sets und sammle Punkte durch das Aufdecken passender Kartenpaare!

## ✨ Features

- 🔄 Verschiedene Memory-Sets (z. B. Obst, Tiere, Fahrzeuge, Gefühle, u. v. m.)
- 🧮 Punktesystem zur Bewertung deiner Leistung
- ⚡️ Blitzschnelles Interface dank Vite
- 🎨 Responsive Design mit Tailwind CSS
- 🎲 Zufällige Anordnung der Karten bei jedem Spielstart
- 🔁 Neues Spiel jederzeit möglich, auch mit zufälliger Memory-Auswahl

## 📦 Memory-Sets

Die Memory-Sets befinden sich in einer JavaScript-Datei und sind einfach erweiterbar. Jedes Set enthält ein Label sowie eine Liste an Emojis.

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🚀 Installation & Nutzung

1. Repository klonen

   - `git clone https://github.com/nicklambertz/WebMemory.git)`
   - `cd web-memory`

2. Abhängigkeiten installieren

   - `npm install`

3. Entwicklungsserver starten

   - `npm run dev`

4. Projekt im Browser öffnen
   - Standardmäßig läuft das Projekt unter: `http://localhost:5173`

## 📁 Projektstruktur

- memory-game
  - public
    - images: Vite-Logo
    - sounds: Ton-Effekt für Spiel-Abschluss
  - src
    - components: Wiederverwendbare UI-Komponenten
    - data: Memory-Sets und Kartendaten
    - img: Hintergrundbilder
    - pages: Seiten der App
    - utils: Logik-Funktionen
    - App.css: Grundlegende Styles
    - App.jsx: Zusammenführung der App
    - index.css: Verlinkung zu Tailwind
    - main.jsx: Einstiegspunkt der App

## 👤 Autor

Nick Lambertz

## Viel Spaß beim Spielen! 🧠🎯
