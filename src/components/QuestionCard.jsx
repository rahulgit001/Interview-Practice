import React, { memo } from "react";
import { usePractice } from "../context/PracticeContext.jsx";
import CodeBlock from "./CodeBlock.jsx";

function QuestionCard({
  question,
  answerVisible,
  exampleVisible,
  onToggleAnswer,
  onToggleExample,
  onEdit,
}) {
  const { state, dispatch } = usePractice();
  const status = state.progress[question.id] ?? "new";
  const answerId = `answer-${question.id}`;
  const exampleId = `example-${question.id}`;

  function setStatus(nextStatus) {
    dispatch({ type: "SET_STATUS", id: question.id, status: nextStatus });
  }

  function deleteCustomQuestion() {
    if (!window.confirm("Delete this custom question?")) return;
    dispatch({ type: "DELETE_CUSTOM", id: question.id });
  }

  return (
    <article className={`question-card status-${status}`} id={`question-${question.id}`}>
      <div className="question-meta">
        <span className="subject-label">{question.subject}</span>
        {question.section && <span className="section-label">{question.section}</span>}
        <span className={`status-label ${status}`}>{status === "known" ? "Known" : status === "review" ? "Review" : "Not tried"}</span>
      </div>
      <h2 className="question-title">{question.question}</h2>

      {answerVisible && (
        <section className="answer-panel" id={answerId} aria-label="Answer">
          <p>{question.answer}</p>
          <CodeBlock code={question.code} />
        </section>
      )}
      {exampleVisible && question.example && (
        <section className="example-panel" id={exampleId} aria-label="Understanding example">
          <div className="example-heading">Understanding example</div>
          <p>{question.example}</p>
        </section>
      )}

      <div className="card-actions">
        <button
          className="button button-subtle"
          type="button"
          aria-expanded={answerVisible}
          aria-controls={answerVisible ? answerId : undefined}
          onClick={() => onToggleAnswer(question.id)}
        >
          {answerVisible ? "Hide answer" : "Show answer"}
        </button>
        {question.example
          ? (
            <button
              className="button button-subtle"
              type="button"
              aria-expanded={exampleVisible}
              aria-controls={exampleVisible ? exampleId : undefined}
              onClick={() => onToggleExample(question.id)}
            >
              {exampleVisible ? "Hide example" : "Understanding example"}
            </button>
          )
          : <button className="button button-subtle" type="button" onClick={() => onEdit(question, "example")}>Add example</button>}
        <span className="actions-spacer" />
        <button className="button button-subtle" type="button" onClick={() => onEdit(question)} aria-label={`Edit ${question.question}`}>
          Edit
        </button>
        <button
          className={`button status-button${status === "known" ? " is-selected" : ""}`}
          type="button"
          aria-pressed={status === "known"}
          onClick={() => setStatus("known")}
        >
          ✓ Known
        </button>
        <button
          className={`button status-button review-button${status === "review" ? " is-selected" : ""}`}
          type="button"
          aria-pressed={status === "review"}
          onClick={() => setStatus("review")}
        >
          ↻ Review
        </button>
        {question.isCustom && (
          <button className="button delete-button" type="button" onClick={deleteCustomQuestion} aria-label={`Delete ${question.question}`}>
            Delete
          </button>
        )}
      </div>
    </article>
  );
}

export default memo(QuestionCard);
