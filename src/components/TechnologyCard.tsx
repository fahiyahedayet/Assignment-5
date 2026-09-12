import type { Technology } from "../types/technology";

import { FaReact, FaNodeJs, FaGitAlt, FaJava } from "react-icons/fa";
import {
    SiVuedotjs,
    SiSvelte,
    SiNextdotjs,
    SiPostgresql,
    SiTypescript,
    SiRedis,
    SiJavascript,
    SiDocker,
    SiTailwindcss,
} from "react-icons/si";

import { FaStar } from "react-icons/fa";

interface TechnologyCardProps {
    technology: Technology;
    onAdd: (technology: Technology) => void;
    selectedTechs: Technology[];
}

const TechnologyCard = ({
    technology,
    onAdd,
    selectedTechs,
}: TechnologyCardProps) => {
    const isAdded = selectedTechs.some(
        (tech) => tech.id === technology.id
    );

    const iconMap = {
        react: <FaReact className="text-5xl text-cyan-500" />,
        vue: <SiVuedotjs className="text-5xl text-green-600" />,
        svelte: <SiSvelte className="text-5xl text-orange-600" />,
        nextjs: <SiNextdotjs className="text-5xl text-gray-900" />,
        nodejs: <FaNodeJs className="text-5xl text-green-600" />,
        postgresql: <SiPostgresql className="text-5xl text-blue-700" />,
        redis: <SiRedis className="text-5xl text-red-500" />,
        java: <FaJava className="text-5xl text-red-600" />,
        typescript: <SiTypescript className="text-5xl text-blue-600" />,
        javascript: <SiJavascript className="text-5xl text-yellow-500" />,
        tailwind: <SiTailwindcss className="text-5xl text-cyan-500" />,
        docker: <SiDocker className="text-5xl text-blue-500" />,
    };

    const badgeColorMap = {
        react: "bg-cyan-50 text-cyan-600",
        vue: "bg-green-50 text-green-600",
        svelte: "bg-orange-50 text-orange-600",
        nextjs: "bg-gray-100 text-gray-700",
        nodejs: "bg-green-50 text-green-600",
        postgresql: "bg-blue-50 text-blue-600",
        redis: "bg-red-50 text-red-600",
        java: "bg-red-50 text-red-600",
        typescript: "bg-blue-50 text-blue-600",
        javascript: "bg-yellow-50 text-yellow-600",
        tailwind: "bg-cyan-50 text-cyan-600",
        docker: "bg-blue-50 text-blue-600",
    };

    const iconKey = technology.icon as keyof typeof iconMap;

    return (
        <div className="flex flex-col rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex h-12 items-center">
                        {iconMap[iconKey]}
                    </div>

                    {technology.badge && (
                        <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeColorMap[iconKey] || "bg-gray-100 text-gray-600"
                                }`}
                        >
                            {technology.badge}
                        </span>
                    )}
                </div>

                <h3 className="mt-3 text-xl font-bold text-gray-900">
                    {technology.name}
                </h3>

                <p className="mt-1.5 min-h-[54px] text-xs leading-relaxed text-gray-500 line-clamp-3">
                    {technology.description}
                </p>
            </div>

            <div className="mt-4">
                <div className="flex items-center justify-between gap-2 text-[11px] font-medium">
                    <span className="whitespace-nowrap rounded-md bg-gray-100 px-2 py-1 text-gray-600">
                        {technology.category}
                    </span>

                    <span className="whitespace-nowrap text-gray-500">
                        {technology.difficulty}
                    </span>

                    <span className="flex shrink-0 items-center gap-1 whitespace-nowrap font-semibold text-gray-700">
                        <FaStar className="text-xs text-amber-400" />
                        {technology.rating}
                    </span>
                </div>

                <button
                    onClick={() => onAdd(technology)}
                    disabled={isAdded}
                    className={`mt-4 w-full rounded-xl py-3 text-sm font-semibold transition ${isAdded
                            ? "cursor-not-allowed border border-pink-200 bg-white text-pink-500"
                            : "bg-gray-900 text-white hover:bg-gray-800"
                        }`}
                >
                    {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                </button>
            </div>
        </div>
    );
};

export default TechnologyCard;