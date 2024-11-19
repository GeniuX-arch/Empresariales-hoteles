import React, { useState } from 'react';

const CrearUsuario = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    type: 'admin',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí puedes agregar lógica para enviar los datos al backend
  };

  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 mx-auto">
      <h2 className="text-center text-2xl font-bold mb-6">Crear Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user-name" className="block font-bold text-gray-700 mb-1">
          Nombre:
        </label>
        <input
          type="text"
          id="user-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nombre completo"
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <label htmlFor="user-email" className="block font-bold text-gray-700 mb-1">
          Correo:
        </label>
        <input
          type="email"
          id="user-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Correo electrónico"
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <label htmlFor="user-password" className="block font-bold text-gray-700 mb-1">
          Contraseña:
        </label>
        <input
          type="password"
          id="user-password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Contraseña"
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <label htmlFor="user-type" className="block font-bold text-gray-700 mb-1">
          Tipo de Usuario:
        </label>
        <select
          id="user-type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="admin">Admin</option>
          <option value="editor">Usuario</option>
          <option value="viewer">Propietario</option>
        </select>

        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Guardar Usuario
        </button>
      </form>
    </div>
  );
};

export default CrearUsuario;
