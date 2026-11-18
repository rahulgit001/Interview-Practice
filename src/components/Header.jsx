import React from "react";
import { usePractice } from "../context/PracticeContext.jsx";
import useTheme from "../hooks/useTheme.js";

export default function Header({ totalQuestions }) {
  const { state, storageError } = usePractice();
  const { theme, toggleTheme } = useTheme();
  const known = Object.values(state.progress).filter((status) => status === "known").length;
  const review = Object.values(state.progress).filter((status) => status === "review").length;
  const progress = totalQuestions ? Math.round((known / totalQuestions) * 100) : 0;

  return (
    <header className="app-header">
      <div className="header-top">
        <div className="brand-lockup">
          <span className="brand-mark" aria-hidden="true">&lt;/&gt;</span>
          <div>
            <p className="eyebrow">FRONTEND DEVELOPER · 2.8 YEARS</p>
            <h1>Interview Practice</h1>
          </div>
        </div>
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
          <span className="theme-label">{theme === "dark" ? "Light" : "Dark"}</span>
        </button>
      </div>

      <p className="header-subtitle">A calm space to sharpen your answers, one question at a time.</p>

      <section className="progress-card" aria-label={`Practice progress: ${progress}% known`}>
        <div className="progress-heading">
          <span className="progress-title">Your progress</span>
          <span className="progress-percent">{progress}% <span>known</span></span>
        </div>
        <div className="progress-track" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
          <span style={{ width: `${progress}%` }} />
        </div>
        <div className="stats-row" aria-label="Question totals">
          <span><strong className="stat-known">{known}</strong> Known</span>
          <span><strong className="stat-review">{review}</strong> Review</span>
          <span><strong>{totalQuestions}</strong> Total</span>
        </div>
      </section>

      {storageError && <p className="storage-warning" role="status">{storageError}</p>}
    </header>
  );
}
