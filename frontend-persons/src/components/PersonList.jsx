export default function PersonList({ persons, onEdit, onDelete }) {
  return (
    <div className="person-list">
      {persons.length === 0 ? (
        <p className="empty-state">No persons found</p>
      ) : (
        persons.map((person) => (
          <div key={person.id} className="person-card">
            <div className="person-info">
              <h3>{person.name}</h3>
              <p className="person-email">📧 {person.email}</p>
              <p className="person-age">🎂 Age: {person.age}</p>
            </div>
            <div className="person-actions">
              <button
                onClick={() => onEdit(person)}
                className="btn-icon btn-edit"
                title="Edit"
              >
                ✏️
              </button>
              <button
                onClick={() => onDelete(person.id)}
                className="btn-icon btn-delete"
                title="Delete"
              >
                🗑️
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}