import React from "react";

const CrearHotel = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8">
      {/* Contenedor del formulario */}
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Crear Hotel
        </h2>
        <form id="create-hotel-form" className="space-y-4">
          {/* Campo Nombre */}
          <div>
            <label
              htmlFor="hotel-name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="hotel-name"
              name="name"
              placeholder="Nombre del hotel"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Campo Descripción */}
          <div>
            <label
              htmlFor="hotel-description"
              className="block text-sm font-medium text-gray-700"
            >
              Descripción:
            </label>
            <textarea
              id="hotel-description"
              name="description"
              placeholder="Descripción del hotel"
              rows="3"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>

          {/* Campo Dirección */}
          <div>
            <label
              htmlFor="hotel-address"
              className="block text-sm font-medium text-gray-700"
            >
              Dirección:
            </label>
            <input
              type="text"
              id="hotel-address"
              name="address"
              placeholder="Dirección del hotel"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Campo URL de Imagen */}
          <div>
            <label
              htmlFor="hotel-url"
              className="block text-sm font-medium text-gray-700"
            >
              URL de Imagen:
            </label>
            <input
              type="url"
              id="hotel-url"
              name="url"
              placeholder="URL de la imagen del hotel"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Campo Puntaje */}
          <div>
            <label
              htmlFor="hotel-rating"
              className="block text-sm font-medium text-gray-700"
            >
              Puntaje:
            </label>
            <input
              type="number"
              id="hotel-rating"
              name="rating"
              min="0"
              max="5"
              step="0.1"
              placeholder="Puntaje (0-5)"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Botón Guardar */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-medium py-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Guardar Hotel
          </button>
        </form>
      </div>
    </div>
  );
};

export default CrearHotel;
