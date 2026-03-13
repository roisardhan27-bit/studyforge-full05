// components/TodaysPlan.js
export default function TodaysPlan({ tasks }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Today's Plan</h2>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task.time} – {task.subject}</li>
        ))}
      </ul>
    </div>
  )
}