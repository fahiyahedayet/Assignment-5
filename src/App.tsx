import "./App.css";
import { useEffect, useState } from "react";

import type { Technology } from "./types/technology";
import YourStack from "./components/YourStack";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TechnologyCard from "./components/TechnologyCard";

function App() {
  const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  const fetchTechnologies = async (): Promise<void> => {
    const response = await fetch("/technologies.json");

    const data: Technology[] = await response.json();

    setTechnologies(data);
  };

  useEffect(() => {
    fetchTechnologies();
  }, []);

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

  const handleRemove = (id: number) => {
    const removedTech = selectedTechs.find(
      (tech) => tech.id === id
    );

    setSelectedTechs(
      selectedTechs.filter((tech) => tech.id !== id)
    );

    if (removedTech) {
      toast.info(`${removedTech.name} removed from your stack!`);
    }
  };

  const handleRemoveAll = () => {
    setSelectedTechs([]);
    toast.info("All technologies removed from your stack!");
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

      <div>
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            onAdd={handleAdd}
            selectedTechs={selectedTechs}
          />
        ))}
      </div>

      <button onClick={() => handleAdd(react)}>
        Add React
      </button>

      <YourStack
        selectedTechs={selectedTechs}
        onRemove={handleRemove}
        onRemoveAll={handleRemoveAll}
      />

      <ToastContainer />
    </div>
  );
}

export default App;