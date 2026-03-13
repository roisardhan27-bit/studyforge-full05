export default function Card({ title, children }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-blue-600 mb-2 font-semibold">{title}</h3>
      {children}
    </div>
  );
}