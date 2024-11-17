import React, { useState } from 'react';
import { Navegation } from '../componentes/navigator';
import CartHoteles from '../componentes/CartHoteles';
import { Link } from 'react-router-dom';

const datosHoteles = [
  {
    id: 1,
    imagen: 'https://via.placeholder.com/300',
    nombre: 'Hotel Ritoque',
    descripcion: 'Un lugar para relajarse junto al mar',
    calificacion: '5',
  },
  {
    id: 2,
    imagen: 'https://via.placeholder.com/300',
    nombre: 'Hotel Montaña',
    descripcion: 'Vista espectacular a las montañas',
    calificacion: '4',
  },
  {
    id: 3,
    imagen: 'https://via.placeholder.com/300',
    nombre: 'Hotel Ciudad',
    descripcion: 'Ubicado en el corazón de la ciudad',
    calificacion: '3',
  },
];

export default function Hoteles() {
  const [busqueda, setBusqueda] = useState('');
  const [hotelesFiltrados, setHotelesFiltrados] = useState(datosHoteles);

  const manejarBusqueda = (e) => {
    const texto = e.target.value.toLowerCase();
    setBusqueda(texto);

    const filtrados = datosHoteles.filter((hotel) =>
      hotel.nombre.toLowerCase().includes(texto) ||
      hotel.descripcion.toLowerCase().includes(texto)
    );

    setHotelesFiltrados(filtrados);
  };

  return (
    <div className="">
      <Navegation />
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
            <Link to="/hotel" >
                <CartHoteles
                    key={hotel.id}
                    imagen={hotel.imagen}
                    nombre={hotel.nombre}
                    descripcion={hotel.descripcion}
                    calificacion={hotel.calificacion}
                />
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-600">No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
}
