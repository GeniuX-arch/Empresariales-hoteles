import "../styles/register.css";
import { useNavigate, Link } from 'react-router-dom';

export const Register = () => {

    let enrutamiento = useNavigate ();
    const url = "http://localhost:8080/registro";
    const crearCuenta = {
        nombre: "",
        telefono: "",
        correoElectronico: "",
        contra: ""
    }

    async function envioRegistro() {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(crearCuenta)
            });
    
            let bandera = await response.json();
            console.log(bandera);
    
            if(bandera) {
                enrutamiento("/iniciar-sesion")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-[url('')]">
                <div className="flex justify-center items-center h-screen w-full ">
                    <form id="" className="flex flex-col p-12 gap-5 border rounded-xl w-1/2 bg-white">
                        <h1 className="text-2xl font-bold text-center"> Registro de usuarios</h1>
                        <div>
                            <label htmlFor = "user" className="">Nombre</label> 
                            <input type = "text" name = "user" id = "user" placeholder="Nombre de usuario" 

                            className="w-full p-3 border-2 border-blue-500  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent placeholder-gray-400"
                            onChange={(e) => {crearCuenta.nombre = e.target.value}}></input>
                        </div>
                        <div>
                            <label htmlFor = "email" className="">Email</label> 
                            <input type = "email" name = "email" id = "email" 

                            className="w-full p-3 border-2 border-blue-500  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent placeholder-gray-400"
                            placeholder="Correo electronico" onChange={(e) => {crearCuenta.correoElectronico = e.target.value}}></input>
                        </div>
                        <div>
                            <label htmlFor = "email" className="">Telefono</label> 
                            <input type = "number" name = "number" id = "number" 
                            className="w-full p-3 border-2 border-blue-500  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent placeholder-gray-400"
                            placeholder="Telefono" onChange={(e) => {crearCuenta.telefono = e.target.value}}></input>
                        </div>
                        <div>
                            <label htmlFor = "password" className="">Contraseña</label> 
                            <input type = "password" 
                            
                            className="w-full p-3 border-2 border-blue-500  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent placeholder-gray-400"
                            name = "password" id = "password" placeholder="Contraseña" onChange={(e) => {crearCuenta.contra = e.target.value}}></input>
                        </div>
                        <div>
                            <label htmlFor = "rol" className="">Rol</label> 
                            <select name="rol" id="rol"
                                    className="w-full p-3 border-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent placeholder-gray-400"
                            >
                                <option value="">Selecciona una opción</option>
                                <option value="admin">Administrador</option>
                                <option value="hotel">Hotel</option>
                                <option value="usuario">Usuario</option>
                            </select>
                        </div>
                        <button className = "bg-blue-600 rounded-lg text-white p-2" onClick={(e) => {
                            e.preventDefault();

                            envioRegistro();
                        }}> Registrarse </button>    
                        <p className="text-center">¿Ya tienes una cuenta? - <Link className="text-blue-700 font-bold underline" to="/iniciar-sesion">Iniciar Sesion</Link></p>
                    </form>
                </div>
        </div>
        </>
      );
}