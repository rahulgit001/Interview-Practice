import React from "react";

export default function EmptyState({ hasFilters, onAddQuestion }) {
  return (
    <section className="empty-state" aria-live="polite">
      <span className="empty-state-icon" aria-hidden="true">⌕</span>
      <h2>{hasFilters ? "No questions match those filters" : "No questions yet"}</h2>
      <p>{hasFilters ? "Try a different search or filter, or add a question." : "Add a question to start your practice set."}</p>
      <button className="button button-primary" type="button" onClick={onAddQuestion}>
        Add question
      </button>
    </section>
  );
}
