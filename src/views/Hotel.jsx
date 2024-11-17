import React from 'react';
import Lista from '../componentes/Lista';
import { Navegation } from '../componentes/navigator';

export default function Hotel() {
  return (
    <>
    
    <Navegation />
    <div className="flex flex-col md:flex-row p-6 space-y-6 md:space-y-0 md:space-x-6">
      {/* Contenedor del hotel */}
      <div className="flex flex-col w-full md:w-1/3 items-center p-6 bg-white shadow-lg rounded-lg">
        <div className="w-full">
          <img
            src="https://source.unsplash.com/featured/?hotel"
            alt="Imagen del Hotel Ritoque"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full mt-4">
          <h1 className="text-2xl font-bold text-blue-700 mb-2">Hotel Ritoque</h1>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            consectetur nemo tenetur, aut esse fugiat, eum exercitationem ex iusto
            omnis rerum dolor fuga?
          </p>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 font-semibold underline"
          >
            Más información
          </a>
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Reservar ahora
          </button>
        </div>
      </div>

      {/* Contenedor de la lista */}
      <div className="w-full md:w-2/3">
       <h1 className='text-center font-bold text-2xl m-4'>comentarios</h1>
        <Lista
          imagen="https://weremote.net/wp-content/uploads/2022/08/mujer-sonriente-apunta-arriba.jpg"
          nombre="Carlos"
          text="Hola, bienvenido a nuestro hotel."
          calificacion="5"
        />
      </div>
    </div>
  </>
  );
}
