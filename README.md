# 🚀 Dev Stack

A modern and responsive technology stack explorer built with React and TypeScript.
Dev Stack allows developers to explore popular technologies, learn about them, and build their own personalized development stack.

---

## ✨ About The Project

**Dev Stack** is a responsive web application where users can explore different technologies used in modern software development.

Users can browse technology cards, view important information such as category, difficulty, and rating, and add technologies to their personal stack.

The project also includes toast notifications, responsive layouts, loading states, and data fetching from a local JSON file.

---

## 🛠️ Technologies Used

* ⚛️ **React**
* 🔷 **TypeScript**
* 🎨 **Tailwind CSS**
* ⚡ **Vite**
* 🔔 **React Toastify**
* 📦 **React Icons**
* 📄 **JSON**
* 🔗 **HTML5**

---

## 🌟 Features

### 🔍 01 — Explore Technologies

Discover technologies across different areas of modern development, including:

`Frontend` · `Backend` · `Database` · `Languages` · `Styling` · `DevOps`

Each technology comes with useful information such as:

* 🖼️ Technology icon
* 📌 Category
* 📝 Description
* 📊 Difficulty level
* ⭐ Rating
* 🏷️ Badge

---

### 🧩 02 — Build Your Own Stack

Create a personalized **Your Stack** by selecting the technologies you want to work with.

**You can:**

`➕ Add` → `🚫 Avoid Duplicates` → `🗑️ Remove` → `🧹 Remove All`

Your selected technologies are updated dynamically as you interact with the application.

---

### 🔔 03 — Interactive Feedback

Every important action provides immediate visual feedback through toast notifications.

| Action                | Result                 |
| :-------------------- | :--------------------- |
| ➕ Add technology      | ✅ Successfully added   |
| 🔁 Add duplicate      | ⚠️ Duplicate warning   |
| 🗑️ Remove technology | ✅ Successfully removed |
| 🧹 Remove all         | ✅ Stack cleared        |

---

### ⚡ Built for Practice

This project was designed not only as a technology explorer, but also as a practical way to strengthen core React concepts through a real, interactive application.

**Components · Props · State · Hooks · Events · TypeScript · Responsive UI**


---

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX stands for **JavaScript XML**. It allows us to write HTML-like code inside JavaScript or TypeScript.

And React uses JSX because it makes writing and understanding UI components easier.

Example:

```tsx
const App = () => {
  return <h1>Hello React</h1>;
};
```

---

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed inside a component that can change over time.

In this project, `selectedTechs` is state because the selected technologies can change.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` allows a React component to store and update data.

I used `useState` in `App.tsx` to store:

* Selected technologies
* Technology data
* Loading state

Example:

```tsx
const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);
```

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component.

I used it to fetch the technology data from the local `technologies.json` file when the application loads.

```tsx
useEffect(() => {
  fetchTechnologies();
}, []);
```

The empty dependency array means the effect runs when the component first loads.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list.

It helps React understand which item was added, removed, or changed.

In this project, I used the technology `id` as the key:

```tsx
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
```

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

In this project, I show an empty message when the user has not selected any technology:

```tsx
{selectedTechs.length === 0 && (
  <p>Your stack is empty.</p>
)}
```

When technologies are added, the empty message disappears and the selected technologies are shown.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**.

For example, `App.tsx` passes technology data to `TechnologyCard`:

```tsx
<TechnologyCard
  technology={technology}
  onAdd={handleAdd}
  selectedTechs={selectedTechs}
/>
```

The child can send something back to the parent by calling a **function passed through props**.

Here, `TechnologyCard` calls:

```tsx
onAdd(technology);
```

This sends the selected technology back to the parent, where `handleAdd` updates the state.

---

## 📁 Project Structure

```text
src/
├── assets/
├── components/
│   ├── Navbar.tsx
│   ├── Banner.tsx
│   ├── TechnologyCard.tsx
│   ├── YourStack.tsx
│   └── Footer.tsx
│
├── types/
│   └── technology.ts
│
├── App.tsx
├── App.css
├── index.css
└── main.tsx

public/
└── technologies.json
```

---

## 💡 Project Goal

The main goal of Dev Stack was to practice building a real-world React application while strengthening my understanding of fundamental frontend concepts.

Concepts practiced
⚛️ React Components
📦 Props
🔄 State Management
🪝 React Hooks
🔷 TypeScript
📄 JSON Data
🖱️ Event Handling
🔀 Conditional Rendering
📱 Responsive Design
🔔 User Feedback
🧩 Component Reusability

---

🎨 Design Philosophy

The project follows a clean and modern interface with a vibrant gradient-inspired visual identity.

<div align="center">

#FF5722 Orange → #D81B7E Pink → #7C3AED Purple

<br>

Modern · Colorful · Responsive · Simple · Interactive

</div>

The goal was to keep the interface:

Modern · Colorful · Responsive · Simple · Interactive

---

🚀 Learning Outcome

Through this project, I practiced turning React concepts into a functional application rather than learning them only through isolated examples.

The project helped me understand how components, props, state, hooks, events, and data fetching work together to create an interactive web application.

