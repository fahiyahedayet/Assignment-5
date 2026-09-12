import type { Technology } from "../types/technology";

interface YourStackProps {
    selectedTechs: Technology[];
    onRemove: (id: number) => void;
    onRemoveAll: () => void;
}

const YourStack = ({ selectedTechs, onRemove, onRemoveAll }: YourStackProps) => {
    return (
        <div>
            <h2>Your Stack</h2>

            <p>{selectedTechs.length} Technology Selected</p>

            {selectedTechs.map((tech) => (
                <div key={tech.id}>
                    <span>{tech.name}</span>

                    <button onClick={() => onRemove(tech.id)}>
                        ×
                    </button>
                    <button onClick={onRemoveAll}>
                        Remove All
                    </button>
                </div>
            ))}
        </div>
    );
};

export default YourStack;