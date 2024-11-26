import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

export const Login = () => {
    const navigate = useNavigate();

    // Estados para gestionar el formulario
    const [inputCorreo, setInputCorreo] = useState("");
    const [inputContra, setInputContra] = useState("");
    const [tipoUsuario, setTipoUsuario] = useState("");
    const [errorMensaje, setErrorMensaje] = useState("");

    const url = "https://backend-empresariales.onrender.com/login";

    // Manejar los cambios en los inputs
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setErrorMensaje(""); // Restablecer el mensaje de error al cambiar un input

        if (id === "correo") setInputCorreo(value);
        if (id === "password") setInputContra(value);
    };

    const handleSelectChange = (e) => setTipoUsuario(e.target.value);

    // Validar el formulario antes de enviarlo
    const validarFormulario = () => {
        if (!inputCorreo || !inputContra || !tipoUsuario) {
            setErrorMensaje("Por favor, completa todos los campos.");
            return false;
        }
        return true;
    };

    // Manejar el envío del formulario
    const envioSesion = async (e) => {
        e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

        if (!validarFormulario()) return;

        const datosSesion = {
            email: inputCorreo,
            password: inputContra,
            tipoUsuario: tipoUsuario
        };
        console.log(datosSesion)

        try {
            const respuesta = await axios.post(url, datosSesion, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const datos = respuesta.data;
            localStorage.setItem("usuario", JSON.stringify(datos));
            if(tipoUsuario=='Administrador'){
                navigate("/admin"); // Redirigir al usuario
            }else if(tipoUsuario=='Propietario'){
                navigate("/propietario"); // Redirigir al usuario
            }else{
                navigate("/"); // Redirigir al usuario
            }
        } catch (error) {
            console.error("Error en el inicio de sesión:", error);
            if (error.response?.status === 401) {
                setErrorMensaje("El correo o la contraseña son incorrectos.");
            } else if (error.response?.status === 401) {
                setErrorMensaje("El correo o la contraseña son incorrectos."); }
            else{
            setErrorMensaje("Hubo un problema con el servidor. Intenta de nuevo más tarde.");
            }
        }
    };

    return (
        <section className="flex flex-row w-full justify-between">
            <div className="flex flex-row justify-center items-center w-2/3">
                <form className="flex flex-col gap-5 border w-2/3 p-10 rounded-xl shadow-md shadow-gray" onSubmit={envioSesion}>
                    <h2 className="text-xl font-bold text-center">Login</h2>

                    <div>
                        <label htmlFor="correo">Correo Electrónico:</label>
                        <input
                            type="email"
                            id="correo"
                            className="w-full p-3 border-2  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent placeholder-gray-400"
                            placeholder="Ingresa tu correo electrónico"
                            value={inputCorreo}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-3 border-2  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent placeholder-gray-400"
                            placeholder="Ingresa tu contraseña"
                            value={inputContra}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="tipoUsuario">Selecciona el rol:</label>
                        <select
                            id="tipoUsuario"
                            className="w-full p-3 border-2  rounded-lg"
                            value={tipoUsuario}
                            onChange={handleSelectChange}
                        >
                            <option value="">Selecciona el rol</option>
                            <option value="Administrador">Administrador</option>
                            <option value="Usuario">Usuario</option>
                            <option value="Propietario">Propietario</option>
                        </select>
                    </div>

                    {errorMensaje && (
                        <small className="text-red-600">{errorMensaje}</small>
                    )}

                    <button
                        type="submit"
                        className="bg-blue-700 hover:bg-blue-800 p-2 text-white rounded-lg"
                    >
                        Iniciar Sesión
                    </button>

                    <p className="text-center">
                        ¿No tienes cuenta? -{" "}
                        <Link className="text-blue-700 font-bold underline" to="/registrarse">
                            Regístrate ahora
                        </Link>
                    </p>
                </form>
            </div>

            <div className="h-screen">
                <img
                    src="https://m.media-amazon.com/images/I/71m9q7HlMOL._AC_SL1500_.jpg"
                    className="h-screen rounded-l-full"
                    alt="comida-restaurante"
                />
            </div>
        </section>
    );
};
