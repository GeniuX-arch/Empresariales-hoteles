import React from 'react';
import { Link } from 'react-router-dom';

const Usuarios = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
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
      <main className="flex-1 text-center p-5">
        <h1 className="text-2xl font-bold mb-5">USUARIOS</h1>
        <div className="mx-auto max-w-4xl">
          <Link to="/admin-usuario-crear" className="bg-purple-500 hover:bg-purple-400 text-white py-2 px-4 rounded mb-4 text-lg">
            Agregar Usuario
          </Link>
          <table className="w-full border-collapse bg-gray-100 shadow-md">
            <thead className="bg-purple-500 text-white">
              <tr>
                <th className="py-2 px-4">Id</th>
                <th className="py-2 px-4">Nombre</th>
                <th className="py-2 px-4">Correo</th>
                <th className="py-2 px-4">Contraseña</th>
                <th className="py-2 px-4">Tipo de Usuario</th>
                <th className="py-2 px-4">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-gray-200 hover:bg-gray-300">
                <td className="py-2 px-4 text-center">1</td>
                <td className="py-2 px-4 text-center">Juan Pérez</td>
                <td className="py-2 px-4 text-center">juan.perez@example.com</td>
                <td className="py-2 px-4 text-center">******</td>
                <td className="py-2 px-4 text-center">Administrador</td>
                <td className="py-2 px-4 text-center space-x-2">
                  <button className="bg-green-500 hover:bg-green-400 text-white py-1 px-2 rounded">
                    Editar
                  </button>
                  <button className="bg-red-500 hover:bg-red-400 text-white py-1 px-2 rounded">
                    Eliminar
                  </button>
                </td>
              </tr>
              <tr className="even:bg-gray-200 hover:bg-gray-300">
                <td className="py-2 px-4 text-center">2</td>
                <td className="py-2 px-4 text-center">María López</td>
                <td className="py-2 px-4 text-center">maria.lopez@example.com</td>
                <td className="py-2 px-4 text-center">******</td>
                <td className="py-2 px-4 text-center">Usuario</td>
                <td className="py-2 px-4 text-center space-x-2">
                  <button className="bg-green-500 hover:bg-green-400 text-white py-1 px-2 rounded">
                    Editar
                  </button>
                  <button className="bg-red-500 hover:bg-red-400 text-white py-1 px-2 rounded">
                    Eliminar
                  </button>
                </td>
              </tr>
              {/* Agrega más filas aquí si es necesario */}
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-3 mt-auto">
        <p>&copy; 2024</p>
      </footer>
    </div>
  );
};

export default Usuarios;
