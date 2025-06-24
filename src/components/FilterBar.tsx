"use client";

interface FilterBarProps {
  nameFilter: string;
  typeFilter: string;
  onNameChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  types: string[];
}

export const FilterBar = ({
  nameFilter,
  typeFilter,
  onNameChange,
  onTypeChange,
  types,
}: FilterBarProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={nameFilter}
        onChange={(e) => onNameChange(e.target.value)}
        className="border px-3 py-2 rounded-lg w-full md:w-1/2"
      />
      <select
        value={typeFilter}
        onChange={(e) => onTypeChange(e.target.value)}
        className="border px-3 py-2 rounded-lg w-full md:w-1/2"
      >
        <option value="">Todos los tipos</option>
        {(types ?? []).map((type) => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};
