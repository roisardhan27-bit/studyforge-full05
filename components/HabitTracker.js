import { useState } from "react";
export default function HabitTracker() {
  const [habits,setHabits] = useState([
    {name:"Study 1 hour",xp:20,done:false},
    {name:"Read 10 pages",xp:10,done:false},
    {name:"Exercise",xp:15,done:false},
    {name:"No social media during study",xp:5,done:false}
  ]);
  const toggle = i => setHabits(h=>h.map((x,idx)=> idx===i? {...x,done:!x.done}:x));
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-blue-600 mb-2">Habit Tracker</h3>
      {habits.map((h,i)=><div key={i} className="flex items-center space-x-2">
        <input type="checkbox" checked={h.done} onChange={()=>toggle(i)} />
        <span>{h.name}</span>
      </div>)}
    </div>
  )
}