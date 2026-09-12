import "./App.css";
import { useEffect, useState } from "react";

import type { Technology } from "./types/technology";
import YourStack from "./components/YourStack";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TechnologyCard from "./components/TechnologyCard";
import Footer from "./components/Footer";

function App() {
  const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTechnologies = async (): Promise<void> => {
    try {
      const response = await fetch("/technologies.json");

      const data: Technology[] = await response.json();

      setTechnologies(data);
    } catch (error) {
      console.error("Failed to fetch technologies:", error);
    } finally {
      setLoading(false);
    }
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

  const handleRemoveAll = () =>   {
    setSelectedTechs([])  ;
    toast.info ("All technologies removed from your stack!");
  };



  return (
    <div className="min-h-screen bg-white" >


      <div className="mx-auto max-w-[1200px] px-6 py-10">
        <h1 className="text-[36px] font-extrabold text-[#0F172A]">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>

        <p className="mt-2 text-[#64748B] text-[16px]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>


      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-6 pb-12 lg:grid-cols-3">

        <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
          {loading ? (
            <div className="col-span-full py-16 text-center">
              <p className="text-sm font-medium text-gray-500">
                Loading technologies...
              </p>
            </div>
          ) : (
            technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                onAdd={handleAdd}
                selectedTechs={selectedTechs}
              />
            ))
          )}
        </div>


        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-24">
            <YourStack
              selectedTechs={selectedTechs}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </div>

      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;