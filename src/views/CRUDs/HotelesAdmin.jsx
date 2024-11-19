import React from "react";
import { Link } from 'react-router-dom';

const HotelesAdmin = () => {
  const hoteles = [
    {
      id: 1,
      nombre: "Hotel Luna",
      descripcion: "Un hotel con vistas espectaculares.",
      direccion: "Calle Luna, 123",
      urlImagen: "https://example.com/hotel-luna.jpg",
      puntaje: 4.8,
    },
    {
      id: 2,
      nombre: "Hotel Sol",
      descripcion: "Perfecto para vacaciones en familia.",
      direccion: "Avenida Sol, 456",
      urlImagen: "https://example.com/hotel-sol.jpg",
      puntaje: 4.5,
    },
    // Agrega más hoteles aquí
  ];

  const handleEdit = (id) => {
    console.log("Editar hotel con ID:", id);
    // Aquí se puede agregar la lógica de edición
  };

  const handleDelete = (id) => {
    console.log("Eliminar hotel con ID:", id);
    // Aquí se puede agregar la lógica de eliminación
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center bg-purple-500 text-white p-4">
        <div className="w-12 h-12 bg-white rounded-full"></div>
        <nav className="flex space-x-4">
          <Link to="/admin-usuario" className="font-bold hover:underline">
            USUARIOS
          </Link>
          <Link to="/admin-hotel" className="font-bold hover:underline">
            HOTELES
          </Link>
        </nav>
        <div className="w-6 h-6 bg-white rounded-full"></div>
      </header>
      {/* Main Content */}
      <main className="flex-grow text-center p-6">
        <h1 className="text-2xl font-bold mb-6">HOTELES</h1>
        <div className="max-w-5xl mx-auto">
          <Link to="/admin-hotel-crear" className="bg-purple-500 text-white py-2 px-4 rounded mb-4 hover:bg-purple-400">
            Agregar Hotel
          </Link>
          <table className="w-full border-collapse bg-gray-100 shadow-lg">
            <thead className="bg-purple-500 text-white">
              <tr>
                <th className="py-2 px-4">Id</th>
                <th className="py-2 px-4">Nombre</th>
                <th className="py-2 px-4">Descripción</th>
                <th className="py-2 px-4">Dirección</th>
                <th className="py-2 px-4">URL Imagen</th>
                <th className="py-2 px-4">Puntaje</th>
                <th className="py-2 px-4">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {hoteles.map((hotel) => (
                <tr
                  key={hotel.id}
                  className="odd:bg-white even:bg-gray-200 hover:bg-gray-300"
                >
                  <td className="py-2 px-4 text-center">{hotel.id}</td>
                  <td className="py-2 px-4">{hotel.nombre}</td>
                  <td className="py-2 px-4">{hotel.descripcion}</td>
                  <td className="py-2 px-4">{hotel.direccion}</td>
                  <td className="py-2 px-4">{hotel.urlImagen}</td>
                  <td className="py-2 px-4 text-center">{hotel.puntaje}</td>
                  <td className="py-2 px-4 text-center">
                    <button
                      onClick={() => handleEdit(hotel.id)}
                      className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-400 mr-2"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(hotel.id)}
                      className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-400"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-2">
        <p>© 2024 Hoteles, Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default HotelesAdmin;
