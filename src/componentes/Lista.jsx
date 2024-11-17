export default function Lista({ imagen, nombre, calificacion, text }) {
  return (
    <div className="flex items-start p-4 space-x-4 border rounded-lg shadow-sm">
      <div className="w-16 h-16 overflow-hidden rounded-full">
        <img src={imagen} alt={nombre} className="object-cover w-full h-full" />
      </div>
      <div>
        <h1 className="text-lg font-bold">{nombre}</h1>
        <p className="text-sm text-gray-600">Calificación: {calificacion}</p>
        <p className="text-sm text-gray-500">{text}</p>
      </div>
    </div>
  );
}