import React, { useCallback, useMemo, useState } from "react";
import AddQuestionForm from "./components/AddQuestionForm.jsx";
import EmptyState from "./components/EmptyState.jsx";
import Header from "./components/Header.jsx";
import QuestionCard from "./components/QuestionCard.jsx";
import SubjectTabs from "./components/SubjectTabs.jsx";
import Toolbar from "./components/Toolbar.jsx";
import { usePractice } from "./context/PracticeContext.jsx";
import useDebounce from "./hooks/useDebounce.js";
import { questions, subjects } from "./data/questions.js";

function createQuestionId() {
  return `custom-${globalThis.crypto?.randomUUID?.() ?? Date.now()}`;
}

function App() {
  const { state, dispatch } = usePractice();
  const [search, setSearch] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [filter, setFilter] = useState("all");
  const [revealedAnswers, setRevealedAnswers] = useState({});
  const [revealedExamples, setRevealedExamples] = useState({});
  const [shuffleOrder, setShuffleOrder] = useState([]);
  const [editor, setEditor] = useState(null);
  const debouncedSearch = useDebounce(search, 300);

  const allQuestions = useMemo(() => [
    ...questions.map((question) => ({
      ...question,
      ...state.questionEdits[question.id],
    })),
    ...state.customQuestions,
  ], [state.customQuestions, state.questionEdits]);

  const filteredQuestions = useMemo(() => {
    const query = debouncedSearch.trim().toLowerCase();
    const visible = allQuestions.filter((question) => {
      const status = state.progress[question.id] ?? "new";
      const matchesSubject = selectedSubject === "All" || question.subject === selectedSubject;
      const matchesFilter = filter === "all"
        || (filter === "custom" ? question.isCustom : status === filter);
      const searchableText = [
        question.question,
        question.answer,
        question.code,
        question.example,
        question.section,
        question.subject,
      ].join(" ").toLowerCase();
      return matchesSubject && matchesFilter && (!query || searchableText.includes(query));
    });

    if (!shuffleOrder.length) return visible;
    const position = new Map(shuffleOrder.map((id, index) => [id, index]));
    return [...visible].sort((a, b) => (position.get(a.id) ?? Infinity) - (position.get(b.id) ?? Infinity));
  }, [allQuestions, debouncedSearch, filter, selectedSubject, shuffleOrder, state.progress]);

  const openEditor = useCallback((question = null, focusField = "question") => {
    setEditor({ question, focusField });
  }, []);

  const closeEditor = useCallback(() => setEditor(null), []);

  const saveQuestion = useCallback((question) => {
    if (question.id) {
      dispatch({ type: "UPDATE_QUESTION", question });
      if (question.example) {
        setRevealedExamples((current) => ({ ...current, [question.id]: true }));
      }
    } else {
      dispatch({
        type: "ADD_CUSTOM",
        question: { ...question, id: createQuestionId(), isCustom: true },
      });
      setFilter("all");
    }
    closeEditor();
  }, [closeEditor, dispatch]);

  const toggleAnswer = useCallback((id) => {
    setRevealedAnswers((current) => ({ ...current, [id]: !current[id] }));
  }, []);

  const toggleExample = useCallback((id) => {
    setRevealedExamples((current) => ({ ...current, [id]: !current[id] }));
  }, []);

  const allAnswersVisible = allQuestions.length > 0
    && allQuestions.every((question) => revealedAnswers[question.id]);

  const toggleAllAnswers = useCallback(() => {
    if (allQuestions.length > 0 && allQuestions.every((question) => revealedAnswers[question.id])) {
      setRevealedAnswers({});
      setRevealedExamples({});
      return;
    }
    setRevealedAnswers(Object.fromEntries(allQuestions.map((question) => [question.id, true])));
  }, [allQuestions, revealedAnswers]);

  const pickRandomQuestion = useCallback(() => {
    if (!filteredQuestions.length) return;
    const selected = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
    document.getElementById(`question-${selected.id}`)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [filteredQuestions]);

  const shuffleQuestions = useCallback(() => {
    const ids = filteredQuestions.map((question) => question.id);
    for (let index = ids.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [ids[index], ids[randomIndex]] = [ids[randomIndex], ids[index]];
    }
    setShuffleOrder(ids);
  }, [filteredQuestions]);

  const handleSearchChange = useCallback((value) => setSearch(value), []);
  const handleFilterChange = useCallback((value) => setFilter(value), []);
  const handleSubjectChange = useCallback((value) => setSelectedSubject(value), []);
  const handleAddQuestion = useCallback(() => openEditor(), [openEditor]);

  return (
    <main className="app-shell">
      <Header totalQuestions={allQuestions.length} />
      <SubjectTabs
        subjects={subjects}
        selectedSubject={selectedSubject}
        onSelectSubject={handleSubjectChange}
      />
      <Toolbar
        search={search}
        onSearchChange={handleSearchChange}
        filter={filter}
        onFilterChange={handleFilterChange}
        onRandom={pickRandomQuestion}
        onShuffle={shuffleQuestions}
        onToggleAllAnswers={toggleAllAnswers}
        allAnswersVisible={allAnswersVisible}
        onAddQuestion={handleAddQuestion}
        questionCount={filteredQuestions.length}
      />

      <section className="practice-list" aria-label="Interview questions">
        <div className="list-heading">
          <h2>{selectedSubject === "All" ? "All questions" : selectedSubject}</h2>
          <span>{filteredQuestions.length} {filteredQuestions.length === 1 ? "question" : "questions"}</span>
        </div>
        {filteredQuestions.length ? (
          filteredQuestions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              answerVisible={Boolean(revealedAnswers[question.id])}
              exampleVisible={Boolean(revealedExamples[question.id])}
              onToggleAnswer={toggleAnswer}
              onToggleExample={toggleExample}
              onEdit={openEditor}
            />
          ))
        ) : (
          <EmptyState
            hasFilters={Boolean(search || selectedSubject !== "All" || filter !== "all")}
            onAddQuestion={handleAddQuestion}
          />
        )}
      </section>

      <footer className="app-footer">
        <span>Small steps. Strong answers.</span>
        <span>2.8 years of experience — and growing.</span>
      </footer>

      {editor && (
        <AddQuestionForm
          question={editor.question}
          focusField={editor.focusField}
          onClose={closeEditor}
          onSave={saveQuestion}
        />
      )}
    </main>
  );
}

export default App;
