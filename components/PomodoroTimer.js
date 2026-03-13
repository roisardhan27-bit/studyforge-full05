import { useState,useEffect } from "react";
export default function PomodoroTimer() {
  const [s,setS] = useState(25*60),[r,setR]=useState(false);
  useEffect(()=>{
    let i;
    if(r) i=setInterval(()=>setS(p=>p>0?p-1:0),1000);
    return ()=>clearInterval(i);
  },[r]);
  const f=t=>`${Math.floor(t/60).toString().padStart(2,'0')}:${(t%60).toString().padStart(2,'0')}`;
  return <div className="bg-white p-4 rounded-lg shadow-md text-center">
    <h3 className="text-blue-600 mb-2">Pomodoro Timer</h3>
    <div className="text-2xl mb-2">{f(s)}</div>
    <div className="space-x-2">
      <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={()=>setR(true)}>Start</button>
      <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={()=>setR(false)}>Pause</button>
      <button className="bg-orange-500 text-white px-3 py-1 rounded" onClick={()=>setS(25*60)}>Reset</button>
    </div>
  </div>
}