import React from "react";

export default function SubjectTabs({ subjects, selectedSubject, onSelectSubject }) {
  return (
    <nav className="subject-tabs" aria-label="Filter by subject">
      {["All", ...subjects].map((subject) => (
        <button
          className={`subject-tab${selectedSubject === subject ? " is-active" : ""}`}
          type="button"
          key={subject}
          aria-pressed={selectedSubject === subject}
          onClick={() => onSelectSubject(subject)}
        >
          {subject}
        </button>
      ))}
    </nav>
  );
}
