import { useState } from "react";

export default function PersonForm({ initial, onSubmit, onCancel }) {
  const [formData, setFormData] = useState(
    initial || { name: "", email: "", age: "" }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, age: parseInt(formData.age) || 0 });
    if (!initial) setFormData({ name: "", email: "", age: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          placeholder="Enter name"
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label>Age</label>
        <input
          type="number"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          required
          placeholder="Enter age"
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {initial ? "Update" : "Create"}
        </button>
        {initial && (
          <button
            type="button"
            onClick={onCancel}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}