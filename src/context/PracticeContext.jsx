import { createContext, useContext, useEffect, useMemo, useReducer, useRef } from "react";
import { questions, subjects } from "../data/questions.js";
import useLocalStorage from "../hooks/useLocalStorage.js";

const STORAGE_KEY = "frontend-interview-practice-v2";
const LEGACY_STORAGE_KEY = "react-interview-practice-v1";
const defaultState = {
  progress: {},
  customQuestions: [],
  questionEdits: {},
  theme: null,
};

const PracticeContext = createContext(null);

function migrateLegacyQuestions(savedQuestions) {
  const progress = {};
  const customQuestions = [];
  const questionEdits = {};
  const baseById = new Map(questions.map((question) => [question.id, question]));

  for (const saved of savedQuestions) {
    const base = baseById.get(saved.id);
    const subject = subjects.includes(saved.subject)
      ? saved.subject
      : subjects.includes(saved.category)
        ? saved.category
        : "React.js";
    const section = saved.section
      ?? (saved.category && saved.category !== subject ? saved.category : base?.section ?? "General");
    const question = {
      id: saved.id,
      subject,
      section,
      question: saved.question,
      answer: saved.answer,
      code: typeof saved.code === "string" ? saved.code : "",
      example: typeof saved.example === "string" ? saved.example : "",
    };

    if (saved.status === "known" || saved.status === "review") {
      progress[saved.id] = saved.status;
    }

    if (saved.custom) {
      customQuestions.push({ ...question, isCustom: true });
    } else if (base) {
      const changedFields = {};
      for (const field of ["subject", "section", "question", "answer", "code", "example"]) {
        if (question[field] !== (base[field] ?? "")) changedFields[field] = question[field];
      }
      if (Object.keys(changedFields).length) questionEdits[saved.id] = changedFields;
    }
  }

  return { progress, customQuestions, questionEdits, theme: null };
}

function normalizeState(saved) {
  if (Array.isArray(saved)) return migrateLegacyQuestions(saved);
  if (!saved || typeof saved !== "object" || Array.isArray(saved)) {
    throw new Error("Saved practice data has an unexpected format.");
  }

  return {
    progress: saved.progress && typeof saved.progress === "object" ? saved.progress : {},
    customQuestions: Array.isArray(saved.customQuestions) ? saved.customQuestions : [],
    questionEdits: saved.questionEdits && typeof saved.questionEdits === "object" ? saved.questionEdits : {},
    theme: saved.theme === "light" || saved.theme === "dark" ? saved.theme : null,
  };
}

function practiceReducer(state, action) {
  switch (action.type) {
    case "SET_STATUS": {
      const progress = { ...state.progress };
      if (state.progress[action.id] === action.status) {
        delete progress[action.id];
      } else {
        progress[action.id] = action.status;
      }
      return { ...state, progress };
    }
    case "ADD_CUSTOM":
      return { ...state, customQuestions: [action.question, ...state.customQuestions] };
    case "UPDATE_QUESTION":
      if (state.customQuestions.some((item) => item.id === action.question.id)) {
        return {
          ...state,
          customQuestions: state.customQuestions.map((item) =>
            item.id === action.question.id ? { ...action.question, isCustom: true } : item,
          ),
        };
      }
      return {
        ...state,
        questionEdits: {
          ...state.questionEdits,
          [action.question.id]: action.question,
        },
      };
    case "DELETE_CUSTOM": {
      const progress = { ...state.progress };
      delete progress[action.id];
      return {
        ...state,
        customQuestions: state.customQuestions.filter((item) => item.id !== action.id),
        progress,
      };
    }
    case "SET_THEME":
      return { ...state, theme: action.theme };
    case "RESET_PROGRESS":
      return { ...state, progress: {} };
    default:
      return state;
  }
}

export function PracticeProvider({ children }) {
  const [persistedState, setPersistedState, storageError] = useLocalStorage(
    STORAGE_KEY,
    defaultState,
    normalizeState,
    LEGACY_STORAGE_KEY,
  );
  const [state, dispatch] = useReducer(practiceReducer, persistedState, normalizeState);
  const previousState = useRef(state);

  useEffect(() => {
    if (previousState.current === state) return;
    previousState.current = state;
    setPersistedState(state);
  }, [setPersistedState, state]);

  const value = useMemo(() => ({ state, dispatch, storageError }), [state, storageError]);

  return <PracticeContext.Provider value={value}>{children}</PracticeContext.Provider>;
}

export function usePractice() {
  const context = useContext(PracticeContext);
  if (!context) throw new Error("usePractice must be used inside PracticeProvider.");
  return context;
}
