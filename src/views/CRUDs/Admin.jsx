import React from "react";
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center bg-indigo-500 p-4">
        <div className="w-12 h-12 bg-white rounded-full"></div>
        <nav className="flex space-x-4">
          <Link
            to="/admin-usuario"
            className="text-white font-bold hover:text-indigo-200 transition"
          >
            USUARIOS
          </Link>
          <Link
            to="/admin-hotel"
            className="text-white font-bold hover:text-indigo-200 transition"
          >
            HOTELES
          </Link>
        </nav>
        <div className="w-8 h-8 bg-white rounded-full"></div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center flex-1 text-center p-6">
        <h1 className="text-2xl font-bold mb-8">Bienvenido Administrador</h1>
        <div className="flex justify-center space-x-8">
          {/* Card Usuarios */}
          <Link to="/admin-usuario" className="bg-indigo-500 w-48 h-48 rounded-lg shadow-lg flex flex-col items-center justify-center text-white hover:scale-105 hover:shadow-xl transition">
            <div
              className="w-20 h-20 mb-4 bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://cdn-icons-png.flaticon.com/128/14886/14886129.png')",
              }}
            ></div>
            <p className="font-bold">USUARIOS</p>
          </Link>

          {/* Card Hoteles */}
          <Link to="/admin-hotel" className="bg-indigo-500 w-48 h-48 rounded-lg shadow-lg flex flex-col items-center justify-center text-white hover:scale-105 hover:shadow-xl transition">
            <div
              className="w-20 h-20 mb-4 bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://cdn-icons-png.flaticon.com/128/2946/2946876.png')",
              }}
            ></div>
            <p className="font-bold">HOTELES</p>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>copyright</p>
      </footer>
    </div>
  );
};

export default Admin;
