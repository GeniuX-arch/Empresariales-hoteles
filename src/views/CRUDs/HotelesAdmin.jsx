import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

import { Loader2 } from "lucide-react";
import axios from "axios";

const HotelesAdmin = () => {
    const navigate = useNavigate();
    const host = "https://backend-empresariales.onrender.com/";
    const [hoteles, setHoteles] = useState([]);
    const [isLoading, setIsLoading] = useState([]);
    useEffect(() => {
    const fetchDatosHoteles = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${host}api/hotel/todos`);
        console.log(response.data);
        setHoteles(response.data);
      } catch (error) {
        console.error("Error fetching hoteles:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDatosHoteles();
  }, []);

  const handleEdit = (id) => {
    console.log("Editar hotel con ID:", id);
    navigate('/hotel-crear/'+id)
    // Aquí se puede agregar la lógica de edición
  };

  const handleLogout = () => {
    localStorage.removeItem("usuario");  // Or any specific item key used for user data
    navigate("/iniciar-sesion")
  };

  const handleDelete = async (hotelId) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este hotel?");
    if (confirmDelete) {
      try {
        setIsLoading(true);
        // Send DELETE request to the backend
        const response = await axios.delete(`${host}/api/hotel/eliminar/${hotelId}`);
        
        if (response.status === 200) {
          alert("Hotel eliminado exitosamente.");
          // Here, you can update the list of hotels to remove the deleted one from the UI
          // For example, you could use a function passed via props to remove the hotel
        } else {
          alert("Hubo un error al eliminar el hotel.");
        }
      } catch (error) {
        console.error("Error al eliminar el hotel:", error);
        alert("Hubo un error al eliminar el hotel.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Cargando hoteles...</p>
          </div>
        </div>
      </div>
    );
  }

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
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-400 text-white py-1 px-2 rounded"
          >
            Cerrar sesión
        </button>
        </nav>
        <div className="w-6 h-6 bg-white rounded-full"></div>
      </header>
      {/* Main Content */}
      <main className="flex-grow text-center p-6">
        <h1 className="text-2xl font-bold mb-6">HOTELES</h1>
        <div className="max-w-5xl mx-auto">
          <Link to="/hotel-crear" className="bg-purple-500 text-white py-2 px-4 rounded mb-4 hover:bg-purple-400">
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
