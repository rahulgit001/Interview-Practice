import React, { useEffect, useRef, useState } from "react";
import { subjects } from "../data/questions.js";

const blankQuestion = {
  subject: subjects[0],
  section: "",
  question: "",
  answer: "",
  code: "",
  example: "",
};

function AddQuestionForm({ question, focusField = "question", onClose, onSave }) {
  const [draft, setDraft] = useState(blankQuestion);
  const [error, setError] = useState("");
  const questionInput = useRef(null);
  const exampleInput = useRef(null);

  useEffect(() => {
    if (!question) {
      setDraft(blankQuestion);
    } else {
      setDraft({
        subject: question.subject,
        section: question.section ?? "",
        question: question.question,
        answer: question.answer,
        code: question.code ?? "",
        example: question.example ?? "",
      });
    }
    setError("");
    const target = focusField === "example" ? exampleInput.current : questionInput.current;
    target?.focus();
  }, [focusField, question]);

  function updateField(field, value) {
    setDraft((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!draft.question.trim() || !draft.answer.trim()) {
      setError("Enter both a question and a clear, simple-English answer.");
      return;
    }

    onSave({
      ...(question?.id ? { id: question.id } : {}),
      ...(question?.isCustom ? { isCustom: true } : {}),
      subject: draft.subject,
      section: draft.section.trim() || "General",
      question: draft.question.trim(),
      answer: draft.answer.trim(),
      code: draft.code.trim(),
      example: draft.example.trim(),
    });
  }

  return (
    <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="question-modal" role="dialog" aria-modal="true" aria-labelledby="question-form-title">
        <div className="modal-header">
          <div>
            <p className="eyebrow">BUILD YOUR PRACTICE SET</p>
            <h2 id="question-form-title">{question ? "Edit question" : "Add a question"}</h2>
            <p className="modal-description">Keep the answer clear and easy to explain out loud.</p>
          </div>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Close form">×</button>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="question-subject">Subject</label>
          <select id="question-subject" value={draft.subject} onChange={(event) => updateField("subject", event.target.value)}>
            {subjects.map((subject) => <option value={subject} key={subject}>{subject}</option>)}
          </select>

          <label htmlFor="question-section">Section <span>Optional</span></label>
          <input id="question-section" value={draft.section} onChange={(event) => updateField("section", event.target.value)} placeholder="e.g. Hooks, Arrays, Forms" />

          <label htmlFor="question-input">Question</label>
          <input ref={questionInput} id="question-input" value={draft.question} onChange={(event) => updateField("question", event.target.value)} placeholder="What do you want to practice?" />

          <label htmlFor="question-answer">Simple-English answer</label>
          <textarea id="question-answer" rows="4" value={draft.answer} onChange={(event) => updateField("answer", event.target.value)} placeholder="Explain the idea as you would in an interview." />

          <label htmlFor="question-code">Code example <span>Optional</span></label>
          <textarea className="code-input" id="question-code" rows="4" value={draft.code} onChange={(event) => updateField("code", event.target.value)} placeholder="// Add a short code example" />

          <label htmlFor="question-example">Understanding example <span>Optional</span></label>
          <textarea ref={exampleInput} id="question-example" rows="3" value={draft.example} onChange={(event) => updateField("example", event.target.value)} placeholder="Add a real-world example or analogy to make the idea stick." />

          {error && <p className="form-error" role="alert">{error}</p>}
          <div className="modal-actions">
            <button className="button" type="button" onClick={onClose}>Cancel</button>
            <button className="button button-primary" type="submit">{question ? "Save changes" : "Add question"}</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default AddQuestionForm;
