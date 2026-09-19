# DevStack - Explore Technologies

A modern web application built with React and Tailwind CSS that allows developers to explore software technologies and build their custom tech 
stack.

## 🚀 Live Demo
[Live Demo](https://dev-stack-henna.vercel.app/)

## 🛠️ Technologies Used
- **Frontend Framework:** React.js (Vite)
- **Styling:** Tailwind CSS
- **Notifications:** React Toastify
- **Deployment:** Vercel

## ✨ Key Features
1. **Dynamic Data Fetching & Loading State:** Fetches technology data dynamically from a JSON file with an active visual loading state indicator.
2. **Interactive Stack Management:** Allows users to add technologies to their stack, prevents duplicates, and enables single or bulk removal.
3. **Real-time Feedback & Toast Notifications:** Displays interactive toast alerts for adding, removing, or handling duplicate entries, along with
  an active selected count.

---

## ❓ React Questions & Answers

### i. What is JSX, and why is it used in React?
**Answer:** JSX (JavaScript XML) is a syntax extension for JavaScript that allows us to write HTML-like code inside React. It is used because it makes writing UI components intuitive, readable, and easier to combine with JavaScript logic in one place.

### ii. What is the difference between props and state?
**Answer:** 
- **Props** (short for properties) are read-only data passed from a parent component to a child component.
- **State** is mutable data managed locally inside a component that can change over time and triggers a component re-render when updated.

### iii. What does the `useState` hook do, and where did you use it in this project?
**Answer:** The `useState` hook allows functional components to create and manage local state variables. In this project, I used `useState` to store the technology list (`technologies`), the user's selected items (`myStack`), and the initial data fetching status (`loading`).

### iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:** The `useEffect` hook performs side effects in functional components (such as fetching data or subscribing to events). I used it to fetch data from `teknologigulo.json` when the component first mounts so it doesn't block the initial rendering.

### v. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:** The `key` prop helps React uniquely identify which items in a list have changed, been added, or removed. It optimizes performance by ensuring React only re-renders the specific modified elements instead of rebuilding the entire list DOM.

### vi. What is conditional rendering? Show one place you used it in this project.
**Answer:** Conditional rendering means displaying different UI components or elements based on specific state conditions. In this project, I used conditional rendering to show a loading text while fetching (`loading ? <Loading /> : <Content />`) and to render the "Your stack is empty" view when `myStack.length === 0`.
