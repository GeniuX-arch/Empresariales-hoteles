import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import axios from 'axios';

export const Register = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correoElectronico: '',
    contra: '',
    rol: 'usuario',
  });
  const host = "https://backend-empresariales.onrender.com";

  useEffect(() => {
    const fetchUserData = async () => {
      if (id) {
        try {
          setIsLoading(true);
          const response = await axios.get(`${host}/api/usuario/${id}`);
          const data = response.data;
          setFormData({
            nombre: data.nombre,
            telefono: data.telefono,
            correoElectronico: data.correoElectronico,
            contra: '',
            rol: data.rol || 'usuario',
          });
        } catch (error) {
          console.error('Error loading user data:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchUserData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const url = id ? `${host}/api/usuario/editar` : `${host}/api/usuario/crear`;
      const method = id ? 'PUT' : 'POST';
      
      const response = await axios({
        method,
        url,
        headers: {
          'Content-Type': 'application/json',
        },
        data: formData,
      });

      if (response.status === 200 || response.status === 201) {
        navigate('/iniciar-sesion');
      } else {
        throw new Error('Error saving user');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 "></div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-[url('https://www.atrapalo.com.co/hoteles/picture/l/6756/0/1/299984022.jpg')]">
      <div className="flex justify-center items-center h-screen w-full bg-opacity-50 backdrop-blur-lg">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-12 gap-5 border rounded-xl w-1/2 bg-white"
        >
          <h1 className="text-2xl font-bold text-center">{id ? 'Editar Usuario' : 'Registro de usuarios'}</h1>

          <div>
            <label htmlFor="nombre" className="">Nombre</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre de usuario"
              value={formData.nombre}
              onChange={handleInputChange}
              className="w-full p-3 border-2  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent placeholder-gray-400"
            />
          </div>

          <div>
            <label htmlFor="correoElectronico" className="">Email</label>
            <input
              type="email"
              name="correoElectronico"
              id="correoElectronico"
              placeholder="Correo electrónico"
              value={formData.correoElectronico}
              onChange={handleInputChange}
              className="w-full p-3 border-2  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent placeholder-gray-400"
            />
          </div>

          <div>
            <label htmlFor="telefono" className="">Teléfono</label>
            <input
              type="number"
              name="telefono"
              id="telefono"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={handleInputChange}
              className="w-full p-3 border-2  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent placeholder-gray-400"
            />
          </div>

          <div>
            <label htmlFor="contra" className="">Contraseña</label>
            <input
              type="password"
              name="contra"
              id="contra"
              placeholder="Contraseña"
              value={formData.contra}
              onChange={handleInputChange}
              className="w-full p-3 border-2  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent placeholder-gray-400"
            />
          </div>

          <div>
            <label htmlFor="rol" className="">Rol</label>
            <select
              name="rol"
              id="rol"
              value={formData.rol}
              onChange={handleInputChange}
              className="w-full p-3 border-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent placeholder-gray-400"
            >
              <option value="Usuario">Usuario</option>
              <option value="Propietario">Hotel</option>
              <option value="Administrador">Administrador</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 rounded-lg text-white p-2 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-900"
          >
            {id ? 'Actualizar Usuario' : 'Registrarse'}
          </button>
          <p className="text-center">
            ¿Ya tienes una cuenta? - <Link className="text-blue-700 font-bold underline" to="/iniciar-sesion">Iniciar Sesión</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
