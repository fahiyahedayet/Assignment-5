import type { Technology } from "../types/technology";
import { FaReact } from "react-icons/fa";
import { SiVuedotjs, SiSvelte } from "react-icons/si";

interface TechnologyCardProps {
    technology: Technology;
    onAdd: (technology: Technology) => void;
    selectedTechs: Technology[];
}

const TechnologyCard = ({
    technology,
    onAdd, selectedTechs,
}: TechnologyCardProps) => {
    const isAdded = selectedTechs.some(
        (tech) => tech.id === technology.id
    );

    const iconMap = {
        react: <FaReact className="text-5xl text-cyan-500" />,
        vue: <SiVuedotjs className="text-5xl text-green-500" />,
        svelte: <SiSvelte className="text-5xl text-orange-500" />,
    };

    return (
        <div className="rounded-lg border border-gray-200 p-4">
            <div className="text-2xl">
                {iconMap[technology.icon as keyof typeof iconMap]}
            </div>

            <h3 className="mt-3 text-lg font-semibold">
                {technology.name}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
                {technology.description}
            </p>

            <div className="mt-3 flex items-center justify-between">
                <span className="text-sm">
                    {technology.category}
                </span>

                <span className="text-sm">
                    ⭐ {technology.rating}
                </span>
            </div>

            <button
                onClick={() => onAdd(technology)}
                disabled={isAdded}
                className={`mt-4 w-full rounded-md px-4 py-2 text-sm text-white ${isAdded
                    ? "cursor-not-allowed bg-gray-400"
                    : "bg-gray-900 hover:bg-gray-700"
                    }`}
            >
                {isAdded ? "✓ Added" : "Add to Stack"}
            </button>
        </div>
    );
};

export default TechnologyCard;