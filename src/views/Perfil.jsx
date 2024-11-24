import React, { useState, useEffect } from 'react';
import CartHoteles from '../componentes/CartHoteles';
import Lista from '../componentes/Lista';
import { Navegation } from '../componentes/navigator';

export default function Perfil() {
  // Simulated profile data (hardcoded JSON)
  const userProfile = {
    nombre: 'Juan Pérez',
    correo: 'juan.perez@example.com',
    pais: 'Colombia',
    edad: 30,
    descripcion: 'Me encanta viajar y descubrir nuevos lugares.',
    rol: 'user', // or 'hotel'
  };

  const hotelProfile = {
    nombre: 'Hotel Ritoque',
    correo: 'contacto@hotelritoque.com',
    ubicacion: 'Ritoque, Chile',
    descripcion: 'Un hotel con vistas espectaculares al mar.',
    rol: 'hotel', // or 'user'
  };
  

  const [profile, setProfile] = useState(localStorage.getItem('usuario'));
  const [resena, setResena] = useState(userProfile);

  console.log (localStorage.getItem('usuario'))
  const host = "https://backend-empresariales.onrender.com/";

  useEffect(() => {

    const fetchUser =async()=>{
      try{
        const id=JSON.parse(localStorage.getItem('usuario'))?.id
        console.log(id);
        
        const user = await axios.get(host+'/api/resena/'+id)
        setResena(user); // or setProfile(hotelProfile) based on your needs
        }catch{
          console.error("error no se encontró el usuario")
        }
    }
    fetchUser()

  }, []);

  if (!profile) {
    return <p>Cargando perfil...</p>;
  }

  return (
    <div className="">
      <Navegation />
      {/* Render User Profile */}
      {profile.rol === 'user' && (
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <div className="m-6 w-full justify-evenly flex flex-row items-center ">
            <div>
              <img
                src="https://weremote.net/wp-content/uploads/2022/08/mujer-sonriente-apunta-arriba.jpg"
                alt="Avatar"
                className="rounded-full w-32 h-32 object-cover mb-4"
              />
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-2 hover:bg-blue-600">
                Editar
              </button>
              <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
                Eliminar
              </button>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-500">Mi cuenta</p>
              <h1 className="text-2xl font-bold text-gray-800">{profile.nombre}</h1>
              <p className="text-gray-600">Correo: {profile.correo}</p>
              <p className="text-gray-600 mb-4">Descripción: {profile.tipoUsuario}</p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-bold text-gray-800">Historial de Hoteles</h2>
            {/* Here you would map through hotel history */}
            <CartHoteles
              imagen="https://via.placeholder.com/300"
              nombre="Hotel Ritoque"
              descripcion="Un hotel con vistas espectaculares al mar."
              calificacion="4.5"
            />
          </div>
        </div>
      )}

      {/* Render Hotel Profile */}
      {profile.rol === 'hotel' && (
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <div className="mb-6 flex flex-col items-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Hotel Avatar"
              className="rounded-full w-32 h-32 object-cover mb-4"
            />
            <p className="text-gray-500">Mi cuenta</p>
            <h1 className="text-2xl font-bold text-gray-800">{profile.nombre}</h1>
            <p className="text-gray-600">Correo: {profile.correo}</p>
            <p className="text-gray-600">Ubicación: {profile.ubicacion}</p>
            <p className="text-gray-600 mb-4">Descripción: {profile.descripcion}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-2 hover:bg-blue-600">
              Editar
            </button>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
              Eliminar
            </button>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-bold text-gray-800">Lista de Habitaciones</h2>
            {/* Display list of rooms or services */}
            <Lista />
          </div>
        </div>
      )}
    </div>
  );
}
