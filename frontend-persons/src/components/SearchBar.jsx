import { useState } from "react";

export default function SearchBar({ onSearch, onReset }) {
  const [mode, setMode] = useState("name");
  const [value, setValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onSearch({ mode, value: value.trim() });
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          className="search-select"
        >
          <option value="name">Search by Name</option>
          <option value="id">Search by ID</option>
        </select>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={mode === "name" ? "Enter name..." : "Enter ID..."}
          className="search-input"
        />
        <button type="submit" className="btn btn-primary">
          🔍 Search
        </button>
        <button
          type="button"
          onClick={() => {
            setValue("");
            onReset();
          }}
          className="btn btn-secondary"
        >
          🔄 Reset
        </button>
      </form>
    </div>
  );
}