export default function XPTracker() {
  const xp = 120;
  const level = 3;
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-blue-600 mb-2">XP Tracker</h3>
      <p>Level: {level}</p>
      <p>XP: {xp}</p>
      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
        <div className="bg-blue-600 h-2 rounded-full" style={{width:`${xp}%`}}></div>
      </div>
    </div>
  );
}