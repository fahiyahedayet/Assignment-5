import type { Technology } from "../types/technology";

interface YourStackProps {
  selectedTechs: Technology[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  selectedTechs,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">
          Your Stack
        </h2>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
          {selectedTechs.length}
        </span>
      </div>

      {/* Selected count */}
      <p className="mt-2 text-sm text-gray-500">
        {selectedTechs.length} Technology
        {selectedTechs.length !== 1 ? "ies" : "y"} Selected
      </p>

      {/* Empty state */}
      {selectedTechs.length === 0 && (
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            No technologies added yet.
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Add technologies from the list.
          </p>
        </div>
      )}

      {/* Selected technologies */}
      <div className="mt-5 space-y-3">
        {selectedTechs.map((tech) => (
          <div
            key={tech.id}
            className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 px-4 py-3"
          >
            <div>
              <p className="font-medium text-gray-800">
                {tech.name}
              </p>

              <p className="text-xs text-gray-400">
                {tech.category}
              </p>
            </div>

            <button
              onClick={() => onRemove(tech.id)}
              className="flex h-7 w-7 items-center justify-center rounded-full text-lg text-gray-400 transition hover:bg-red-100 hover:text-red-500"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {/* Remove all */}
      {selectedTechs.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-5 w-full rounded-xl border border-red-200 bg-white px-4 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default YourStack;