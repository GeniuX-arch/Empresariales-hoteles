import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Navegation = () => {
  const [bandera, setBandera] = useState(true);
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    if (usuario === null) {
      setBandera(false);
    } else {
      setNombre(usuario.nombre);
      setBandera(true);
    }
  }, []);

  function login() {
    return (
      <li className="nav-item">
        <Link className="nav-link text-blue-500 hover:text-blue-700" to="/iniciar-sesion">
          Login
        </Link>
      </li>
    );
  }

  function loginActive() {
    return (
      <li className="nav-item relative">
        <button className="nav-link text-blue-500 hover:text-blue-700 flex items-center">
          {nombre}
          <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.04 0L10 10.94l3.73-3.73a.75.75 0 1 1 1.04 1.08l-4.5 4.5a.75.75 0 0 1-1.08 0l-4.5-4.5a.75.75 0 0 1 0-1.08z" />
          </svg>
        </button>
        <ul className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
          <li><Link className="block px-4 py-2 text-gray-700 hover:bg-gray-100" to="/perfil">Perfil</Link></li>
          <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Mis Reservas</a></li>
          <li><hr className="my-2" /></li>
          <li>
            <button
              className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
              onClick={() => {
                localStorage.removeItem('usuario');
                location.reload();
              }}
            >
              Cerrar Sesión
            </button>
          </li>
        </ul>
      </li>
    );
  }

  return (
    <nav className="bg-gray-800 shadow-lg text-gray-100">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img
            src="src/assets/restaurante.jpeg"
            alt="Logo"
            className="w-12 h-12 rounded-full"
          />
          <h1 className="ml-3 text-xl font-bold text-blue-600">Hoteles</h1>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link className="text-gray-100 hover:text-blue-600 font-semibold" to="/">Home</Link>
          </li>
          <li>
            <Link className="text-gray-100 hover:text-blue-600 font-semibold" to="/hoteles">Hoteles</Link>
          </li>
          <li>
            <Link className="text-gray-100 hover:text-blue-600 font-semibold" to="/contacto">Contacto</Link>
          </li>
          <li>
            <Link className="text-gray-100 hover:text-blue-600 font-semibold" to="/perfil">perfil</Link>
          </li>
          {bandera ? loginActive() : login()}
          <li>
            <Link className="text-gray-100 hover:text-blue-600" to="#">
              <svg className="w-6 h-6" viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
