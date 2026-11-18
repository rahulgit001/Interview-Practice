# Frontend Developer Interview Practice

A React 18 + Vite practice app for a frontend developer with 2.8 years of experience. It includes 344 questions across JavaScript, React.js, Python, FastAPI, Bootstrap, HTML, and CSS. Edit any question, add a personal example, and track Known/Review progress.

## Run the project

For a new project:

```bash
npm create vite@latest interview-practice -- --template react
cd interview-practice
npm install
npm run dev
```

In this repository, dependencies are already configured; run `npm install` and then `npm run dev`.

The site deploys to GitHub Pages from `main` using the `Deploy to GitHub Pages` workflow.

## Components

- **Header.jsx** — Shows the study title, progress bar, Known/Review/Total counts, and theme toggle.
- **SubjectTabs.jsx** — Filters the question list by subject, with horizontally scrollable tabs on small screens.
- **Toolbar.jsx** — Contains the debounced-search input, status filter, Random, Shuffle, Hide all, and Add question controls.
- **QuestionCard.jsx** — Displays one question, its answer/code, understanding example, status actions, and the Edit control. It is wrapped in `React.memo`.
- **CodeBlock.jsx** — Renders code samples in a readable, horizontally scrollable block.
- **AddQuestionForm.jsx** — Provides a validated, controlled form for adding questions or editing any question.
- **EmptyState.jsx** — Gives clear feedback when filters return no questions and offers an Add question action.

## Context and hooks

- **PracticeContext.jsx** — Uses `useReducer` and Context to manage progress, custom questions, question edits, and theme preference.
- **useLocalStorage.js** — Safely reads, validates, migrates, and persists practice data with visible storage errors.
- **useDebounce.js** — Delays search filtering by 300 ms.
- **useTheme.js** — Follows the system theme by default and supports a saved manual light/dark toggle.

Question content lives in `src/data/questions.js`; the app uses controlled inputs, stable question IDs, and localStorage persistence.
