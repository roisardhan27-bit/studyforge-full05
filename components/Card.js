export default function TaskList({ tasks }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-blue-600 mb-2">Today's Plan</h3>
      <ul className="list-disc list-inside">
        {tasks.map((task,i)=><li key={i}>{task}</li>)}
      </ul>
    </div>
  );
}
