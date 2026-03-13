// components/MotivationCard.js
export default function MotivationCard({ quote }) {
  return (
    <div className="bg-blue-100 p-4 rounded shadow italic">
      "{quote}"
    </div>
  )
}