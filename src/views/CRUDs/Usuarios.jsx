import React from "react";
import { useState, useEffect } from "react";
import { Navegation } from "../../componentes/navigator";
import { Loader2 } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
const Usuarios = () => {

    const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("usuario");  // Or any specific item key used for user data
    navigate("/iniciar-sesion")
  };

    const host = "https://backend-empresariales.onrender.com/";
    const [usuarios, setUsuarios] = useState([]);
    const [isLoading, setIsLoading] = useState([]);
    useEffect(() => {
    const fetchDatosHoteles = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${host}api/usuario/todos`);
        console.log(response.data);
        setUsuarios(response.data);
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
    // Aquí se puede agregar la lógica de edición
  };

  
  const handleDeleteUser = async (userId) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este usuario?");
    if (confirmDelete) {
      try {
        setIsLoading(true);
        // Send DELETE request to the backend to delete the user
        const response = await axios.delete(`${host}/api/usuario/eliminar/${userId}`);
        
        if (response.status === 200) {
          alert("Usuario eliminado exitosamente.");
          // Optionally, call a function to refresh the list of users
          refreshUsers();
        } else {
          alert("Hubo un error al eliminar el usuario.");
        }
      } catch (error) {
        console.error("Error al eliminar el usuario:", error);
        alert("Hubo un error al eliminar el usuario.");
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
            <p className="text-gray-600">Cargando usuarios...</p>
          </div>
        </div>
      </div>
    );
  }
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
      <main className="flex-1 text-center p-5">
        <h1 className="text-2xl font-bold mb-5">USUARIOS</h1>
        <div className="mx-auto max-w-4xl">
          <Link to="/usuario-crear" className="bg-purple-500 hover:bg-purple-400 text-white py-2 px-4 rounded mb-4 text-lg">
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
            {usuarios.map((usuario, index) => (
                <tr className="even:bg-gray-200 hover:bg-gray-300">
                  <td className="py-2 px-4 text-center">{usuario.id}</td>
                  <td className="py-2 px-4 text-center">{usuario.nombre}</td>
                  <td className="py-2 px-4 text-center">{usuario.correo}</td>
                  <td className="py-2 px-4 text-center">******</td>
                  <td className="py-2 px-4 text-center">{usuario.tipoUsuario}</td>
                  <td className="py-2 px-4 text-center space-x-2">
                    <Link to={"/usuario-crear/"+usuario.id} className="bg-green-500 hover:bg-green-400 text-white py-1 px-2 rounded">
                      Editar
                    </Link>
                     <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="bg-red-500 hover:bg-red-400 text-white py-1 px-2 rounded"
                          disabled={isLoading}
                        >
                          {isLoading ? "Eliminando..." : "Eliminar"}
                        </button>
                  </td>
                </tr>
            ))}
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
