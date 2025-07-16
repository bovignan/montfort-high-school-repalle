// src/pages/Events.jsx
function Events({ updates = [] }) {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">School Updates</h2>
      {updates.length === 0 ? (
        <p>No updates yet.</p>
      ) : (
        updates.map((update, index) => (
          <div key={index} className="border p-4 rounded mb-4 shadow">
            <h3 className="text-xl font-semibold">{update.title}</h3>
            <p>{update.description}</p>
            <span className="text-sm text-gray-500">Date: {update.date}</span>
          </div>
        ))
      )}
    </div>
  );
}

export default Events;
