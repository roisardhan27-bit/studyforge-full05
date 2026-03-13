// components/XPTracker.js
export default function XPTracker({ xp, level, achievements }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">XP Tracker</h2>
      <p>Level: {level}</p>
      <p>XP: {xp}</p>
      <p>Achievements: {achievements.join(', ')}</p>
    </div>
  )
}