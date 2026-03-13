// components/HabitTracker.js
export default function HabitTracker({ habits }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Habit Tracker</h2>
      <ul>
        {habits.map((habit, i) => (
          <li key={i}>
            <input type="checkbox" id={`habit-${i}`} className="mr-2"/>
            <label htmlFor={`habit-${i}`}>{habit}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}