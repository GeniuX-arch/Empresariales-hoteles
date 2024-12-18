import { Navegation } from "../componentes/navigator";
import { Footer } from "../footer/footer";

export const Contacto = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navegation />
            <div className="flex-grow bg-gray-100">
                {/* Imagen de fondo con encabezado */}
                <div
                    className="relative h-64 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://www.kayak.com.co/news/wp-content/uploads/sites/180/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
                        <div className="text-white px-6">
                            <h1 className="text-4xl font-bold">CONTÁCTENOS</h1>
                            <p className="mt-2 text-lg">
                                Sugerencias, dudas incluso quejas, <br />
                                <strong>¡Contáctanos ahora mismo!</strong>
                            </p>
                        </div>
                    </div>
                </div>
                {/* Tarjetas de contacto */}
                <div className="container mx-auto p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Héctor Díaz */}
                        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
                            <h2 className="text-xl font-semibold text-gray-800">Héctor Díaz</h2>
                            <p className="text-gray-600 mt-2">
                                Estudiante de Tecnología en desarrollo de sistemas informáticos en las UTS.
                            </p>
                            <p className="mt-4 text-gray-500">
                                Correo:{" "}
                                <a href="mailto:hidiaz@uts.edu.co" className="text-blue-500 underline">
                                    hidiaz@uts.edu.co
                                </a>
                            </p>
                        </div>
                        {/* Pavel Gélvez */}
                        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
                            <h2 className="text-xl font-semibold text-gray-800">Pavel Gélvez</h2>
                            <p className="text-gray-600 mt-2">
                                Estudiante de Tecnología en desarrollo de sistemas informáticos en las UTS.
                            </p>
                            <p className="mt-4 text-gray-500">
                                Correo:{" "}
                                <a href="mailto:pagelvez@uts.edu.co" className="text-blue-500 underline">
                                    pagelvez@uts.edu.co
                                </a>
                            </p>
                        </div>
                        {/* Jhoan Jiménez */}
                        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
                            <h2 className="text-xl font-semibold text-gray-800">Jhoan Jiménez</h2>
                            <p className="text-gray-600 mt-2">
                                Estudiante de Tecnología en desarrollo de sistemas informáticos en las UTS.
                            </p>
                            <p className="mt-4 text-gray-500">
                                Correo:{" "}
                                <a href="mailto:jhoansjimenez@uts.edu.co" className="text-blue-500 underline">
                                    jhoansjimenez@uts.edu.co
                                </a>
                            </p>
                        </div>
                    </div>
                    {/* Usuarios y Contraseñas */}
                    <div className="mt-8">
                        <h3 className="font-bold text-gray-800 text-2xl mb-4">Usuarios y Contraseñas</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Oscar Pérez */}
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h4 className="text-xl font-semibold text-gray-800">Oscar Pérez</h4>
                                <p className="text-gray-600 mt-2">Correo: oscar.perez@example.com</p>
                                <p className="text-gray-600 mt-1">Contraseña: pass1234</p>
                                <p className="text-gray-500 mt-2">Tipo de usuario: Administrador</p>
                            </div>
                            {/* Sofía Ramírez */}
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h4 className="text-xl font-semibold text-gray-800">Sofía Ramírez</h4>
                                <p className="text-gray-600 mt-2">Correo: sofia.ramirez@example.com</p>
                                <p className="text-gray-600 mt-1">Contraseña: ownerPass998</p>
                                <p className="text-gray-500 mt-2">Tipo de usuario: Propietario</p>
                            </div>
                            {/* Carlos Ruiz */}
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h4 className="text-xl font-semibold text-gray-800">Carlos Ruiz</h4>
                                <p className="text-gray-600 mt-2">Correo: carlos.ruiz@example.com</p>
                                <p className="text-gray-600 mt-1">Contraseña: securePass123</p>
                                <p className="text-gray-500 mt-2">Tipo de usuario: Usuario</p>
                            </div>
                        </div>
                    </div>
                    {/* Link de la presentación */}
                    <div className="container bg-white rounded-lg shadow-lg p-6 mt-8">
                        <a
                            href="https://www.canva.com/design/DAGXmWA92MQ/em52NxdxJR6a0wj1_AzWuw/edit?utm_content=DAGXmWA92MQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                            className="text-xl font-semibold text-blue-500 underline"
                        >
                            Link de la presentación (CANVA)
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
