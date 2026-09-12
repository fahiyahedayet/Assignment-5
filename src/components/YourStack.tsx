import type { Technology } from "../types/technology";

import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import {
  SiVuedotjs,
  SiSvelte,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiDocker,
} from "react-icons/si";


interface YourStackProps {
  selectedTechs: Technology[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  selectedTechs, onRemove, onRemoveAll,
}: YourStackProps) => {
  const iconMap = {
    react: <FaReact className="text-3xl text-cyan-500" />,
    vue: <SiVuedotjs className="text-3xl text-green-600" />,
    svelte: <SiSvelte className="text-3xl text-orange-600" />,
    nextjs: <SiNextdotjs className="text-3xl text-gray-900" />,
    nodejs: <FaNodeJs className="text-3xl text-green-600" />,
    postgresql: <SiPostgresql className="text-3xl text-blue-600" />,
    redis: <SiRedis className="text-3xl text-red-500" />,
    java: <FaJava className="text-3xl text-red-600" />,
    typescript: <SiTypescript className="text-3xl text-blue-600" />,
    javascript: <SiJavascript className="text-3xl text-yellow-500" />,
    tailwind: <SiTailwindcss className="text-3xl text-cyan-500" />,
    docker: <SiDocker className="text-3xl text-blue-500" />,
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <h2 className="text-xl font-bold text-gray-900">Your Stack</h2>

      <p className="mt-2 text-sm text-gray-400">{selectedTechs.length}{" "} {selectedTechs.length === 1 ? "Technology" : "Technologies"}{" "}Selected</p>

      {selectedTechs.length === 0 && (
        <div className="mt-5 rounded-xl border border-dashed border-gray-200 px-4 py-7 text-center">
          <p className="text-sm text-gray-400">Your stack is empty.</p>
        </div>
      )}

      {selectedTechs.length > 0 && (
        <div className="mt-5">
          <div className="space-y-0">
            {selectedTechs.map((tech) => (
              <div key={tech.id} className="flex items-center justify-between border-b border-gray-100 py-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center">{iconMap[tech.icon as keyof typeof iconMap]}</div>
                  <div> <p className="font-semibold text-gray-800">{tech.name} </p>
                    <p className="text-xs text-gray-400">{tech.category}</p>
                  </div>
                </div>

                <button onClick={() => onRemove(tech.id)}className="text-xl text-gray-300 transition hover:text-red-500">×</button>
              </div>
            ))}
          </div>

          <button onClick={onRemoveAll}className="mt-5 w-full rounded-xl border border-gray-200 bg-white py-3 text-sm font-semibold text-gray-500 transition hover:border-red-200 hover:text-red-500">Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;