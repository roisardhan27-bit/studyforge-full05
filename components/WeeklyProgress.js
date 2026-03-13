// components/WeeklyProgress.js
export default function WeeklyProgress({ studyHours, currentStreak, weeklyGoal }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Weekly Progress</h2>
      <p>Study Hours: {studyHours} / {weeklyGoal}</p>
      <p>Current Streak: {currentStreak} days</p>
    </div>
  )
}