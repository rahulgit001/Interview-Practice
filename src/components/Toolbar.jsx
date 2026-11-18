import React from "react";

const filters = [
  ["all", "All"],
  ["new", "Not tried"],
  ["review", "Review"],
  ["known", "Known"],
  ["custom", "My questions"],
];

export default function Toolbar({
  search,
  onSearchChange,
  filter,
  onFilterChange,
  onRandom,
  onShuffle,
  onToggleAllAnswers,
  allAnswersVisible,
  onAddQuestion,
  questionCount,
}) {
  return (
    <section className="toolbar" aria-label="Question controls">
      <label className="search-field">
        <span className="search-icon" aria-hidden="true">⌕</span>
        <span className="sr-only">Search questions</span>
        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search questions, answers, or code..."
        />
      </label>

      <div className="toolbar-row">
        <label className="filter-field">
          <span className="sr-only">Filter questions</span>
          <select value={filter} onChange={(event) => onFilterChange(event.target.value)}>
            {filters.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
          </select>
        </label>
        <button className="button" type="button" onClick={onRandom} disabled={!questionCount}>Random</button>
        <button className="button" type="button" onClick={onShuffle} disabled={questionCount < 2}>Shuffle</button>
        <button className="button" type="button" onClick={onToggleAllAnswers}>
          {allAnswersVisible ? "Hide all answers" : "Show all answers"}
        </button>
        <button className="button button-primary add-button" type="button" onClick={onAddQuestion}>
          <span aria-hidden="true">＋</span> Add question
        </button>
      </div>
    </section>
  );
}
