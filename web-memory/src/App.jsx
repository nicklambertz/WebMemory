import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleGamePage from "./pages/SingleGamePage";
import ScorePage from "./pages/ScorePage";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game/:id" element={<SingleGamePage />} />
            <Route path="/score" element={<ScorePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
