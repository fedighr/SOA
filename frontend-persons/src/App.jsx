import { useEffect, useState } from "react";
import {
  createPerson,
  deletePerson,
  getAllPersons,
  searchByName,
  getPersonById,
  updatePerson,
} from "./api/personApi";
import PersonList from "./components/PersonList";
import PersonForm from "./components/PersonForm";
import SearchBar from "./components/SearchBar";
import "./App.css";

export default function App() {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(null);
  const [error, setError] = useState("");

  async function refresh() {
    setLoading(true);
    setError("");
    try {
      const data = await getAllPersons();
      setPersons(Array.isArray(data) ? data : []);
    } catch (e) {
      setError("Failed to load persons. Check backend URL / CORS.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  async function onCreate(person) {
    try {
      await createPerson(person);
      await refresh();
    } catch (e) {
      setError("Failed to create person.");
    }
  }

  async function onUpdate(person) {
    try {
      await updatePerson(person.id, person);
      setEditing(null);
      await refresh();
    } catch (e) {
      setError("Failed to update person.");
    }
  }

  async function onDelete(id) {
    const ok = window.confirm("Delete this person?");
    if (!ok) return;
    try {
      await deletePerson(id);
      await refresh();
    } catch (e) {
      setError("Failed to delete person.");
    }
  }

  async function onSearch({ mode, value }) {
    setError("");
    setLoading(true);
    try {
      if (mode === "id") {
        const p = await getPersonById(value);
        setPersons(p ? [p] : []);
      } else {
        const data = await searchByName(value);
        setPersons(Array.isArray(data) ? data : []);
      }
    } catch {
      setPersons([]);
      setError("No results found.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>Persons CRUD</h1>
        <p>React + JAX-RS + Hibernate + MySQL</p>
      </div>

      <SearchBar onSearch={onSearch} onReset={refresh} />

      {error && <div className="alert alert-error">{error}</div>}
      {loading && <div className="alert alert-loading">Loading...</div>}

      <div className="grid">
        <div className="card">
          <h2>{editing ? "✏️ Edit Person" : "➕ Add Person"}</h2>
          <PersonForm
            key={editing?.id ?? "new"}
            initial={editing}
            onSubmit={editing ? onUpdate : onCreate}
            onCancel={() => setEditing(null)}
          />
        </div>

        <div className="card">
          <h2>👥 Persons List</h2>
          <PersonList
            persons={persons}
            onEdit={(p) => setEditing(p)}
            onDelete={(id) => onDelete(id)}
          />
        </div>
      </div>
    </div>
  );
}