export const subjects = [
  "React.js",
  "JavaScript",
  "Python",
  "FastAPI",
  "Bootstrap",
  "HTML",
  "CSS"
];

export const questions = [
  {
    "id": "react-basics",
    "subject": "React.js",
    "section": "Fundamentals",
    "question": "What is React, and when would you use it?",
    "answer": "React is a JavaScript library for building user interfaces from reusable components. It is a good fit when an interface has interactive, changing data and benefits from being split into independently reusable pieces.",
    "code": "",
    "example": "A shopping page can have separate ProductCard, SearchBar, and Cart components. When a shopper adds an item, React updates the cart UI from the new state instead of asking you to manually change page elements."
  },
  {
    "id": "components",
    "subject": "React.js",
    "section": "Fundamentals",
    "question": "What is a React component?",
    "answer": "A component is a reusable function that returns a piece of UI. Components can accept props, manage state, and be composed together to build a page.",
    "code": "function Greeting({ name }) {\n  return <h2>Hello, {name}!</h2>;\n}",
    "example": "A ProfilePage could be composed from a Header, Avatar, and ProfileDetails. Each component owns one clear part of the interface and can be reused elsewhere."
  },
  {
    "id": "jsx",
    "subject": "React.js",
    "section": "Fundamentals",
    "question": "What is JSX?",
    "answer": "JSX is a syntax extension that lets us describe UI with HTML-like markup inside JavaScript. A build tool transforms it into JavaScript calls that create React elements.",
    "code": "const title = <h1>Welcome back</h1>;",
    "example": "Instead of building a heading with a long createElement call, write <h1>Welcome</h1> right next to the JavaScript that decides what the heading should say."
  },
  {
    "id": "props-state",
    "subject": "React.js",
    "section": "Props & state",
    "question": "What is the difference between props and state?",
    "answer": "Props are read-only inputs provided by a parent. State is data a component owns and updates over time. A state update asks React to render the UI again with the new value.",
    "code": "",
    "example": "A parent passes a product's name as a prop to ProductCard. The card can keep its own “saved” state when the shopper bookmarks that product."
  },
  {
    "id": "use-state",
    "subject": "React.js",
    "section": "Hooks",
    "question": "What does useState do?",
    "answer": "useState adds a state value to a function component and returns that value with a setter. Use the setter, not direct mutation, to tell React about an update.",
    "code": "const [liked, setLiked] = useState(false);\n\n<button onClick={() => setLiked(!liked)}>\n  {liked ? \"Liked\" : \"Like\"}\n</button>",
    "example": "A like button stores whether it is liked. Clicking it calls the setter, and React updates the label and count to match the new value."
  },
  {
    "id": "use-effect",
    "subject": "React.js",
    "section": "Hooks",
    "question": "What is useEffect used for?",
    "answer": "useEffect synchronizes a component with an external system, such as a browser event, subscription, timer, or network connection. Its dependencies describe which reactive values the effect uses; return a cleanup function when setup needs to be undone.",
    "code": "useEffect(() => {\n  const connection = createConnection(roomId);\n  connection.connect();\n  return () => connection.disconnect();\n}, [roomId]);",
    "example": "A chat room component can connect when its room ID changes, then disconnect from the previous room before connecting to the next one."
  },
  {
    "id": "hooks-rules",
    "subject": "React.js",
    "section": "Hooks",
    "question": "What are the Rules of Hooks?",
    "answer": "Call Hooks at the top level of a React function component or custom Hook, not inside conditions, loops, or nested functions. This keeps Hook calls in the same order on every render.",
    "code": "",
    "example": "If useState were called only when isLoggedIn is true, React could not reliably match that state to the same Hook on the next render when the condition changes."
  },
  {
    "id": "keys",
    "subject": "React.js",
    "section": "Rendering",
    "question": "Why does React need keys when rendering a list?",
    "answer": "Keys give sibling elements stable identities. React uses them to match items between renders, so it can correctly preserve, insert, or remove the right elements.",
    "code": "todos.map((todo) => <TodoRow key={todo.id} todo={todo} />)",
    "example": "If a todo is inserted at the top, stable todo IDs let React keep each row's input state with its todo. Array indexes can make state appear on the wrong row after reordering."
  },
  {
    "id": "controlled-input",
    "subject": "React.js",
    "section": "Forms & APIs",
    "question": "What is a controlled input?",
    "answer": "A controlled input gets its value from React state and reports changes through an event handler. This makes the component state the source of truth for the field.",
    "code": "const [query, setQuery] = useState(\"\");\n\n<input value={query} onChange={(event) => setQuery(event.target.value)} />",
    "example": "A search box can keep its text in state, show the current query in the input, and filter results using that same value."
  },
  {
    "id": "lifting-state",
    "subject": "React.js",
    "section": "Props & state",
    "question": "What does lifting state up mean?",
    "answer": "Move shared state to the closest common parent of the components that need it. The parent owns the value and passes data or event handlers to its children.",
    "code": "",
    "example": "Two temperature inputs need to stay in sync. Store the temperature in their shared parent and pass it to both inputs, instead of keeping conflicting copies in each one."
  },
  {
    "id": "context",
    "subject": "React.js",
    "section": "Props & state",
    "question": "When would you use Context?",
    "answer": "Context lets components read a value from a distant provider without threading it through every intermediate component. It is useful for values shared across a part of the UI, like the current theme or signed-in user.",
    "code": "",
    "example": "A ThemeProvider can expose the selected theme so deeply nested buttons and menus can read it without every layout component forwarding a theme prop."
  },
  {
    "id": "memo",
    "subject": "React.js",
    "section": "Rendering",
    "question": "What are useMemo and useCallback for?",
    "answer": "useMemo caches a calculated value, while useCallback caches a function definition between renders. They are performance tools for measured cases where recalculation or changing identity causes meaningful extra work, not defaults for every value or function.",
    "code": "const sortedRows = useMemo(\n  () => sortRows(rows, sortOrder),\n  [rows, sortOrder],\n);",
    "example": "If profiling shows a large table repeatedly sorting the same rows, useMemo can reuse the sorted result until the rows or sort order change."
  },
  {
    "id": "api-loading",
    "subject": "React.js",
    "section": "Forms & APIs",
    "question": "How do you handle loading and errors for an API request?",
    "answer": "Represent the request lifecycle in UI state: loading, success, and error. Start loading when the request begins, store the result on success, and show a useful recovery message if it fails. Also clean up or ignore stale requests when the component no longer needs them.",
    "code": "",
    "example": "A profile screen can show a spinner while loading, the profile after success, and a “Try again” action if the network is unavailable."
  },
  {
    "id": "source-b1",
    "subject": "React.js",
    "section": "Fundamentals",
    "question": "Why do we use React?",
    "answer": "To build fast, interactive and reusable user interfaces. It makes frontend development easier.",
    "code": ""
  },
  {
    "id": "source-b6",
    "subject": "React.js",
    "section": "Fundamentals",
    "question": "Can we use React without JSX?",
    "answer": "Yes, with React.createElement(), but JSX is easier to write.",
    "code": ""
  },
  {
    "id": "source-b11",
    "subject": "React.js",
    "section": "Fundamentals",
    "question": "React vs JavaScript?",
    "answer": "JavaScript is a programming language. React is a JavaScript library for building UIs.",
    "code": ""
  },
  {
    "id": "source-b12",
    "subject": "React.js",
    "section": "Fundamentals",
    "question": "What is React Fiber?",
    "answer": "React’s internal rendering architecture. It helps React organize and prioritize rendering work.",
    "code": ""
  },
  {
    "id": "source-b13",
    "subject": "React.js",
    "section": "Fundamentals",
    "question": "Library vs framework?",
    "answer": "A library gives tools for specific problems. A framework gives a more complete structure for the whole application.",
    "code": ""
  },
  {
    "id": "source-b19",
    "subject": "React.js",
    "section": "Props & State",
    "question": "How do you update state?",
    "answer": "Using the setter function from useState.",
    "code": "setCount(count + 1);"
  },
  {
    "id": "source-b20",
    "subject": "React.js",
    "section": "Props & State",
    "question": "Why not modify state directly?",
    "answer": "React may not detect the change and the UI may not update. Always use the setter function.",
    "code": ""
  },
  {
    "id": "source-b21",
    "subject": "React.js",
    "section": "Props & State",
    "question": "Can we use multiple useState hooks?",
    "answer": "Yes. Use one for each separate value in a component.",
    "code": ""
  },
  {
    "id": "source-b22",
    "subject": "React.js",
    "section": "Props & State",
    "question": "What is lifting state up?",
    "answer": "Moving shared state to the nearest common parent so multiple children can use it.",
    "code": ""
  },
  {
    "id": "source-b35",
    "subject": "React.js",
    "section": "Hooks",
    "question": "useState vs useReducer?",
    "answer": "useState is for simple state. useReducer is for complex state with many actions.",
    "code": ""
  },
  {
    "id": "source-b38",
    "subject": "React.js",
    "section": "Hooks",
    "question": "Hooks in class components?",
    "answer": "No. Hooks work only in functional components and custom Hooks.",
    "code": ""
  },
  {
    "id": "source-b44",
    "subject": "React.js",
    "section": "Rendering & Performance",
    "question": "Why not use index as key?",
    "answer": "It can cause wrong updates when items are reordered, inserted or deleted. Use a stable unique ID.",
    "code": ""
  },
  {
    "id": "source-b53",
    "subject": "React.js",
    "section": "Rendering & Performance",
    "question": "What is hydration?",
    "answer": "React attaches event handlers and interactivity to HTML already rendered on the server.",
    "code": ""
  },
  {
    "id": "source-b54",
    "subject": "React.js",
    "section": "Rendering & Performance",
    "question": "What is Concurrent Rendering?",
    "answer": "React prepares and prioritizes UI updates without blocking the browser.",
    "code": ""
  },
  {
    "id": "source-b55",
    "subject": "React.js",
    "section": "Rendering & Performance",
    "question": "What is useTransition?",
    "answer": "Marks some state updates as non-urgent so important interactions stay responsive.",
    "code": ""
  },
  {
    "id": "source-b56",
    "subject": "React.js",
    "section": "Rendering & Performance",
    "question": "What is useDeferredValue?",
    "answer": "Lets a less urgent value update later to keep the UI responsive.",
    "code": ""
  },
  {
    "id": "source-b59",
    "subject": "React.js",
    "section": "Forms, API & Routing",
    "question": "Controlled vs uncontrolled?",
    "answer": "Controlled uses React state. Uncontrolled uses the DOM.",
    "code": ""
  },
  {
    "id": "source-b60",
    "subject": "React.js",
    "section": "Forms, API & Routing",
    "question": "How do you handle forms?",
    "answer": "State for values, handle submit, validate inputs, then send data to the backend API.",
    "code": ""
  },
  {
    "id": "source-b61",
    "subject": "React.js",
    "section": "Forms, API & Routing",
    "question": "How do you validate forms?",
    "answer": "Check required fields, email format, password rules and other values before submitting.",
    "code": ""
  },
  {
    "id": "source-b63",
    "subject": "React.js",
    "section": "Forms, API & Routing",
    "question": "What is Axios?",
    "answer": "A JavaScript library to make HTTP requests to backend APIs.",
    "code": ""
  },
  {
    "id": "source-b64",
    "subject": "React.js",
    "section": "Forms, API & Routing",
    "question": "fetch vs Axios?",
    "answer": "Fetch is built into browsers. Axios is an external library with extras like automatic JSON transformation.",
    "code": ""
  },
  {
    "id": "source-b65",
    "subject": "React.js",
    "section": "Forms, API & Routing",
    "question": "What are HTTP methods?",
    "answer": "GET fetch, POST create, PUT replace, PATCH partial update, DELETE remove.",
    "code": ""
  },
  {
    "id": "source-b67",
    "subject": "React.js",
    "section": "Forms, API & Routing",
    "question": "What is dynamic routing?",
    "answer": "Routes built with changing values like user ID. Example: /users/101",
    "code": "<Route path=\"/users/:id\" element={<User />} />"
  },
  {
    "id": "source-b68",
    "subject": "React.js",
    "section": "Forms, API & Routing",
    "question": "What is protected routing?",
    "answer": "Only authenticated or authorized users can open specific pages.",
    "code": ""
  },
  {
    "id": "source-b69",
    "subject": "React.js",
    "section": "Forms, API & Routing",
    "question": "Authentication vs authorization?",
    "answer": "Authentication checks who you are. Authorization checks what you can access.",
    "code": ""
  },
  {
    "id": "source-b72",
    "subject": "React.js",
    "section": "Redux",
    "question": "What is a Redux store?",
    "answer": "It holds the application’s shared state.",
    "code": ""
  },
  {
    "id": "source-b73",
    "subject": "React.js",
    "section": "Redux",
    "question": "What is an action?",
    "answer": "An object that describes what happened and may carry data to update state.",
    "code": ""
  },
  {
    "id": "source-b74",
    "subject": "React.js",
    "section": "Redux",
    "question": "What is a reducer?",
    "answer": "A function that takes current state and an action and returns the next state.",
    "code": ""
  },
  {
    "id": "source-b79",
    "subject": "React.js",
    "section": "Redux",
    "question": "What is middleware?",
    "answer": "Logic between dispatching an action and updating the store, such as async API calls.",
    "code": ""
  },
  {
    "id": "source-b80",
    "subject": "React.js",
    "section": "Practical",
    "question": "How do you manage state?",
    "answer": "useState for local state, Context for shared state, Redux Toolkit for complex global state.",
    "code": ""
  },
  {
    "id": "source-b82",
    "subject": "React.js",
    "section": "Practical",
    "question": "Parent to child data?",
    "answer": "Use props.",
    "code": ""
  },
  {
    "id": "source-b83",
    "subject": "React.js",
    "section": "Practical",
    "question": "How to show a loading spinner?",
    "answer": "Keep a loading state and show the spinner conditionally while the API request runs.",
    "code": ""
  },
  {
    "id": "source-b85",
    "subject": "React.js",
    "section": "Practical",
    "question": "How to implement search?",
    "answer": "Store input in state and filter data. For API search, call the backend with the search term.",
    "code": ""
  },
  {
    "id": "source-b86",
    "subject": "React.js",
    "section": "Practical",
    "question": "How to implement pagination?",
    "answer": "Split data into pages and show a limited number of records per page.",
    "code": ""
  },
  {
    "id": "source-b87",
    "subject": "React.js",
    "section": "Practical",
    "question": "How to implement login?",
    "answer": "Collect credentials, send to backend API, handle the response and manage the session securely.",
    "code": ""
  },
  {
    "id": "source-b88",
    "subject": "React.js",
    "section": "Practical",
    "question": "How to protect private pages?",
    "answer": "Check authentication and authorization before allowing access. The backend must verify permissions too.",
    "code": ""
  },
  {
    "id": "source-b89",
    "subject": "React.js",
    "section": "Practical",
    "question": "SPA vs MPA?",
    "answer": "SPA updates content without reloading the whole page. MPA loads separate pages from the server.",
    "code": ""
  },
  {
    "id": "source-b90",
    "subject": "React.js",
    "section": "Practical",
    "question": "CSR vs SSR?",
    "answer": "CSR renders in the browser with JavaScript. SSR generates HTML on the server first.",
    "code": ""
  },
  {
    "id": "source-b91",
    "subject": "React.js",
    "section": "Practical",
    "question": "What is React Native?",
    "answer": "A framework to build mobile apps using JavaScript and React concepts.",
    "code": ""
  },
  {
    "id": "source-b92",
    "subject": "React.js",
    "section": "Practical",
    "question": "What is package.json?",
    "answer": "Holds project info, dependencies, scripts and configuration.",
    "code": ""
  },
  {
    "id": "source-b93",
    "subject": "React.js",
    "section": "Practical",
    "question": "What is npm?",
    "answer": "Node Package Manager. Installs and manages JavaScript packages.",
    "code": ""
  },
  {
    "id": "source-b94",
    "subject": "React.js",
    "section": "Practical",
    "question": "What is Vite?",
    "answer": "A frontend build tool with a fast dev server and production build.",
    "code": ""
  },
  {
    "id": "source-r0",
    "subject": "React.js",
    "section": "Fundamentals",
    "question": "What is React.js?",
    "answer": "A JavaScript library used to build interactive user interfaces. It helps us create reusable UI components.",
    "code": "function App() {\n  return <h1>Hello Rahul!</h1>;\n}\nexport default App;"
  },
  {
    "id": "source-r1",
    "subject": "React.js",
    "section": "Fundamentals",
    "question": "What are the main features of React?",
    "answer": "Component-based architecture, Virtual DOM, JSX, reusable components, one-way data flow and Hooks.",
    "code": ""
  },
  {
    "id": "source-r2",
    "subject": "React.js",
    "section": "Fundamentals",
    "question": "What is a component in React?",
    "answer": "A reusable piece of UI that we can use in different parts of an application.",
    "code": "function Welcome() {\n  return <h1>Welcome Rahul</h1>;\n}"
  },
  {
    "id": "source-r3",
    "subject": "React.js",
    "section": "Fundamentals",
    "question": "What are the types of components?",
    "answer": "Two traditional types: functional components and class components. Modern React mainly uses functional components.",
    "code": ""
  },
  {
    "id": "source-r4",
    "subject": "React.js",
    "section": "Fundamentals",
    "question": "What is JSX?",
    "answer": "JavaScript XML. It lets us write HTML-like syntax inside JavaScript.",
    "code": "function App() {\n  const name = 'Rahul';\n  return <h1>Hello {name}</h1>;\n}"
  },
  {
    "id": "source-r5",
    "subject": "React.js",
    "section": "Fundamentals",
    "question": "What is the Virtual DOM?",
    "answer": "A lightweight representation of the real DOM. React uses it to calculate and apply necessary UI updates efficiently.",
    "code": ""
  },
  {
    "id": "source-r6",
    "subject": "React.js",
    "section": "Fundamentals",
    "question": "Virtual DOM vs Real DOM?",
    "answer": "Real DOM represents the actual webpage. Virtual DOM is a JavaScript representation of the UI. React compares changes and updates only the necessary parts of the real DOM.",
    "code": ""
  },
  {
    "id": "source-r7",
    "subject": "React.js",
    "section": "Fundamentals",
    "question": "What are props in React?",
    "answer": "Props pass data from a parent component to a child component.",
    "code": "function User(props) {\n  return <h1>Hello {props.name}</h1>;\n}\nfunction App() {\n  return <User name='Rahul' />;\n}\n// Output: Hello Rahul"
  },
  {
    "id": "source-r8",
    "subject": "React.js",
    "section": "Fundamentals",
    "question": "What is state in React?",
    "answer": "Data managed inside a component. When state changes, React can render the component again.",
    "code": "const [count, setCount] = useState(0);\n\n<button onClick={() => setCount(count + 1)}>\n  Count: {count}\n</button>"
  },
  {
    "id": "source-r9",
    "subject": "React.js",
    "section": "Fundamentals",
    "question": "Difference between props and state?",
    "answer": "Props are passed from the parent, read-only, and used to share data. State is managed inside the component, updated using a setter, and used for changing data.",
    "code": ""
  },
  {
    "id": "source-r10",
    "subject": "React.js",
    "section": "Fundamentals",
    "question": "What is one-way data binding?",
    "answer": "Data flows from parent components to child components through props.",
    "code": ""
  },
  {
    "id": "source-r11",
    "subject": "React.js",
    "section": "Fundamentals",
    "question": "What is conditional rendering?",
    "answer": "Displaying UI based on a condition.",
    "code": "{isLoggedIn ? <h1>Welcome</h1> : <h1>Please Login</h1>}"
  },
  {
    "id": "source-r12",
    "subject": "React.js",
    "section": "Fundamentals",
    "question": "How do you render a list in React?",
    "answer": "Use the map() method.",
    "code": "const users = ['Rahul', 'Amit', 'Ravi'];\n\n<ul>\n  {users.map(user => (\n    <li key={user}>{user}</li>\n  ))}\n</ul>"
  },
  {
    "id": "source-r13",
    "subject": "React.js",
    "section": "Fundamentals",
    "question": "Why are keys important in React?",
    "answer": "Keys help React identify which list items changed, were added or were removed.",
    "code": "{users.map(user => (\n  <p key={user.id}>{user.name}</p>\n))}"
  },
  {
    "id": "source-r14",
    "subject": "React.js",
    "section": "Fundamentals",
    "question": "What is React Fragment?",
    "answer": "Groups multiple elements without adding an extra DOM element.",
    "code": "<>\n  <h1>Hello</h1>\n  <p>Welcome to React</p>\n</>"
  },
  {
    "id": "source-r15",
    "subject": "React.js",
    "section": "Hooks",
    "question": "What are React Hooks?",
    "answer": "Special functions that let functional components use React features like state and lifecycle-related behavior. Examples: useState, useEffect, useMemo, useCallback.",
    "code": ""
  },
  {
    "id": "source-r16",
    "subject": "React.js",
    "section": "Hooks",
    "question": "What is useState?",
    "answer": "A Hook to manage state inside functional components.",
    "code": "const [name, setName] = useState('Rahul');\n\n<button onClick={() => setName('Amit')}>\n  Change Name\n</button>"
  },
  {
    "id": "source-r17",
    "subject": "React.js",
    "section": "Hooks",
    "question": "What is useEffect?",
    "answer": "Used to synchronize a component with external systems, such as API calls, subscriptions and browser events.",
    "code": "useEffect(() => {\n  console.log('Component mounted');\n}, []);"
  },
  {
    "id": "source-r18",
    "subject": "React.js",
    "section": "Hooks",
    "question": "Different useEffect dependency patterns?",
    "answer": "No array: runs after every render. Empty array: runs after the initial mount. With dependencies: runs when they change.",
    "code": "useEffect(() => { /* every render */ });\nuseEffect(() => { /* on mount */ }, []);\nuseEffect(() => { /* count changed */ }, [count]);"
  },
  {
    "id": "source-r19",
    "subject": "React.js",
    "section": "Hooks",
    "question": "What is the cleanup function in useEffect?",
    "answer": "Removes subscriptions, timers and event listeners when the effect re-runs or the component is removed.",
    "code": "useEffect(() => {\n  const timer = setInterval(() => console.log('Running'), 1000);\n  return () => clearInterval(timer);\n}, []);"
  },
  {
    "id": "source-r20",
    "subject": "React.js",
    "section": "Hooks",
    "question": "What is useRef?",
    "answer": "Stores a mutable value or accesses a DOM element without causing a re-render when it changes.",
    "code": "const inputRef = useRef(null);\n\n<input ref={inputRef} />\n<button onClick={() => inputRef.current.focus()}>\n  Focus Input\n</button>"
  },
  {
    "id": "source-r21",
    "subject": "React.js",
    "section": "Hooks",
    "question": "What is useMemo?",
    "answer": "Caches the result of a calculation between renders until its dependencies change.",
    "code": "const total = useMemo(() => {\n  return numbers.reduce((a, b) => a + b, 0);\n}, [numbers]);"
  },
  {
    "id": "source-r22",
    "subject": "React.js",
    "section": "Hooks",
    "question": "What is useCallback?",
    "answer": "Caches a function between renders until its dependencies change.",
    "code": "const handleClick = useCallback(() => {\n  console.log('Button clicked');\n}, []);"
  },
  {
    "id": "source-r23",
    "subject": "React.js",
    "section": "Hooks",
    "question": "useMemo vs useCallback?",
    "answer": "useMemo caches a calculated value. useCallback caches a function.",
    "code": "const total = useMemo(() => a + b, [a, b]);\nconst handle = useCallback(() => console.log('Hello'), []);"
  },
  {
    "id": "source-r24",
    "subject": "React.js",
    "section": "Hooks",
    "question": "What is useContext?",
    "answer": "Lets components access shared data without passing props through every intermediate component.",
    "code": "const UserContext = createContext();\n\nfunction Profile() {\n  const name = useContext(UserContext);\n  return <h1>{name}</h1>;\n}\n\n<UserContext.Provider value='Rahul'>\n  <Profile />\n</UserContext.Provider>"
  },
  {
    "id": "source-r25",
    "subject": "React.js",
    "section": "Hooks",
    "question": "What is useReducer?",
    "answer": "A Hook to manage complex state logic with a reducer function and actions.",
    "code": "function reducer(state, action) {\n  switch (action.type) {\n    case 'increment': return { count: state.count + 1 };\n    case 'decrement': return { count: state.count - 1 };\n    default: return state;\n  }\n}\nconst [state, dispatch] = useReducer(reducer, { count: 0 });\n\n<button onClick={() => dispatch({ type: 'increment' })}>+</button>"
  },
  {
    "id": "source-r26",
    "subject": "React.js",
    "section": "Hooks",
    "question": "What is useLayoutEffect?",
    "answer": "Runs after DOM updates but before the browser paints the screen. Useful to measure or synchronously adjust layout.",
    "code": ""
  },
  {
    "id": "source-r27",
    "subject": "React.js",
    "section": "Hooks",
    "question": "What is useId?",
    "answer": "Generates unique IDs for accessibility attributes and form elements.",
    "code": "const id = useId();\n\n<label htmlFor={id}>Name</label>\n<input id={id} />"
  },
  {
    "id": "source-r28",
    "subject": "React.js",
    "section": "Hooks",
    "question": "What are the Rules of Hooks?",
    "answer": "1) Call Hooks at the top level of a component or custom Hook. 2) Do not call them inside loops, conditions or nested functions. 3) Call them only from React components or custom Hooks.",
    "code": ""
  },
  {
    "id": "source-r29",
    "subject": "React.js",
    "section": "Hooks",
    "question": "What is a custom Hook?",
    "answer": "A reusable function that uses React Hooks to share stateful logic between components.",
    "code": "function useCounter() {\n  const [count, setCount] = useState(0);\n  const increment = () => setCount(c => c + 1);\n  return { count, increment };\n}\n\nconst { count, increment } = useCounter();"
  },
  {
    "id": "source-r30",
    "subject": "React.js",
    "section": "Advanced",
    "question": "What is React Router?",
    "answer": "A library to handle navigation between pages or routes in a React application.",
    "code": "<BrowserRouter>\n  <Routes>\n    <Route path='/' element={<h1>Home</h1>} />\n    <Route path='/about' element={<h1>About</h1>} />\n  </Routes>\n</BrowserRouter>"
  },
  {
    "id": "source-r31",
    "subject": "React.js",
    "section": "Advanced",
    "question": "What is Redux?",
    "answer": "A state management library to manage shared application state in a predictable way.",
    "code": ""
  },
  {
    "id": "source-r32",
    "subject": "React.js",
    "section": "Advanced",
    "question": "What is Redux Toolkit?",
    "answer": "The recommended way to write Redux logic. It reduces boilerplate and makes state management easier.",
    "code": ""
  },
  {
    "id": "source-r33",
    "subject": "React.js",
    "section": "Advanced",
    "question": "Redux vs Context API?",
    "answer": "Context API shares data between components. Redux provides structured global state management. Redux Toolkit adds slices and middleware.",
    "code": ""
  },
  {
    "id": "source-r34",
    "subject": "React.js",
    "section": "Advanced",
    "question": "What is useSelector?",
    "answer": "A React Redux Hook to read data from the Redux store.",
    "code": "const count = useSelector(state => state.counter.value);"
  },
  {
    "id": "source-r35",
    "subject": "React.js",
    "section": "Advanced",
    "question": "What is useDispatch?",
    "answer": "Dispatches actions to the Redux store.",
    "code": "const dispatch = useDispatch();\ndispatch(increment());"
  },
  {
    "id": "source-r36",
    "subject": "React.js",
    "section": "Advanced",
    "question": "What is createSlice?",
    "answer": "A Redux Toolkit function that creates reducers and action creators together.",
    "code": "const counterSlice = createSlice({\n  name: 'counter',\n  initialState: { value: 0 },\n  reducers: {\n    increment: state => { state.value += 1; }\n  }\n});\nexport const { increment } = counterSlice.actions;\nexport default counterSlice.reducer;"
  },
  {
    "id": "source-r37",
    "subject": "React.js",
    "section": "Advanced",
    "question": "What is React.memo?",
    "answer": "Prevents unnecessary re-rendering of a component when its props have not changed.",
    "code": "const User = React.memo(function User({ name }) {\n  console.log('User rendered');\n  return <h1>{name}</h1>;\n});"
  },
  {
    "id": "source-r38",
    "subject": "React.js",
    "section": "Advanced",
    "question": "What is prop drilling?",
    "answer": "Passing data through multiple components to reach a deeply nested child.",
    "code": ""
  },
  {
    "id": "source-r39",
    "subject": "React.js",
    "section": "Advanced",
    "question": "How can we avoid prop drilling?",
    "answer": "Use Context API, Redux or other state management solutions.",
    "code": ""
  },
  {
    "id": "source-r40",
    "subject": "React.js",
    "section": "Advanced",
    "question": "What is lazy loading?",
    "answer": "Loading components only when needed. It can reduce the initial JavaScript bundle size.",
    "code": "const About = lazy(() => import('./About'));\n\n<Suspense fallback={<p>Loading...</p>}>\n  <About />\n</Suspense>"
  },
  {
    "id": "source-r41",
    "subject": "React.js",
    "section": "Advanced",
    "question": "What is Suspense?",
    "answer": "Displays fallback UI while waiting for supported resources, such as a lazy-loaded component.",
    "code": ""
  },
  {
    "id": "source-r42",
    "subject": "React.js",
    "section": "Advanced",
    "question": "What are controlled components?",
    "answer": "Form elements whose value is managed by React state.",
    "code": "const [name, setName] = useState('');\n\n<input\n  value={name}\n  onChange={e => setName(e.target.value)}\n/>"
  },
  {
    "id": "source-r43",
    "subject": "React.js",
    "section": "Advanced",
    "question": "What are uncontrolled components?",
    "answer": "Form elements that manage their own value in the DOM. We read the value using refs.",
    "code": "const inputRef = useRef(null);\n\n<input ref={inputRef} />\n<button onClick={() => console.log(inputRef.current.value)}>\n  Submit\n</button>"
  },
  {
    "id": "source-r44",
    "subject": "React.js",
    "section": "Advanced",
    "question": "What is reconciliation in React?",
    "answer": "The process React uses to compare the previous UI tree with the new one and decide the necessary updates.",
    "code": ""
  },
  {
    "id": "source-r45",
    "subject": "React.js",
    "section": "Performance",
    "question": "What is code splitting?",
    "answer": "Dividing application JavaScript into smaller bundles that load when needed.",
    "code": ""
  },
  {
    "id": "source-r46",
    "subject": "React.js",
    "section": "Performance",
    "question": "useEffect vs useLayoutEffect?",
    "answer": "useEffect generally runs after the browser paints. useLayoutEffect runs after DOM changes but before the browser paints.",
    "code": ""
  },
  {
    "id": "source-r47",
    "subject": "React.js",
    "section": "Performance",
    "question": "What causes a component to re-render?",
    "answer": "Its state changes, its parent renders again, its consumed context value changes, or external store data it subscribes to changes.",
    "code": ""
  },
  {
    "id": "source-r48",
    "subject": "React.js",
    "section": "Performance",
    "question": "What is batching in React?",
    "answer": "React groups multiple state updates together to reduce unnecessary rendering.",
    "code": "function update() {\n  setCount(c => c + 1);\n  setName('Rahul');\n} // one re-render"
  },
  {
    "id": "source-r49",
    "subject": "React.js",
    "section": "Performance",
    "question": "What is StrictMode?",
    "answer": "A development tool that helps find potential problems. It can intentionally re-run certain functions and effects in development.",
    "code": ""
  },
  {
    "id": "source-r50",
    "subject": "React.js",
    "section": "Performance",
    "question": "What is an error boundary?",
    "answer": "Catches rendering errors in its child component tree and shows fallback UI instead of crashing the whole application. Traditional error boundaries are class components.",
    "code": ""
  },
  {
    "id": "source-r51",
    "subject": "React.js",
    "section": "Performance",
    "question": "What is createPortal?",
    "answer": "Renders a component outside its parent DOM hierarchy.",
    "code": "import { createPortal } from 'react-dom';\n\nfunction Modal() {\n  return createPortal(<h1>Modal Content</h1>, document.body);\n}"
  },
  {
    "id": "source-r52",
    "subject": "React.js",
    "section": "Performance",
    "question": "What is a synthetic event in React?",
    "answer": "React’s cross-browser wrapper around native browser events.",
    "code": "function handleClick(event) {\n  console.log(event.type);\n}\n<button onClick={handleClick}>Click</button>"
  },
  {
    "id": "source-r53",
    "subject": "React.js",
    "section": "Performance",
    "question": "onClick vs onclick?",
    "answer": "React uses camelCase event names like onClick. In regular HTML, event attributes are commonly written as onclick.",
    "code": "<button onClick={() => alert('Hello')}>\n  Click\n</button>"
  },
  {
    "id": "source-r54",
    "subject": "React.js",
    "section": "Performance",
    "question": "What is the key prop in React?",
    "answer": "Helps React identify list items uniquely when rendering or updating lists.",
    "code": ""
  },
  {
    "id": "source-r55",
    "subject": "React.js",
    "section": "Practical",
    "question": "How do you call an API in React?",
    "answer": "Use fetch or Axios inside useEffect to get data when a component loads.",
    "code": "const [users, setUsers] = useState([]);\n\nuseEffect(() => {\n  async function getUsers() {\n    const res = await fetch('https://jsonplaceholder.typicode.com/users');\n    setUsers(await res.json());\n  }\n  getUsers();\n}, []);"
  },
  {
    "id": "source-r56",
    "subject": "React.js",
    "section": "Practical",
    "question": "How do you handle API errors in React?",
    "answer": "Use try-catch and keep an error state.",
    "code": "try {\n  const res = await fetch('/api/users');\n  if (!res.ok) throw new Error('API request failed');\n  const data = await res.json();\n} catch (error) {\n  console.log(error.message);\n}"
  },
  {
    "id": "source-r57",
    "subject": "React.js",
    "section": "Practical",
    "question": "How do you pass data from child to parent?",
    "answer": "Pass a callback function from the parent to the child and call it from the child.",
    "code": "function Child({ sendData }) {\n  return <button onClick={() => sendData('Hello Rahul')}>Send</button>;\n}\nfunction Parent() {\n  const handleData = data => console.log(data);\n  return <Child sendData={handleData} />;\n}"
  },
  {
    "id": "source-r58",
    "subject": "React.js",
    "section": "Practical",
    "question": "How do you update an array in React state?",
    "answer": "Create a new array instead of directly modifying the existing state array.",
    "code": "const [items, setItems] = useState([1, 2, 3]);\n\nfunction addItem() {\n  setItems(prev => [...prev, 4]);\n}"
  },
  {
    "id": "source-r59",
    "subject": "React.js",
    "section": "Practical",
    "question": "How do you optimize a React application?",
    "answer": "Use React.memo, useMemo, useCallback, lazy loading, code splitting, proper state management and avoid unnecessary re-renders.",
    "code": ""
  },
  {
    "id": "source-x13",
    "subject": "JavaScript",
    "section": "JavaScript",
    "question": "Debounce vs throttle?",
    "answer": "Debounce runs a function after the user stops triggering it. Throttle runs it at most once in a fixed time. Example: search box uses debounce.",
    "code": ""
  },
  {
    "id": "source-x29",
    "subject": "Python",
    "section": "Python",
    "question": "What is pip?",
    "answer": "Python’s package manager used to install libraries. Example: pip install fastapi.",
    "code": ""
  },
  {
    "id": "source-x44",
    "subject": "Bootstrap",
    "section": "Bootstrap",
    "question": "What is Bootstrap?",
    "answer": "A CSS framework with ready-made classes and components to build responsive websites quickly.",
    "code": ""
  },
  {
    "id": "source-x45",
    "subject": "Bootstrap",
    "section": "Bootstrap",
    "question": "What is the Bootstrap grid system?",
    "answer": "A 12-column layout built with container, row and col classes.",
    "code": "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">Left</div>\n    <div class=\"col-md-6\">Right</div>\n  </div>\n</div>"
  },
  {
    "id": "source-x46",
    "subject": "Bootstrap",
    "section": "Bootstrap",
    "question": "What are Bootstrap breakpoints?",
    "answer": "Screen sizes where layout changes: sm, md, lg, xl and xxl.",
    "code": ""
  },
  {
    "id": "source-x47",
    "subject": "Bootstrap",
    "section": "Bootstrap",
    "question": "container vs container-fluid?",
    "answer": "container has a fixed max width. container-fluid takes the full width.",
    "code": ""
  },
  {
    "id": "source-x48",
    "subject": "Bootstrap",
    "section": "Bootstrap",
    "question": "How do you add Bootstrap?",
    "answer": "Through a CDN link, or by installing it with npm.",
    "code": "npm install bootstrap\nimport 'bootstrap/dist/css/bootstrap.min.css';"
  },
  {
    "id": "source-x49",
    "subject": "Bootstrap",
    "section": "Bootstrap",
    "question": "col-6 vs col-md-6?",
    "answer": "col-6 applies on all screens. col-md-6 applies from medium screens and up.",
    "code": ""
  },
  {
    "id": "source-x50",
    "subject": "Bootstrap",
    "section": "Bootstrap",
    "question": "What are utility classes?",
    "answer": "Small classes for spacing, color, display and more, like m-3, p-2, text-center, d-flex.",
    "code": ""
  },
  {
    "id": "source-x51",
    "subject": "Bootstrap",
    "section": "Bootstrap",
    "question": "How does spacing work?",
    "answer": "Format is property-side-size: m = margin, p = padding, t/b/s/e/x/y for sides, sizes 0–5. Example: mt-3, px-2.",
    "code": ""
  },
  {
    "id": "source-x52",
    "subject": "Bootstrap",
    "section": "Bootstrap",
    "question": "How do you center with flexbox in Bootstrap?",
    "answer": "Use flex utility classes.",
    "code": "<div class=\"d-flex justify-content-center align-items-center\">\n  Centered\n</div>"
  },
  {
    "id": "source-x53",
    "subject": "Bootstrap",
    "section": "Bootstrap",
    "question": "Name common Bootstrap components.",
    "answer": "Navbar, card, modal, button, alert, dropdown, carousel, form and table.",
    "code": ""
  },
  {
    "id": "source-x54",
    "subject": "Bootstrap",
    "section": "Bootstrap",
    "question": "How do you hide elements on some screens?",
    "answer": "Use display classes like d-none d-md-block.",
    "code": ""
  },
  {
    "id": "source-x55",
    "subject": "Bootstrap",
    "section": "Bootstrap",
    "question": "What is react-bootstrap?",
    "answer": "A library that provides Bootstrap components as React components without using jQuery.",
    "code": ""
  },
  {
    "id": "source-x56",
    "subject": "Bootstrap",
    "section": "Bootstrap",
    "question": "Bootstrap vs Tailwind CSS?",
    "answer": "Bootstrap gives ready-made components. Tailwind gives low-level utility classes for custom designs.",
    "code": ""
  },
  {
    "id": "source-x57",
    "subject": "Bootstrap",
    "section": "Bootstrap",
    "question": "How can you customize Bootstrap?",
    "answer": "Override CSS variables, write your own CSS, or change Sass variables before compiling.",
    "code": ""
  },
  {
    "id": "source-x58",
    "subject": "HTML",
    "section": "HTML",
    "question": "What is HTML?",
    "answer": "HyperText Markup Language. It defines the structure of a web page.",
    "code": ""
  },
  {
    "id": "source-x59",
    "subject": "HTML",
    "section": "HTML",
    "question": "What are semantic elements?",
    "answer": "Tags that describe their meaning, like header, nav, main, section, article and footer. They help SEO and accessibility.",
    "code": ""
  },
  {
    "id": "source-x60",
    "subject": "HTML",
    "section": "HTML",
    "question": "Block vs inline elements?",
    "answer": "Block elements start on a new line and take full width, like div and p. Inline elements stay in a line, like span and a.",
    "code": ""
  },
  {
    "id": "source-x61",
    "subject": "HTML",
    "section": "HTML",
    "question": "div vs span?",
    "answer": "div is a block container. span is an inline container.",
    "code": ""
  },
  {
    "id": "source-x62",
    "subject": "HTML",
    "section": "HTML",
    "question": "id vs class?",
    "answer": "id is unique for one element. class can be used on many elements.",
    "code": ""
  },
  {
    "id": "source-x63",
    "subject": "HTML",
    "section": "HTML",
    "question": "Common input types?",
    "answer": "text, email, password, number, checkbox, radio, date, file.",
    "code": "<input type=\"email\" required placeholder=\"Email\">"
  },
  {
    "id": "source-x64",
    "subject": "HTML",
    "section": "HTML",
    "question": "Why is the alt attribute important?",
    "answer": "It describes an image for screen readers, SEO and when the image fails to load.",
    "code": ""
  },
  {
    "id": "source-x65",
    "subject": "HTML",
    "section": "HTML",
    "question": "What is new in HTML5?",
    "answer": "Semantic tags, audio and video, canvas, local storage, new input types and form validation.",
    "code": ""
  },
  {
    "id": "source-x66",
    "subject": "HTML",
    "section": "HTML",
    "question": "What is the meta viewport tag?",
    "answer": "It makes the page responsive on mobile screens.",
    "code": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">"
  },
  {
    "id": "source-x67",
    "subject": "HTML",
    "section": "HTML",
    "question": "async vs defer in script?",
    "answer": "Both load the script without blocking HTML parsing. async runs as soon as downloaded. defer runs after HTML parsing finishes, in order.",
    "code": ""
  },
  {
    "id": "source-x68",
    "subject": "HTML",
    "section": "HTML",
    "question": "localStorage vs sessionStorage vs cookies?",
    "answer": "localStorage stays until cleared. sessionStorage clears when the tab closes. Cookies are small, sent to the server with requests and can expire.",
    "code": ""
  },
  {
    "id": "source-x69",
    "subject": "HTML",
    "section": "HTML",
    "question": "What are data attributes?",
    "answer": "Custom attributes starting with data- to store extra information on an element.",
    "code": "<button data-id=\"5\">Buy</button>"
  },
  {
    "id": "source-x70",
    "subject": "HTML",
    "section": "HTML",
    "question": "What is an iframe?",
    "answer": "A tag that embeds another web page inside the current page.",
    "code": ""
  },
  {
    "id": "source-x71",
    "subject": "HTML",
    "section": "HTML",
    "question": "What is ARIA?",
    "answer": "Attributes that improve accessibility for screen readers when semantic HTML is not enough.",
    "code": ""
  },
  {
    "id": "source-x72",
    "subject": "CSS",
    "section": "CSS",
    "question": "What is the CSS box model?",
    "answer": "Every element is a box made of content, padding, border and margin.",
    "code": ""
  },
  {
    "id": "source-x73",
    "subject": "CSS",
    "section": "CSS",
    "question": "What is CSS specificity?",
    "answer": "The rule that decides which style wins. Order: inline style > id > class > element.",
    "code": ""
  },
  {
    "id": "source-x74",
    "subject": "CSS",
    "section": "CSS",
    "question": "What are display values?",
    "answer": "block, inline, inline-block, flex, grid and none.",
    "code": ""
  },
  {
    "id": "source-x75",
    "subject": "CSS",
    "section": "CSS",
    "question": "Types of position?",
    "answer": "static, relative, absolute, fixed and sticky.",
    "code": ""
  },
  {
    "id": "source-x76",
    "subject": "CSS",
    "section": "CSS",
    "question": "What is Flexbox?",
    "answer": "A one-dimensional layout system to align items in a row or column.",
    "code": ".box {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}"
  },
  {
    "id": "source-x77",
    "subject": "CSS",
    "section": "CSS",
    "question": "What is CSS Grid?",
    "answer": "A two-dimensional layout system for rows and columns.",
    "code": ".grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}"
  },
  {
    "id": "source-x78",
    "subject": "CSS",
    "section": "CSS",
    "question": "Flexbox vs Grid?",
    "answer": "Flexbox is for one direction (row or column). Grid is for rows and columns together.",
    "code": ""
  },
  {
    "id": "source-x79",
    "subject": "CSS",
    "section": "CSS",
    "question": "What are media queries?",
    "answer": "They apply CSS only for certain screen sizes. Used for responsive design.",
    "code": "@media (max-width: 768px) {\n  .menu { display: none; }\n}"
  },
  {
    "id": "source-x80",
    "subject": "CSS",
    "section": "CSS",
    "question": "em vs rem vs px?",
    "answer": "px is fixed. em is relative to the parent font size. rem is relative to the root font size.",
    "code": ""
  },
  {
    "id": "source-x81",
    "subject": "CSS",
    "section": "CSS",
    "question": "Pseudo-class vs pseudo-element?",
    "answer": "Pseudo-class styles a state, like :hover. Pseudo-element styles a part of an element, like ::before.",
    "code": ""
  },
  {
    "id": "source-x82",
    "subject": "CSS",
    "section": "CSS",
    "question": "What is z-index?",
    "answer": "It controls which positioned element appears on top of others.",
    "code": ""
  },
  {
    "id": "source-x83",
    "subject": "CSS",
    "section": "CSS",
    "question": "What are CSS variables?",
    "answer": "Reusable values defined with --name and used with var().",
    "code": ":root { --main: #4f46e5; }\nbutton { background: var(--main); }"
  },
  {
    "id": "source-x84",
    "subject": "CSS",
    "section": "CSS",
    "question": "Transition vs animation?",
    "answer": "Transition changes smoothly between two states. Animation uses @keyframes for multiple steps.",
    "code": ""
  },
  {
    "id": "source-x85",
    "subject": "CSS",
    "section": "CSS",
    "question": "How do you center a div?",
    "answer": "Easiest way is flexbox or grid.",
    "code": ".parent {\n  display: grid;\n  place-items: center;\n}"
  },
  {
    "id": "source-j0",
    "subject": "JavaScript",
    "section": "Fundamentals",
    "question": "What is JavaScript?",
    "answer": "A programming language used to make websites interactive and dynamic.",
    "code": ""
  },
  {
    "id": "source-j1",
    "subject": "JavaScript",
    "section": "Fundamentals",
    "question": "What are data types in JavaScript?",
    "answer": "Primitive: String, Number, Boolean, Undefined, Null, BigInt, Symbol. Non-primitive: Object (arrays are objects too).",
    "code": "let name = 'Rahul';\nlet age = 27;\nlet isActive = true;\nlet user = { name: 'Rahul' };\nlet numbers = [1, 2, 3];"
  },
  {
    "id": "source-j2",
    "subject": "JavaScript",
    "section": "Fundamentals",
    "question": "Difference between var, let and const?",
    "answer": "var is function-scoped. let is block-scoped. const is block-scoped and cannot be reassigned.",
    "code": "var a = 10;\nlet b = 20;\nconst c = 30;"
  },
  {
    "id": "source-j3",
    "subject": "JavaScript",
    "section": "Fundamentals",
    "question": "Difference between == and ===?",
    "answer": "== compares values after type conversion. === compares value and type.",
    "code": "console.log(5 == '5');  // true\nconsole.log(5 === '5'); // false"
  },
  {
    "id": "source-j4",
    "subject": "JavaScript",
    "section": "Fundamentals",
    "question": "What is undefined?",
    "answer": "A variable is declared but has not been assigned a value.",
    "code": "let name;\nconsole.log(name); // undefined"
  },
  {
    "id": "source-j5",
    "subject": "JavaScript",
    "section": "Fundamentals",
    "question": "What is null?",
    "answer": "Null represents an intentional empty value.",
    "code": "let user = null;\nconsole.log(user); // null"
  },
  {
    "id": "source-j6",
    "subject": "JavaScript",
    "section": "Fundamentals",
    "question": "What is scope?",
    "answer": "Scope defines where a variable can be accessed: global scope, function scope and block scope.",
    "code": ""
  },
  {
    "id": "source-j7",
    "subject": "JavaScript",
    "section": "Fundamentals",
    "question": "What is hoisting?",
    "answer": "JavaScript processes declarations before executing the code.",
    "code": "console.log(a); // undefined\nvar a = 10;"
  },
  {
    "id": "source-j8",
    "subject": "JavaScript",
    "section": "Fundamentals",
    "question": "What is a function?",
    "answer": "A reusable block of code that performs a specific task.",
    "code": "function add(a, b) {\n  return a + b;\n}\nconsole.log(add(10, 20)); // 30"
  },
  {
    "id": "source-j9",
    "subject": "JavaScript",
    "section": "Fundamentals",
    "question": "What is an arrow function?",
    "answer": "A shorter way to write a function.",
    "code": "const add = (a, b) => a + b;\nconsole.log(add(5, 10)); // 15"
  },
  {
    "id": "source-j10",
    "subject": "JavaScript",
    "section": "Fundamentals",
    "question": "What is a callback function?",
    "answer": "A function passed as an argument to another function.",
    "code": "function greet(callback) {\n  console.log('Hello');\n  callback();\n}\ngreet(() => console.log('Rahul'));"
  },
  {
    "id": "source-j11",
    "subject": "JavaScript",
    "section": "Fundamentals",
    "question": "What is a closure?",
    "answer": "A function that remembers variables from its outer scope.",
    "code": "function outer() {\n  let count = 0;\n  return function() {\n    count++;\n    console.log(count);\n  };\n}\nlet result = outer();\nresult(); // 1\nresult(); // 2"
  },
  {
    "id": "source-j12",
    "subject": "JavaScript",
    "section": "Fundamentals",
    "question": "What is a higher-order function?",
    "answer": "A function that accepts another function as an argument or returns a function.",
    "code": "function calculate(a, b, operation) {\n  return operation(a, b);\n}\ncalculate(10, 20, (x, y) => x + y);"
  },
  {
    "id": "source-j13",
    "subject": "JavaScript",
    "section": "Fundamentals",
    "question": "What is recursion?",
    "answer": "A function calls itself until a stopping condition is reached.",
    "code": "function count(num) {\n  if (num === 0) return;\n  console.log(num);\n  count(num - 1);\n}\ncount(5);"
  },
  {
    "id": "source-j14",
    "subject": "JavaScript",
    "section": "Fundamentals",
    "question": "Function declaration vs function expression?",
    "answer": "A declaration defines a function directly. An expression stores a function in a variable.",
    "code": "function hello() {\n  console.log('Hello');\n}\n\nconst greet = function() {\n  console.log('Welcome');\n};"
  },
  {
    "id": "source-j15",
    "subject": "JavaScript",
    "section": "Arrays & Objects",
    "question": "What is an array?",
    "answer": "An array stores multiple values in one variable.",
    "code": "let fruits = ['Apple', 'Mango', 'Banana'];\nconsole.log(fruits[0]); // Apple"
  },
  {
    "id": "source-j16",
    "subject": "JavaScript",
    "section": "Arrays & Objects",
    "question": "What is an object?",
    "answer": "An object stores data in key-value pairs.",
    "code": "let user = { name: 'Rahul', age: 27 };\nconsole.log(user.name);"
  },
  {
    "id": "source-j17",
    "subject": "JavaScript",
    "section": "Arrays & Objects",
    "question": "What is map()?",
    "answer": "Creates a new array by transforming every element.",
    "code": "[1, 2, 3].map(num => num * 2); // [2, 4, 6]"
  },
  {
    "id": "source-j18",
    "subject": "JavaScript",
    "section": "Arrays & Objects",
    "question": "What is filter()?",
    "answer": "Creates a new array with elements that match a condition.",
    "code": "[1, 2, 3, 4, 5].filter(num => num > 2); // [3, 4, 5]"
  },
  {
    "id": "source-j19",
    "subject": "JavaScript",
    "section": "Arrays & Objects",
    "question": "What is reduce()?",
    "answer": "Combines array elements into a single result.",
    "code": "[10, 20, 30].reduce((sum, num) => sum + num, 0); // 60"
  },
  {
    "id": "source-j20",
    "subject": "JavaScript",
    "section": "Arrays & Objects",
    "question": "map() vs filter() vs forEach()?",
    "answer": "map transforms elements and returns a new array. filter selects matching elements and returns a new array. forEach runs a function for each element and returns undefined.",
    "code": ""
  },
  {
    "id": "source-j21",
    "subject": "JavaScript",
    "section": "Arrays & Objects",
    "question": "What is find()?",
    "answer": "Returns the first element that matches a condition.",
    "code": "[10, 20, 30, 40].find(num => num > 20); // 30"
  },
  {
    "id": "source-j22",
    "subject": "JavaScript",
    "section": "Arrays & Objects",
    "question": "find() vs filter()?",
    "answer": "find returns the first matching element. filter returns all matching elements in an array.",
    "code": ""
  },
  {
    "id": "source-j23",
    "subject": "JavaScript",
    "section": "Arrays & Objects",
    "question": "What is the spread operator?",
    "answer": "Spread (...) expands elements from an array or object.",
    "code": "let a = [1, 2, 3];\nlet b = [...a, 4, 5]; // [1, 2, 3, 4, 5]"
  },
  {
    "id": "source-j24",
    "subject": "JavaScript",
    "section": "Arrays & Objects",
    "question": "What is the rest operator?",
    "answer": "Rest (...) collects multiple arguments into an array.",
    "code": "function add(...numbers) {\n  return numbers.reduce((a, b) => a + b, 0);\n}\nadd(10, 20, 30); // 60"
  },
  {
    "id": "source-j25",
    "subject": "JavaScript",
    "section": "Arrays & Objects",
    "question": "What is destructuring?",
    "answer": "Extracts values from arrays or objects into variables.",
    "code": "let user = { name: 'Rahul', age: 27 };\nlet { name, age } = user;"
  },
  {
    "id": "source-j26",
    "subject": "JavaScript",
    "section": "Arrays & Objects",
    "question": "slice() vs splice()?",
    "answer": "slice returns a portion without changing the original array. splice modifies the original array.",
    "code": "let arr = [10, 20, 30, 40];\narr.slice(1, 3); // [20, 30]\narr.splice(1, 2);\nconsole.log(arr); // [10, 40]"
  },
  {
    "id": "source-j27",
    "subject": "JavaScript",
    "section": "Arrays & Objects",
    "question": "push() vs pop()?",
    "answer": "push adds an element at the end. pop removes the last element.",
    "code": "let arr = [1, 2, 3];\narr.push(4);\narr.pop(); // [1, 2, 3]"
  },
  {
    "id": "source-j28",
    "subject": "JavaScript",
    "section": "Arrays & Objects",
    "question": "shift() vs unshift()?",
    "answer": "shift removes the first element. unshift adds an element at the beginning.",
    "code": "let arr = [2, 3];\narr.unshift(1);\narr.shift(); // [2, 3]"
  },
  {
    "id": "source-j29",
    "subject": "JavaScript",
    "section": "Arrays & Objects",
    "question": "What is a template literal?",
    "answer": "Template literals use backticks to insert variables into strings.",
    "code": "let name = 'Rahul';\nconsole.log(`My name is ${name}`);"
  },
  {
    "id": "source-j30",
    "subject": "JavaScript",
    "section": "Advanced",
    "question": "What is a Promise?",
    "answer": "A Promise handles asynchronous operations. It has three states: pending, fulfilled and rejected.",
    "code": "const promise = new Promise((resolve, reject) => {\n  resolve('Success');\n});\npromise.then(result => console.log(result));"
  },
  {
    "id": "source-j31",
    "subject": "JavaScript",
    "section": "Advanced",
    "question": "What is async/await?",
    "answer": "Makes asynchronous code easier to read and write.",
    "code": "async function getData() {\n  const res = await fetch('https://jsonplaceholder.typicode.com/users');\n  const data = await res.json();\n  console.log(data);\n}"
  },
  {
    "id": "source-j32",
    "subject": "JavaScript",
    "section": "Advanced",
    "question": "Promise vs async/await?",
    "answer": "Both handle asynchronous operations. async/await gives cleaner syntax for working with Promises.",
    "code": ""
  },
  {
    "id": "source-j33",
    "subject": "JavaScript",
    "section": "Advanced",
    "question": "What is the event loop?",
    "answer": "It manages asynchronous callbacks and runs them when the call stack is free.",
    "code": "console.log('Start');\nsetTimeout(() => console.log('Middle'), 0);\nconsole.log('End');\n// Start, End, Middle"
  },
  {
    "id": "source-j34",
    "subject": "JavaScript",
    "section": "Advanced",
    "question": "What is synchronous JavaScript?",
    "answer": "Code that runs one operation at a time, in order.",
    "code": ""
  },
  {
    "id": "source-j35",
    "subject": "JavaScript",
    "section": "Advanced",
    "question": "What is asynchronous JavaScript?",
    "answer": "Code where some operations finish later without blocking the main execution flow.",
    "code": ""
  },
  {
    "id": "source-j36",
    "subject": "JavaScript",
    "section": "Advanced",
    "question": "What is the this keyword?",
    "answer": "this refers to the object associated with the current function call.",
    "code": "const user = {\n  name: 'Rahul',\n  greet() { console.log(this.name); }\n};\nuser.greet(); // Rahul"
  },
  {
    "id": "source-j37",
    "subject": "JavaScript",
    "section": "Advanced",
    "question": "call() vs apply() vs bind()?",
    "answer": "All three control the value of this. call passes arguments one by one. apply passes them in an array. bind returns a new function with a fixed this.",
    "code": "function greet(city) {\n  console.log(this.name, city);\n}\nconst user = { name: 'Rahul' };\ngreet.call(user, 'Bangalore');\ngreet.apply(user, ['Bangalore']);\ngreet.bind(user, 'Bangalore')();"
  },
  {
    "id": "source-j38",
    "subject": "JavaScript",
    "section": "Advanced",
    "question": "What is the DOM?",
    "answer": "Document Object Model. It lets JavaScript access and modify HTML elements.",
    "code": "document.getElementById('heading').innerText = 'Hello Rahul';"
  },
  {
    "id": "source-j39",
    "subject": "JavaScript",
    "section": "Advanced",
    "question": "What is event bubbling?",
    "answer": "An event starts at the target element and moves up to its parent elements.",
    "code": ""
  },
  {
    "id": "source-j40",
    "subject": "JavaScript",
    "section": "Advanced",
    "question": "What is event capturing?",
    "answer": "An event travels from the outer parent down towards the target element.",
    "code": ""
  },
  {
    "id": "source-j41",
    "subject": "JavaScript",
    "section": "Advanced",
    "question": "What is event delegation?",
    "answer": "One event listener on a parent handles events from its child elements.",
    "code": "document.getElementById('list').addEventListener('click', e => {\n  if (e.target.tagName === 'LI') {\n    console.log(e.target.innerText);\n  }\n});"
  },
  {
    "id": "source-j42",
    "subject": "JavaScript",
    "section": "Advanced",
    "question": "What is localStorage?",
    "answer": "Stores data in the browser until it is manually removed.",
    "code": "localStorage.setItem('name', 'Rahul');\nlocalStorage.getItem('name');"
  },
  {
    "id": "source-j43",
    "subject": "JavaScript",
    "section": "Advanced",
    "question": "localStorage vs sessionStorage?",
    "answer": "localStorage keeps data until removed. sessionStorage keeps data only for the current tab session.",
    "code": ""
  },
  {
    "id": "source-j44",
    "subject": "JavaScript",
    "section": "Advanced",
    "question": "What is JSON?",
    "answer": "JavaScript Object Notation. A format to exchange data between applications.",
    "code": "let data = JSON.stringify({ name: 'Rahul' });\nlet obj = JSON.parse(data);\nconsole.log(obj.name);"
  },
  {
    "id": "source-j45",
    "subject": "JavaScript",
    "section": "ES6 & Concepts",
    "question": "What is ES6?",
    "answer": "A major JavaScript update from 2015. It added let, const, arrow functions, classes, promises, destructuring and more.",
    "code": ""
  },
  {
    "id": "source-j46",
    "subject": "JavaScript",
    "section": "ES6 & Concepts",
    "question": "Primitive vs reference data types?",
    "answer": "Primitive values store individual values. Objects and arrays are reference types: variables hold a reference to them.",
    "code": ""
  },
  {
    "id": "source-j47",
    "subject": "JavaScript",
    "section": "ES6 & Concepts",
    "question": "What is a shallow copy?",
    "answer": "A new object is created, but nested objects are still shared references.",
    "code": "let user = { name: 'Rahul', address: { city: 'Bangalore' } };\nlet copy = { ...user };\ncopy.name = 'Amit';\nconsole.log(user.name); // Rahul\ncopy.address.city = 'Delhi';\nconsole.log(user.address.city); // Delhi"
  },
  {
    "id": "source-j48",
    "subject": "JavaScript",
    "section": "ES6 & Concepts",
    "question": "What is a deep copy?",
    "answer": "An independent copy that includes nested objects.",
    "code": "let copy = structuredClone(user);\ncopy.address.city = 'Delhi';\nconsole.log(user.address.city); // Bangalore"
  },
  {
    "id": "source-j49",
    "subject": "JavaScript",
    "section": "ES6 & Concepts",
    "question": "What is optional chaining?",
    "answer": "Optional chaining (?.) safely reads nested properties when a value may be null or undefined.",
    "code": "let user = { name: 'Rahul' };\nconsole.log(user.address?.city); // undefined"
  },
  {
    "id": "source-j50",
    "subject": "JavaScript",
    "section": "Coding",
    "question": "Coding: Reverse a string",
    "answer": "Split into characters, reverse, then join.",
    "code": "let result = 'Rahul'.split('').reverse().join('');\nconsole.log(result); // luhaR"
  },
  {
    "id": "source-j51",
    "subject": "JavaScript",
    "section": "Coding",
    "question": "Coding: Largest number in an array",
    "answer": "Use Math.max with spread.",
    "code": "let arr = [10, 50, 20, 80, 30];\nconsole.log(Math.max(...arr)); // 80"
  },
  {
    "id": "source-j52",
    "subject": "JavaScript",
    "section": "Coding",
    "question": "Coding: Check even or odd",
    "answer": "Use the remainder operator.",
    "code": "let num = 10;\nif (num % 2 === 0) console.log('Even');\nelse console.log('Odd');"
  },
  {
    "id": "source-j53",
    "subject": "JavaScript",
    "section": "Coding",
    "question": "Coding: Remove duplicate values",
    "answer": "Use a Set and spread it back into an array.",
    "code": "let arr = [1, 2, 2, 3, 3, 4];\nconsole.log([...new Set(arr)]); // [1, 2, 3, 4]"
  },
  {
    "id": "source-j54",
    "subject": "JavaScript",
    "section": "Coding",
    "question": "Coding: Sum of an array",
    "answer": "Use reduce.",
    "code": "let arr = [10, 20, 30, 40];\nlet sum = arr.reduce((t, n) => t + n, 0); // 100"
  },
  {
    "id": "source-j55",
    "subject": "JavaScript",
    "section": "Coding",
    "question": "Coding: Check palindrome",
    "answer": "Reverse the string and compare it with the original.",
    "code": "let str = 'madam';\nlet rev = str.split('').reverse().join('');\nconsole.log(str === rev); // true"
  },
  {
    "id": "source-j56",
    "subject": "JavaScript",
    "section": "Coding",
    "question": "Coding: Factorial",
    "answer": "Multiply numbers from 1 to n in a loop.",
    "code": "function factorial(num) {\n  let result = 1;\n  for (let i = 1; i <= num; i++) result *= i;\n  return result;\n}\nconsole.log(factorial(5)); // 120"
  },
  {
    "id": "source-j57",
    "subject": "JavaScript",
    "section": "Coding",
    "question": "Coding: Second-largest number",
    "answer": "Remove duplicates, sort descending, take index 1.",
    "code": "let arr = [10, 50, 30, 80, 40];\nlet unique = [...new Set(arr)];\nunique.sort((a, b) => b - a);\nconsole.log(unique[1]); // 50"
  },
  {
    "id": "source-j58",
    "subject": "JavaScript",
    "section": "Coding",
    "question": "Coding: Count vowels in a string",
    "answer": "Match vowels with a regex and count them.",
    "code": "let str = 'javascript';\nlet count = str.match(/[aeiou]/gi)?.length || 0;\nconsole.log(count); // 3"
  },
  {
    "id": "source-j59",
    "subject": "JavaScript",
    "section": "Coding",
    "question": "Coding: Frequency of each element",
    "answer": "Use reduce to build a count object.",
    "code": "let arr = ['a', 'b', 'a', 'c', 'b', 'a'];\nlet result = arr.reduce((acc, item) => {\n  acc[item] = (acc[item] || 0) + 1;\n  return acc;\n}, {});\n// { a: 3, b: 2, c: 1 }"
  },
  {
    "id": "source-p0",
    "subject": "Python",
    "section": "Fundamentals",
    "question": "What is Python?",
    "answer": "A high-level, interpreted programming language. It is easy to read and used for web development, automation, APIs and AI.",
    "code": "name = 'Rahul'\nprint('Hello', name)  # Hello Rahul"
  },
  {
    "id": "source-p1",
    "subject": "Python",
    "section": "Fundamentals",
    "question": "What are the features of Python?",
    "answer": "Easy to learn, interpreted, object-oriented, dynamically typed, large library support and cross-platform.",
    "code": ""
  },
  {
    "id": "source-p2",
    "subject": "Python",
    "section": "Fundamentals",
    "question": "What are Python data types?",
    "answer": "Different types store different kinds of values.",
    "code": "name = 'Rahul'           # String\nage = 27                 # Integer\nsalary = 45000.50        # Float\nis_active = True         # Boolean\nnumbers = [1, 2, 3]      # List\ndata = (1, 2, 3)         # Tuple\nuser = {'name': 'Rahul'} # Dictionary"
  },
  {
    "id": "source-p3",
    "subject": "Python",
    "section": "Fundamentals",
    "question": "What is the difference between list and tuple?",
    "answer": "A list is mutable. A tuple is immutable.",
    "code": "my_list = [10, 20, 30]\nmy_list[0] = 100\n\nmy_tuple = (10, 20, 30)\n# my_tuple[0] = 100  # Error"
  },
  {
    "id": "source-p4",
    "subject": "Python",
    "section": "Fundamentals",
    "question": "What is a dictionary?",
    "answer": "Stores data in key-value pairs.",
    "code": "user = {\n  'name': 'Rahul',\n  'age': 27,\n  'city': 'Bangalore'\n}\nprint(user['name'])  # Rahul"
  },
  {
    "id": "source-p5",
    "subject": "Python",
    "section": "Fundamentals",
    "question": "What is a set?",
    "answer": "An unordered collection of unique elements.",
    "code": "numbers = {1, 2, 2, 3, 4}\nprint(numbers)  # {1, 2, 3, 4}"
  },
  {
    "id": "source-p6",
    "subject": "Python",
    "section": "Fundamentals",
    "question": "Mutable vs immutable?",
    "answer": "Mutable objects can be changed after creation. Immutable objects cannot.",
    "code": "# Mutable\nnumbers = [1, 2, 3]\nnumbers[0] = 10\n\n# Immutable\nname = 'Rahul'  # strings cannot be changed in place"
  },
  {
    "id": "source-p7",
    "subject": "Python",
    "section": "Fundamentals",
    "question": "What is indentation in Python?",
    "answer": "Spaces at the beginning of a line. Python uses indentation to define code blocks.",
    "code": "if True:\n    print('Hello Rahul')"
  },
  {
    "id": "source-p8",
    "subject": "Python",
    "section": "Fundamentals",
    "question": "What is a variable in Python?",
    "answer": "A name used to store a value.",
    "code": "name = 'Rahul'\nage = 27"
  },
  {
    "id": "source-p9",
    "subject": "Python",
    "section": "Fundamentals",
    "question": "What is dynamic typing?",
    "answer": "Python decides the data type of a variable at runtime.",
    "code": "x = 10\nx = 'Rahul'\nprint(x)"
  },
  {
    "id": "source-p10",
    "subject": "Python",
    "section": "Fundamentals",
    "question": "What is type casting?",
    "answer": "Converting one data type into another.",
    "code": "age = '27'\nnumber = int(age)\nprint(number + 3)  # 30"
  },
  {
    "id": "source-p11",
    "subject": "Python",
    "section": "Fundamentals",
    "question": "Difference between is and ==?",
    "answer": "== checks whether values are equal. is checks whether two references point to the same object.",
    "code": "a = [1, 2]\nb = [1, 2]\nprint(a == b)  # True\nprint(a is b)  # False"
  },
  {
    "id": "source-p12",
    "subject": "Python",
    "section": "Fundamentals",
    "question": "What are Python operators?",
    "answer": "Operators perform operations on values and variables.",
    "code": "a = 10\nb = 5\nprint(a + b)  # 15\nprint(a - b)  # 5\nprint(a * b)  # 50\nprint(a / b)  # 2.0"
  },
  {
    "id": "source-p13",
    "subject": "Python",
    "section": "Fundamentals",
    "question": "break vs continue vs pass?",
    "answer": "break stops the loop. continue skips the current iteration. pass does nothing and is used as a placeholder.",
    "code": "for i in range(5):\n    if i == 2:\n        continue\n    print(i)"
  },
  {
    "id": "source-p14",
    "subject": "Python",
    "section": "Fundamentals",
    "question": "What is a loop in Python?",
    "answer": "Executes a block of code repeatedly.",
    "code": "for i in range(1, 6):\n    print(i)"
  },
  {
    "id": "source-p15",
    "subject": "Python",
    "section": "Functions & OOP",
    "question": "What is a function?",
    "answer": "A reusable block of code that performs a specific task.",
    "code": "def add(a, b):\n    return a + b\n\nprint(add(10, 20))  # 30"
  },
  {
    "id": "source-p16",
    "subject": "Python",
    "section": "Functions & OOP",
    "question": "Parameters vs arguments?",
    "answer": "Parameters are variables defined in a function. Arguments are the actual values passed to it.",
    "code": "def greet(name):   # parameter\n    print(name)\n\ngreet('Rahul')     # argument"
  },
  {
    "id": "source-p17",
    "subject": "Python",
    "section": "Functions & OOP",
    "question": "What is *args?",
    "answer": "Lets a function accept multiple positional arguments.",
    "code": "def add(*args):\n    return sum(args)\n\nprint(add(10, 20, 30))  # 60"
  },
  {
    "id": "source-p18",
    "subject": "Python",
    "section": "Functions & OOP",
    "question": "What is **kwargs?",
    "answer": "Lets a function accept multiple keyword arguments as a dictionary.",
    "code": "def user(**kwargs):\n    print(kwargs)\n\nuser(name='Rahul', age=27)"
  },
  {
    "id": "source-p19",
    "subject": "Python",
    "section": "Functions & OOP",
    "question": "What is a lambda function?",
    "answer": "A small anonymous function written in one expression.",
    "code": "square = lambda x: x * x\nprint(square(5))  # 25"
  },
  {
    "id": "source-p20",
    "subject": "Python",
    "section": "Functions & OOP",
    "question": "What is recursion?",
    "answer": "A function calls itself.",
    "code": "def factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))  # 120"
  },
  {
    "id": "source-p21",
    "subject": "Python",
    "section": "Functions & OOP",
    "question": "What is a class?",
    "answer": "A blueprint used to create objects.",
    "code": "class User:\n    name = 'Rahul'\n\nuser = User()\nprint(user.name)"
  },
  {
    "id": "source-p22",
    "subject": "Python",
    "section": "Functions & OOP",
    "question": "What is an object?",
    "answer": "An instance of a class. It contains data and behavior.",
    "code": "class Car:\n    def start(self):\n        print('Car started')\n\ncar = Car()\ncar.start()"
  },
  {
    "id": "source-p23",
    "subject": "Python",
    "section": "Functions & OOP",
    "question": "What is __init__()?",
    "answer": "A special method that initializes an object’s attributes when the object is created.",
    "code": "class User:\n    def __init__(self, name):\n        self.name = name\n\nuser = User('Rahul')\nprint(user.name)"
  },
  {
    "id": "source-p24",
    "subject": "Python",
    "section": "Functions & OOP",
    "question": "What is self in Python?",
    "answer": "self refers to the current instance of a class. It is used to access instance attributes and methods.",
    "code": "class User:\n    def __init__(self, name):\n        self.name = name\n    def show(self):\n        print(self.name)\n\nUser('Rahul').show()"
  },
  {
    "id": "source-p25",
    "subject": "Python",
    "section": "Functions & OOP",
    "question": "What is inheritance?",
    "answer": "One class reuses properties and methods from another class.",
    "code": "class Animal:\n    def sound(self):\n        print('Animal sound')\n\nclass Dog(Animal):\n    pass\n\nDog().sound()"
  },
  {
    "id": "source-p26",
    "subject": "Python",
    "section": "Functions & OOP",
    "question": "What is polymorphism?",
    "answer": "The same method name can behave differently depending on the object.",
    "code": "class Dog:\n    def sound(self): print('Bark')\nclass Cat:\n    def sound(self): print('Meow')\n\nfor animal in [Dog(), Cat()]:\n    animal.sound()"
  },
  {
    "id": "source-p27",
    "subject": "Python",
    "section": "Functions & OOP",
    "question": "What is encapsulation?",
    "answer": "Combining data and methods inside a class and controlling access to the data.",
    "code": "class Bank:\n    def __init__(self):\n        self.__balance = 1000\n    def get_balance(self):\n        return self.__balance\n\nprint(Bank().get_balance())"
  },
  {
    "id": "source-p28",
    "subject": "Python",
    "section": "Functions & OOP",
    "question": "What is abstraction?",
    "answer": "Hiding implementation details and showing only the necessary functionality.",
    "code": "from abc import ABC, abstractmethod\n\nclass Payment(ABC):\n    @abstractmethod\n    def pay(self): pass\n\nclass UpiPayment(Payment):\n    def pay(self):\n        print('Payment successful')\n\nUpiPayment().pay()"
  },
  {
    "id": "source-p29",
    "subject": "Python",
    "section": "Functions & OOP",
    "question": "What is method overriding?",
    "answer": "A child class provides its own implementation of a parent class method.",
    "code": "class Animal:\n    def sound(self):\n        print('Animal sound')\n\nclass Dog(Animal):\n    def sound(self):\n        print('Dog barks')\n\nDog().sound()"
  },
  {
    "id": "source-p30",
    "subject": "Python",
    "section": "Advanced",
    "question": "What is exception handling?",
    "answer": "Handling runtime errors without stopping the entire program unexpectedly.",
    "code": "try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')"
  },
  {
    "id": "source-p31",
    "subject": "Python",
    "section": "Advanced",
    "question": "try vs except vs else vs finally?",
    "answer": "try has risky code. except handles errors. else runs if no exception occurs. finally runs whether an exception occurs or not.",
    "code": "try:\n    num = int('10')\nexcept ValueError:\n    print('Invalid number')\nelse:\n    print(num)\nfinally:\n    print('Finished')"
  },
  {
    "id": "source-p32",
    "subject": "Python",
    "section": "Advanced",
    "question": "What is a module?",
    "answer": "A Python file containing reusable code such as functions, variables or classes.",
    "code": "import math\nprint(math.sqrt(25))"
  },
  {
    "id": "source-p33",
    "subject": "Python",
    "section": "Advanced",
    "question": "What is a package?",
    "answer": "A way to organize related Python modules into a directory structure.",
    "code": ""
  },
  {
    "id": "source-p34",
    "subject": "Python",
    "section": "Advanced",
    "question": "What is list comprehension?",
    "answer": "A short way to create a new list.",
    "code": "numbers = [1, 2, 3, 4, 5]\nsquares = [x * x for x in numbers]\nprint(squares)  # [1, 4, 9, 16, 25]"
  },
  {
    "id": "source-p35",
    "subject": "Python",
    "section": "Advanced",
    "question": "What is a generator?",
    "answer": "Produces values one at a time using yield, instead of storing all results in memory.",
    "code": "def numbers():\n    yield 1\n    yield 2\n    yield 3\n\nfor num in numbers():\n    print(num)"
  },
  {
    "id": "source-p36",
    "subject": "Python",
    "section": "Advanced",
    "question": "return vs yield?",
    "answer": "return ends a function and sends back a value. yield produces a value and pauses the generator so it can continue later.",
    "code": ""
  },
  {
    "id": "source-p37",
    "subject": "Python",
    "section": "Advanced",
    "question": "What is an iterator?",
    "answer": "An object that returns values one at a time using __next__().",
    "code": "numbers = iter([10, 20, 30])\nprint(next(numbers))  # 10\nprint(next(numbers))  # 20"
  },
  {
    "id": "source-p38",
    "subject": "Python",
    "section": "Advanced",
    "question": "What is a decorator?",
    "answer": "Adds extra functionality to a function without changing its original code.",
    "code": "def my_decorator(func):\n    def wrapper():\n        print('Before function')\n        func()\n        print('After function')\n    return wrapper\n\n@my_decorator\ndef greet():\n    print('Hello Rahul')\n\ngreet()"
  },
  {
    "id": "source-p39",
    "subject": "Python",
    "section": "Advanced",
    "question": "Shallow copy vs deep copy?",
    "answer": "A shallow copy copies the outer object but shares nested objects. A deep copy also copies nested objects.",
    "code": "import copy\noriginal = [[1, 2], [3, 4]]\nshallow = copy.copy(original)\ndeep = copy.deepcopy(original)"
  },
  {
    "id": "source-p40",
    "subject": "Python",
    "section": "Advanced",
    "question": "What is the GIL?",
    "answer": "Global Interpreter Lock. In standard CPython builds it controls execution of Python bytecode so only one thread holds the GIL at a time. Some newer builds support free-threaded execution.",
    "code": ""
  },
  {
    "id": "source-p41",
    "subject": "Python",
    "section": "Advanced",
    "question": "Multithreading vs multiprocessing?",
    "answer": "Multithreading uses multiple threads in one process. Multiprocessing uses multiple processes and can help with CPU-intensive tasks.",
    "code": ""
  },
  {
    "id": "source-p42",
    "subject": "Python",
    "section": "Advanced",
    "question": "What is PEP 8?",
    "answer": "The official Python style guide. It gives coding conventions to keep code readable and consistent.",
    "code": ""
  },
  {
    "id": "source-p43",
    "subject": "Python",
    "section": "Advanced",
    "question": "What is a virtual environment?",
    "answer": "An isolated Python environment for project dependencies.",
    "code": "python -m venv venv\n\n# Activate on Windows:\nvenv\\\\Scripts\\\\activate"
  },
  {
    "id": "source-p44",
    "subject": "Python",
    "section": "Advanced",
    "question": "What is file handling in Python?",
    "answer": "Creating, reading, writing and modifying files.",
    "code": "with open('data.txt', 'w') as file:\n    file.write('Hello Rahul')\n\nwith open('data.txt', 'r') as file:\n    print(file.read())"
  },
  {
    "id": "source-p45",
    "subject": "Python",
    "section": "Django, FastAPI & APIs",
    "question": "What is Django?",
    "answer": "A high-level Python web framework used to build secure and scalable web applications quickly.",
    "code": ""
  },
  {
    "id": "source-p46",
    "subject": "Python",
    "section": "Django, FastAPI & APIs",
    "question": "What is FastAPI?",
    "answer": "A modern Python framework to build APIs. It supports asynchronous programming and automatic API documentation.",
    "code": "from fastapi import FastAPI\napp = FastAPI()\n\n@app.get('/')\ndef home():\n    return {'message': 'Hello Rahul'}"
  },
  {
    "id": "source-p47",
    "subject": "Python",
    "section": "Django, FastAPI & APIs",
    "question": "What is Django ORM?",
    "answer": "Lets us work with a database using Python code instead of writing SQL directly.",
    "code": "users = User.objects.all()\n\nUser.objects.create(\n    name='Rahul',\n    age=27\n)"
  },
  {
    "id": "source-p48",
    "subject": "Python",
    "section": "Django, FastAPI & APIs",
    "question": "What is a REST API?",
    "answer": "Lets different applications communicate over HTTP using methods such as GET, POST, PUT, PATCH and DELETE.",
    "code": ""
  },
  {
    "id": "source-p49",
    "subject": "Python",
    "section": "Django, FastAPI & APIs",
    "question": "What are HTTP methods?",
    "answer": "GET retrieves data. POST creates data. PUT replaces data. PATCH partially updates data. DELETE deletes data.",
    "code": ""
  },
  {
    "id": "source-p50",
    "subject": "Python",
    "section": "Django, FastAPI & APIs",
    "question": "What is JSON?",
    "answer": "JavaScript Object Notation. A lightweight format to exchange data between frontend and backend applications.",
    "code": "user = {\n    'name': 'Rahul',\n    'age': 27\n}"
  },
  {
    "id": "source-p51",
    "subject": "Python",
    "section": "Django, FastAPI & APIs",
    "question": "What is middleware?",
    "answer": "A component that processes requests and responses during the application request-response lifecycle.",
    "code": ""
  },
  {
    "id": "source-p52",
    "subject": "Python",
    "section": "Django, FastAPI & APIs",
    "question": "What is authentication?",
    "answer": "Verifies the identity of a user, usually through credentials, tokens or other methods.",
    "code": ""
  },
  {
    "id": "source-p53",
    "subject": "Python",
    "section": "Django, FastAPI & APIs",
    "question": "What is authorization?",
    "answer": "Checks what an authenticated user is allowed to access or do.",
    "code": ""
  },
  {
    "id": "source-p54",
    "subject": "Python",
    "section": "Django, FastAPI & APIs",
    "question": "SQL vs NoSQL?",
    "answer": "SQL databases store data in structured tables. NoSQL databases use other structures such as documents or key-value pairs.",
    "code": ""
  },
  {
    "id": "source-p55",
    "subject": "Python",
    "section": "Coding",
    "question": "Coding: Reverse a string",
    "answer": "Use slicing with a step of -1.",
    "code": "name = 'Rahul'\nprint(name[::-1])  # luhaR"
  },
  {
    "id": "source-p56",
    "subject": "Python",
    "section": "Coding",
    "question": "Coding: Largest number in a list",
    "answer": "Use max().",
    "code": "numbers = [10, 50, 20, 80, 30]\nprint(max(numbers))  # 80"
  },
  {
    "id": "source-p57",
    "subject": "Python",
    "section": "Coding",
    "question": "Coding: Check even or odd",
    "answer": "Use the remainder operator.",
    "code": "num = 10\nif num % 2 == 0:\n    print('Even')\nelse:\n    print('Odd')"
  },
  {
    "id": "source-p58",
    "subject": "Python",
    "section": "Coding",
    "question": "Coding: Remove duplicate values from a list",
    "answer": "Convert to a set. Sets do not guarantee the original order, so use dict.fromkeys() to preserve it.",
    "code": "numbers = [1, 2, 2, 3, 3, 4]\nprint(list(set(numbers)))\n\n# Preserve order:\nprint(list(dict.fromkeys(numbers)))"
  },
  {
    "id": "source-p59",
    "subject": "Python",
    "section": "Coding",
    "question": "Coding: Factorial of a number",
    "answer": "Multiply numbers from 1 to n in a loop.",
    "code": "def factorial(num):\n    result = 1\n    for i in range(1, num + 1):\n        result *= i\n    return result\n\nprint(factorial(5))  # 120"
  },
  {
    "id": "source-f0",
    "subject": "FastAPI",
    "section": "Fundamentals",
    "question": "What is FastAPI?",
    "answer": "A modern Python framework used to build APIs quickly. It supports asynchronous programming and automatic API documentation.",
    "code": ""
  },
  {
    "id": "source-f1",
    "subject": "FastAPI",
    "section": "Fundamentals",
    "question": "What are the main features of FastAPI?",
    "answer": "Fast performance, easy to learn, automatic API documentation, data validation, async and await support, and type hints support.",
    "code": ""
  },
  {
    "id": "source-f2",
    "subject": "FastAPI",
    "section": "Fundamentals",
    "question": "Why do we use FastAPI?",
    "answer": "To build fast, scalable and reliable REST APIs using Python.",
    "code": ""
  },
  {
    "id": "source-f3",
    "subject": "FastAPI",
    "section": "Fundamentals",
    "question": "What is an API?",
    "answer": "Application Programming Interface. It allows two applications to communicate with each other.",
    "code": ""
  },
  {
    "id": "source-f4",
    "subject": "FastAPI",
    "section": "Fundamentals",
    "question": "What is a REST API?",
    "answer": "Lets applications communicate using HTTP methods like GET, POST, PUT, PATCH and DELETE.",
    "code": ""
  },
  {
    "id": "source-f5",
    "subject": "FastAPI",
    "section": "Fundamentals",
    "question": "What is ASGI?",
    "answer": "Asynchronous Server Gateway Interface. It lets Python applications handle asynchronous requests.",
    "code": ""
  },
  {
    "id": "source-f6",
    "subject": "FastAPI",
    "section": "Fundamentals",
    "question": "WSGI vs ASGI?",
    "answer": "WSGI is mainly synchronous and is the traditional Python web interface, used by traditional Django deployments. ASGI supports async and sync, is the modern interface, and is used by FastAPI and modern Django.",
    "code": ""
  },
  {
    "id": "source-f7",
    "subject": "FastAPI",
    "section": "Fundamentals",
    "question": "What is Uvicorn?",
    "answer": "An ASGI server used to run FastAPI applications.",
    "code": "pip install fastapi uvicorn\nuvicorn main:app --reload"
  },
  {
    "id": "source-f8",
    "subject": "FastAPI",
    "section": "Fundamentals",
    "question": "What is automatic API documentation?",
    "answer": "FastAPI generates documentation automatically using OpenAPI. Swagger UI is at /docs and ReDoc is at /redoc.",
    "code": ""
  },
  {
    "id": "source-f9",
    "subject": "FastAPI",
    "section": "Fundamentals",
    "question": "What is a path operation?",
    "answer": "It connects an HTTP method and URL to a Python function.",
    "code": "@app.get('/users')\ndef get_users():\n    return {'message': 'User list'}"
  },
  {
    "id": "source-f10",
    "subject": "FastAPI",
    "section": "HTTP & Routing",
    "question": "What is GET?",
    "answer": "Used to retrieve data from the server.",
    "code": "@app.get('/users')\ndef get_users():\n    return {'users': ['Rahul', 'Amit']}"
  },
  {
    "id": "source-f11",
    "subject": "FastAPI",
    "section": "HTTP & Routing",
    "question": "What is POST?",
    "answer": "Used to create new data.",
    "code": "@app.post('/users')\ndef create_user():\n    return {'message': 'User created'}"
  },
  {
    "id": "source-f12",
    "subject": "FastAPI",
    "section": "HTTP & Routing",
    "question": "What is PUT?",
    "answer": "Used to replace an existing resource.",
    "code": ""
  },
  {
    "id": "source-f13",
    "subject": "FastAPI",
    "section": "HTTP & Routing",
    "question": "What is PATCH?",
    "answer": "Used to update specific fields of an existing resource.",
    "code": ""
  },
  {
    "id": "source-f14",
    "subject": "FastAPI",
    "section": "HTTP & Routing",
    "question": "What is DELETE?",
    "answer": "Used to remove a resource.",
    "code": "@app.delete('/users/{user_id}')\ndef delete_user(user_id: int):\n    return {'message': f'User {user_id} deleted'}"
  },
  {
    "id": "source-f15",
    "subject": "FastAPI",
    "section": "HTTP & Routing",
    "question": "What are path parameters?",
    "answer": "Values passed directly through the URL.",
    "code": "@app.get('/users/{user_id}')\ndef get_user(user_id: int):\n    return {'user_id': user_id}"
  },
  {
    "id": "source-f16",
    "subject": "FastAPI",
    "section": "HTTP & Routing",
    "question": "What are query parameters?",
    "answer": "Values passed after ? in the URL. Example: /users?age=27",
    "code": "@app.get('/users')\ndef get_users(age: int):\n    return {'age': age}"
  },
  {
    "id": "source-f17",
    "subject": "FastAPI",
    "section": "HTTP & Routing",
    "question": "Path vs query parameters?",
    "answer": "Path: /users/10. Query: /users?age=27. Path parameters usually identify a resource. Query parameters usually filter or customize results.",
    "code": ""
  },
  {
    "id": "source-f18",
    "subject": "FastAPI",
    "section": "HTTP & Routing",
    "question": "What is a request body?",
    "answer": "Data sent by the client to the server, usually in JSON format.",
    "code": ""
  },
  {
    "id": "source-f19",
    "subject": "FastAPI",
    "section": "HTTP & Routing",
    "question": "What is a status code?",
    "answer": "Tells the client whether an HTTP request was successful. Common: 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 422 Validation Error, 500 Internal Server Error.",
    "code": ""
  },
  {
    "id": "source-f20",
    "subject": "FastAPI",
    "section": "Pydantic",
    "question": "What is Pydantic?",
    "answer": "A Python library for data validation and serialization. FastAPI uses it to validate request data.",
    "code": ""
  },
  {
    "id": "source-f21",
    "subject": "FastAPI",
    "section": "Pydantic",
    "question": "What is a Pydantic model?",
    "answer": "A class that defines the structure and types of data.",
    "code": "from pydantic import BaseModel\n\nclass User(BaseModel):\n    name: str\n    age: int\n    email: str"
  },
  {
    "id": "source-f22",
    "subject": "FastAPI",
    "section": "Pydantic",
    "question": "How do you use a Pydantic model in FastAPI?",
    "answer": "Use it as a parameter type in the endpoint.",
    "code": "class User(BaseModel):\n    name: str\n    age: int\n\n@app.post('/users')\ndef create_user(user: User):\n    return user"
  },
  {
    "id": "source-f23",
    "subject": "FastAPI",
    "section": "Pydantic",
    "question": "What happens if invalid data is sent?",
    "answer": "FastAPI validates the request automatically. If data is invalid, it returns a validation error, usually with status code 422.",
    "code": ""
  },
  {
    "id": "source-f24",
    "subject": "FastAPI",
    "section": "Pydantic",
    "question": "Pydantic vs Python type hints?",
    "answer": "Type hints describe expected types. Pydantic uses type information to validate and process actual data.",
    "code": ""
  },
  {
    "id": "source-f25",
    "subject": "FastAPI",
    "section": "Pydantic",
    "question": "What is response_model?",
    "answer": "Defines the structure of the response returned by an API.",
    "code": "class UserResponse(BaseModel):\n    name: str\n    age: int\n\n@app.get('/users', response_model=list[UserResponse])\ndef get_users():\n    return [{'name': 'Rahul', 'age': 27}]"
  },
  {
    "id": "source-f26",
    "subject": "FastAPI",
    "section": "Pydantic",
    "question": "What is serialization?",
    "answer": "Converting Python objects into formats like JSON so applications can exchange data.",
    "code": ""
  },
  {
    "id": "source-f27",
    "subject": "FastAPI",
    "section": "Pydantic",
    "question": "What is Optional?",
    "answer": "A value can be the specified type or None.",
    "code": "from typing import Optional\n\nclass User(BaseModel):\n    name: str\n    age: Optional[int] = None"
  },
  {
    "id": "source-f28",
    "subject": "FastAPI",
    "section": "Async",
    "question": "What is async programming?",
    "answer": "Lets a program handle other tasks while waiting for operations such as API calls or database queries.",
    "code": ""
  },
  {
    "id": "source-f29",
    "subject": "FastAPI",
    "section": "Async",
    "question": "What is async def?",
    "answer": "Defines an asynchronous function.",
    "code": "@app.get('/hello')\nasync def hello():\n    return {'message': 'Hello'}"
  },
  {
    "id": "source-f30",
    "subject": "FastAPI",
    "section": "Async",
    "question": "What is await?",
    "answer": "Used inside an async function to wait for an asynchronous operation without blocking the event loop.",
    "code": ""
  },
  {
    "id": "source-f31",
    "subject": "FastAPI",
    "section": "Async",
    "question": "def vs async def?",
    "answer": "def defines a normal synchronous function. async def defines a coroutine function that can use await.",
    "code": ""
  },
  {
    "id": "source-f32",
    "subject": "FastAPI",
    "section": "Async",
    "question": "Does FastAPI support synchronous functions?",
    "answer": "Yes. It supports both def and async def path operation functions.",
    "code": ""
  },
  {
    "id": "source-f33",
    "subject": "FastAPI",
    "section": "Async",
    "question": "When should we use async?",
    "answer": "When working with asynchronous operations such as HTTP requests, async database drivers and other I/O operations.",
    "code": ""
  },
  {
    "id": "source-f34",
    "subject": "FastAPI",
    "section": "Async",
    "question": "Does async always make code faster?",
    "answer": "No. Async helps I/O-bound work, but it does not automatically make CPU-heavy tasks faster.",
    "code": ""
  },
  {
    "id": "source-f35",
    "subject": "FastAPI",
    "section": "Database & CRUD",
    "question": "What is CRUD?",
    "answer": "Create, Read, Update and Delete.",
    "code": ""
  },
  {
    "id": "source-f36",
    "subject": "FastAPI",
    "section": "Database & CRUD",
    "question": "How does FastAPI connect to a database?",
    "answer": "Using libraries such as SQLAlchemy, SQLModel or database-specific async drivers.",
    "code": ""
  },
  {
    "id": "source-f37",
    "subject": "FastAPI",
    "section": "Database & CRUD",
    "question": "What is SQLAlchemy?",
    "answer": "A Python SQL toolkit and ORM used to interact with relational databases.",
    "code": ""
  },
  {
    "id": "source-f38",
    "subject": "FastAPI",
    "section": "Database & CRUD",
    "question": "What is an ORM?",
    "answer": "Object Relational Mapping. It lets developers work with database tables using Python classes and objects.",
    "code": ""
  },
  {
    "id": "source-f39",
    "subject": "FastAPI",
    "section": "Database & CRUD",
    "question": "What is a database session?",
    "answer": "Manages communication and transactions between the application and the database.",
    "code": ""
  },
  {
    "id": "source-f40",
    "subject": "FastAPI",
    "section": "Database & CRUD",
    "question": "What is dependency injection in FastAPI?",
    "answer": "Lets us reuse common functionality, such as database connections and authentication, across endpoints.",
    "code": "from fastapi import Depends\n\ndef get_message():\n    return 'Hello Rahul'\n\n@app.get('/message')\ndef message(value: str = Depends(get_message)):\n    return {'message': value}"
  },
  {
    "id": "source-f41",
    "subject": "FastAPI",
    "section": "Database & CRUD",
    "question": "What is yield used for in database dependencies?",
    "answer": "It provides a database session and makes sure the session is closed after the request finishes.",
    "code": "def get_db():\n    db = SessionLocal()\n    try:\n        yield db\n    finally:\n        db.close()"
  },
  {
    "id": "source-f42",
    "subject": "FastAPI",
    "section": "Auth & Security",
    "question": "What is authentication?",
    "answer": "Verifies who the user is.",
    "code": ""
  },
  {
    "id": "source-f43",
    "subject": "FastAPI",
    "section": "Auth & Security",
    "question": "What is authorization?",
    "answer": "Checks what the user is allowed to access.",
    "code": ""
  },
  {
    "id": "source-f44",
    "subject": "FastAPI",
    "section": "Auth & Security",
    "question": "What is JWT?",
    "answer": "JSON Web Token. Commonly used to securely transmit claims between a client and a server.",
    "code": ""
  },
  {
    "id": "source-f45",
    "subject": "FastAPI",
    "section": "Auth & Security",
    "question": "What is OAuth2?",
    "answer": "An authorization framework that lets applications access protected resources.",
    "code": ""
  },
  {
    "id": "source-f46",
    "subject": "FastAPI",
    "section": "Auth & Security",
    "question": "What is password hashing?",
    "answer": "Converting a password into a one-way hash before storing it in the database.",
    "code": ""
  },
  {
    "id": "source-f47",
    "subject": "FastAPI",
    "section": "Auth & Security",
    "question": "What is CORS?",
    "answer": "Cross-Origin Resource Sharing. It controls which external origins can access an API through browsers.",
    "code": "from fastapi.middleware.cors import CORSMiddleware\n\napp.add_middleware(\n    CORSMiddleware,\n    allow_origins=['http://localhost:5173'],\n    allow_credentials=True,\n    allow_methods=['*'],\n    allow_headers=['*'],\n)"
  },
  {
    "id": "source-f48",
    "subject": "FastAPI",
    "section": "Auth & Security",
    "question": "What is middleware?",
    "answer": "Code that runs during the request and response process.",
    "code": ""
  },
  {
    "id": "source-f49",
    "subject": "FastAPI",
    "section": "Auth & Security",
    "question": "How do you handle errors in FastAPI?",
    "answer": "Use HTTPException to return HTTP errors.",
    "code": "from fastapi import HTTPException\n\n@app.get('/users/{user_id}')\ndef get_user(user_id: int):\n    if user_id <= 0:\n        raise HTTPException(\n            status_code=400,\n            detail='Invalid user ID'\n        )\n    return {'user_id': user_id}"
  },
  {
    "id": "source-f50",
    "subject": "FastAPI",
    "section": "Advanced",
    "question": "What is APIRouter?",
    "answer": "Helps organize API endpoints into separate modules.",
    "code": "from fastapi import APIRouter\nrouter = APIRouter()\n\n@router.get('/users')\ndef get_users():\n    return {'users': []}\n\napp.include_router(router, prefix='/api')"
  },
  {
    "id": "source-f51",
    "subject": "FastAPI",
    "section": "Advanced",
    "question": "What is a background task?",
    "answer": "A task that runs after the response has been sent to the client.",
    "code": ""
  },
  {
    "id": "source-f52",
    "subject": "FastAPI",
    "section": "Advanced",
    "question": "What are WebSockets?",
    "answer": "Two-way, real-time communication between a client and a server.",
    "code": ""
  },
  {
    "id": "source-f53",
    "subject": "FastAPI",
    "section": "Advanced",
    "question": "What is a lifespan event?",
    "answer": "Manages application startup and shutdown work, such as opening or closing database connections.",
    "code": ""
  },
  {
    "id": "source-f54",
    "subject": "FastAPI",
    "section": "Advanced",
    "question": "What is UploadFile?",
    "answer": "Used to receive uploaded files in FastAPI.",
    "code": ""
  },
  {
    "id": "source-f55",
    "subject": "FastAPI",
    "section": "Advanced",
    "question": "What is File?",
    "answer": "Used to declare file upload parameters in an endpoint.",
    "code": ""
  },
  {
    "id": "source-f56",
    "subject": "FastAPI",
    "section": "Advanced",
    "question": "What is HTTPException?",
    "answer": "Used to raise an HTTP error with a status code and an error message.",
    "code": ""
  },
  {
    "id": "source-f57",
    "subject": "FastAPI",
    "section": "Advanced",
    "question": "Django vs FastAPI?",
    "answer": "Django is a full-stack framework with ORM, admin and built-in authentication. FastAPI is API-focused, database tools are chosen separately, and it uses flexible security dependencies. Both support sync and async.",
    "code": ""
  },
  {
    "id": "source-f58",
    "subject": "FastAPI",
    "section": "Advanced",
    "question": "FastAPI vs Flask?",
    "answer": "FastAPI supports automatic validation and API documentation. Flask is lightweight and gives developers more freedom to choose extra tools.",
    "code": ""
  },
  {
    "id": "source-f59",
    "subject": "FastAPI",
    "section": "Advanced",
    "question": "How do you test FastAPI APIs?",
    "answer": "Use TestClient with pytest to test endpoints.",
    "code": "from fastapi.testclient import TestClient\n\nclient = TestClient(app)\n\ndef test_hello():\n    response = client.get('/hello')\n    assert response.status_code == 200"
  },
  {
    "id": "source-f60",
    "subject": "FastAPI",
    "section": "Coding",
    "question": "Coding: Create a simple FastAPI application",
    "answer": "Create an app and add one route.",
    "code": "from fastapi import FastAPI\napp = FastAPI()\n\n@app.get('/')\ndef home():\n    return {'message': 'Welcome to FastAPI'}"
  },
  {
    "id": "source-f61",
    "subject": "FastAPI",
    "section": "Coding",
    "question": "Coding: Create a POST API to add a user",
    "answer": "Use a Pydantic model for the request body.",
    "code": "class User(BaseModel):\n    name: str\n    email: str\n\n@app.post('/users')\ndef create_user(user: User):\n    return {\n        'message': 'User created successfully',\n        'user': user\n    }"
  },
  {
    "id": "source-f62",
    "subject": "FastAPI",
    "section": "Coding",
    "question": "Coding: Create an API to update user information",
    "answer": "Use PUT with a path parameter and a request body.",
    "code": "@app.put('/users/{user_id}')\ndef update_user(user_id: int, user: User):\n    return {\n        'user_id': user_id,\n        'updated_data': user\n    }"
  },
  {
    "id": "source-f63",
    "subject": "FastAPI",
    "section": "Coding",
    "question": "Coding: Create an API to search users",
    "answer": "Use a query parameter.",
    "code": "@app.get('/search')\ndef search_user(name: str):\n    return {'search_name': name}"
  },
  {
    "id": "source-f64",
    "subject": "FastAPI",
    "section": "Coding",
    "question": "Coding: Call an external API in FastAPI",
    "answer": "Use the httpx library with an async client.",
    "code": "import httpx\n\n@app.get('/external-data')\nasync def get_external_data():\n    async with httpx.AsyncClient() as client:\n        response = await client.get(\n            'https://jsonplaceholder.typicode.com/users'\n        )\n    response.raise_for_status()\n    return response.json()"
  }
];
