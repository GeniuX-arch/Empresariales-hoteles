import { Footer } from "../footer/footer.jsx";
import { Navegation } from "../componentes/navigator.jsx";

export const Home = () => {
  return (
    <>
      <Navegation />
      <div>
        {/* QUIÉNES SOMOS */}
        <div className="flex flex-col md:flex-row justify-between py-10 md:py-20 px-4 md:px-20 lg:px-44 w-full">
          <div className="p-5 md:w-1/2">
            <h1 className="text-2xl font-bold mb-4">¿Quiénes Somos?</h1>
            <p className="text-gray-600 mb-4">
              Descubre una Experiencia Gastronómica Inolvidable.
            </p>
            <p className="text-gray-600">
              Somos una plataforma dedicada a facilitar la búsqueda y reservación de hoteles ideales para cada viajero. Desde escapadas románticas hasta aventuras familiares, trabajamos para conectar a nuestros usuarios con una amplia variedad de opciones de hospedaje en destinos soñados.
            </p>
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2">
            <img
              className="rounded-full h-auto max-h-80 md:max-h-full object-cover"
              src="https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="imagen-copa-cubiertos-restaurante"
            />
          </div>
        </div>

        {/* SERVICIOS */}
        <div className="flex flex-col justify-center w-full px-4 md:px-20 lg:px-44 my-16">
          <h2 className="text-2xl font-bold mb-6">Servicios</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              {
                title: "Reservación",
                description:
                  "Accede a una amplia selección de hoteles en todo el mundo y realiza reservas instantáneas de forma segura.",
              },
              {
                title: "Filtros",
                description:
                  "Busca hoteles según tus necesidades: ubicación, precio, servicios incluidos, clasificación por estrellas, y más.",
              },
              {
                title: "Ofertas",
                description:
                  "Aprovecha descuentos especiales y paquetes únicos solo disponibles en nuestra plataforma.",
              },
              {
                title: "Pagos Flexibles",
                description:
                  "Paga en línea con métodos seguros o selecciona opciones como pagos a plazos o al llegar al hotel.",
              },
            ].map((servicio, index) => (
              <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2">{servicio.title}</h3>
                <p className="text-gray-600">{servicio.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* DESCUBRE NUESTROS HOTELES */}
        <div className="px-4 md:px-20 lg:px-44 py-10">
          <h1 className="text-2xl font-bold mb-6">Descubre nuestros hoteles</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "BOUTIQUE",
                description:
                  "Disfruta de una experiencia gastronómica única en nuestro restaurante elegante. Nuestro menú cuidadosamente seleccionado y ambiente sofisticado te esperan.",
                image:
                  "https://cdn.forbes.co/2020/02/sofitel-legend-santa-clara-outdoor-pool.jpg",
              },
              {
                title: "NEGOCIOS",
                description:
                  "Diseñados para viajeros corporativos, con servicios como salas de reuniones, conexión Wi-Fi de alta velocidad y ubicaciones estratégicas cerca de centros empresariales o aeropuertos.",
                image:
                  "https://cache.marriott.com/is/image/marriotts7prod/mc-baqmc-facade-29812:Wide-Hor?wid=1336&fit=constrain",
              },
              {
                title: "TODO INCLUIDO",
                description:
                  "Perfectos para quienes quieren disfrutar sin preocuparse por los detalles. Incluyen alojamiento, comidas, bebidas y actividades recreativas en un solo paquete.",
                image:
                  "https://sonesta.hoteles-santander.com/data/Images/OriginalPhoto/12839/1283906/1283906287/image-bucaramanga-sonesta-hotel-1.JPEG",
              },
            ].map((hotel, index) => (
              <div
                key={index}
                className="bg-cover bg-center h-80 rounded-3xl shadow-md"
                style={{ backgroundImage: `url('${hotel.image}')` }}
              >
                <div className="p-6 bg-black bg-opacity-50 h-full rounded-3xl flex flex-col justify-between">
                  <h3 className="text-white text-2xl font-bold">{hotel.title}</h3>
                  <p className="text-white">{hotel.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
};
