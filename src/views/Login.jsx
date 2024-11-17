import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {

    let enrutamiento = useNavigate ();
    let [ bandera, setBandera ] = useState(false);
    const [ inputCorreo, setInputCorreo ] = useState("");
    const [ inputContra, setInputContra ] = useState("");
    const url = "http://localhost:8080/login";

    const datosSesion = {
        correo: inputCorreo,
        contra: inputContra
    }

    async function envioSesion() {
        console.log(datosSesion);
        try {
            const respuesta = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datosSesion)
            });

            const datos = await respuesta.json();

            console.log(datos);
            
            if(respuesta.ok) {
                //SE GUARDA EL OBJETO EN EL LOCAL STORAGE
                localStorage.setItem('usuario', JSON.stringify(datos));
                enrutamiento("/");
            }else {
                setBandera(true);
            }

        } catch (error) {
            console.log(error);
            setBandera(true);
        }
    } const handleInputChange = (e) => {
        setBandera(false); // Restablecer la bandera cuando el usuario comienza a corregir la información
        //datosSesion[e.target.id] = e.target.value;
        if(e.target.id == "correo") {
            setInputCorreo(e.target.value);
        }else {
            setInputContra(e.target.value);
        }
    }

    return(
        <>
            <section className="flex flex-row w-full justify-between">
                <div className="flex flex-row justify-center items-center w-2/3 ">
                        <form action="" className="flex flex-col gap-5 border w-2/3 p-10 rounded-xl shadow-md shadow-gray">
                            <h2 className="text-xl font-bold text-center">Login</h2>
                            <div>
                                <label htmlFor="correo" className="">Correo Electrónico:</label>
                                <input type="email" id="correo" 
                                className="w-full p-3 border-2 border-blue-500  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent placeholder-gray-400"
                                placeholder="Ingresa tu correo electronico"
                                onChange={handleInputChange} value={inputCorreo}/>
                            </div>
                            <div>
                                <label htmlFor="contra" className="">Contraseña:</label>
                                <input
                                    type="password"
                                    id="contra"
                                    className="w-full p-3 border-2 border-blue-500  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent placeholder-gray-400"
                                    onChange={handleInputChange}
                                    value={inputContra}
                                    placeholder="Ingresa tu contraseña"
                                />
                                </div>
                                { (bandera)? <small>Error, el Correo o la Contraseña son incorrectos.</small>: <small></small> }

                                <button 
                                className="bg-blue-700 hover:bg-blue-800 p-2 text-white rounded-lg" onClick={(e) => {
                                e.preventDefault();
                                //console.log(datosSesion); 
                                envioSesion();

                                }}>Iniciar Sesión</button>


                            <p className="text-center">¿No tienes cuenta? - <Link className="text-blue-700 font-bold underline" to = "/registrarse"> registrate ahora</Link></p>
                        </form>
                    </div>
                <div className="h-screen">
                    <img src="https://m.media-amazon.com/images/I/71m9q7HlMOL._AC_SL1500_.jpg" className="h-screen rounded-l-full 1/3" alt="comida-restaurante"/>
                </div>
            </section>
        </>
    );
}