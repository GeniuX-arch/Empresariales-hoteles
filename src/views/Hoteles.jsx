import React, { useEffect, useState } from 'react';
import { Navegation } from '../componentes/navigator';
import CartHoteles from '../componentes/CartHoteles';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Loader2 } from "lucide-react";

export default function Hoteles() {
  const host = "https://backend-empresariales.onrender.com/";
  const [datosHoteles, setDatosHoteles] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [hotelesFiltrados, setHotelesFiltrados] = useState(datosHoteles);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDatosHoteles = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${host}api/hotel/todos`);
        console.log(response.data);
        setDatosHoteles(response.data);
        setHotelesFiltrados(response.data);
      } catch (error) {
        console.error("Error fetching hoteles:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDatosHoteles();
  }, []);


  const manejarBusqueda = (e) => {
    const texto = e.target.value.toLowerCase();
    setBusqueda(texto);
    const filtrados = datosHoteles.filter((hotel) =>
      hotel.nombre.toLowerCase().includes(texto) ||
      hotel.descripcion.toLowerCase().includes(texto)
    );
    setHotelesFiltrados(filtrados);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navegation />
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
    <div className="min-h-screen">
      <Navegation />
      <div className="container mx-auto px-4">
        <div className="my-4">
          <input
            type="text"
            placeholder="Buscar hoteles..."
            value={busqueda}
            onChange={manejarBusqueda}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {hotelesFiltrados.length > 0 ? (
            hotelesFiltrados.map((hotel) => (
              <Link to={"/hotel/"+hotel.id} key={hotel.id}>
                <CartHoteles
                  imagen={hotel.urlImagen}
                  nombre={hotel.nombre}
                  descripcion={hotel.descripcion}
                  calificacion={hotel.puntaje}
                />
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">No se encontraron resultados.</p>
          )}
        </div>
      </div>
    </div>
  );
}