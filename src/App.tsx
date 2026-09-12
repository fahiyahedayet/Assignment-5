import './App.css'
import { useState } from "react";

import type { Technology } from "./types/technology";
import YourStack from "./components/YourStack";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);

const handleAdd = (technology: Technology) => {
  const alreadyAdded = selectedTechs.some(
    (tech) => tech.id === technology.id
  );

  if (alreadyAdded) {
    toast.warning(`${technology.name} is already in your stack!`);
    return;
  }

  setSelectedTechs([...selectedTechs, technology]);

  toast.success(`${technology.name} added to your stack!`);
};

 const react: Technology = {
    id: 1,
    name: "React",
    category: "Frontend",
    description: "A JavaScript library",
    icon: "",
    rating: 4.9,
    difficulty: "Beginner-Friendly",
    badge: "Popular",
  };

  return (
    <div>
      <h1>Dev Stack</h1>

      <button onClick={() => handleAdd(react)}>
        Add React
      </button>

      <YourStack selectedTechs={selectedTechs} />
      <ToastContainer />
    </div>
  );
}

export default App;