import React, { useState, useEffect } from 'react';
import CartHoteles from '../componentes/CartHoteles';
import Lista from '../componentes/Lista';
import { Navegation } from '../componentes/navigator';
import { Link } from 'react-router-dom';
import { Grafica } from '../componentes/grafica';
import { Estrellas } from '../componentes/Estrellas';

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
     

      {/* Render Hotel Profile */}
        <div className="bg-white rounded-lg p-6 shadow-lg m-4 ">
        <div className='flex lg:flex-row flex-col justify-around'>
                <div className='flex flex-col items-center'>
                        <div className="mb-6 flex flex-col items-center">

                            <h1 className='text-center text-xl mb-2 font-bold'>Mi hotel</h1>
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
                            <div className='flex flex-row justify-center'>
                            <Link to="/hotel-crear/" className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-2 hover:bg-blue-600">
                                Editar
                            </Link>
                            <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
                                Eliminar
                            </button>
                            </div>
                        </div>
                <div>
                    <Estrellas className="w-max" />
                </div>
          </div>
          <div className='lg:w-7/12 w-full'>
             <Grafica className="w-max" />
          </div>
          </div>

        </div>
          <div className="mt-6">

            <h2 className="text-xl text-center font-bold text-gray-800">Reseñas</h2>
            {/* Display list of rooms or services */}
          </div>
    </div>
  );
}

