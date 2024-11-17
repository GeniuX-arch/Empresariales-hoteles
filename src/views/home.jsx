import { Footer } from "../footer/footer.jsx";
import { Navegation } from "../componentes/navigator.jsx";

export const Home = () => {
  return (
    <>
      <Navegation />
      <div>
      <div className="flex flex-row justify-between py-20 pl-44  w-full ">
        <div className=" p-5 tarjeta w-1/2">
          <h1>¿Quiénes Somos?</h1>
            <p>Descubre una Experiencia Gastronómica Inolvidable.</p>
          <p>
            Somos una plataforma dedicada a facilitar la búsqueda y reservación de hoteles ideales para cada viajero. Desde escapadas románticas hasta aventuras familiares, trabajamos para conectar a nuestros usuarios con una amplia variedad de opciones de hospedaje en destinos soñados.
          </p>
        </div>
        <div className=" w-1/2">
          <img 
            className=" rounded-l-full h-max " 
            src="https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="imagen-copa-cubiertos-restaurante"
          />
        </div>
      </div>

      {/*SERVICIOS*/}
      <div className="flex flex-col justify-center w-full  px-44 my-24" >
        <h2 className="pb-2 border-bottom text-left text-2xl font-bold">Servicios</h2>

        <ul className="grid grid-cols-4 w-full gap-20 text-center">
          <li className="col d-flex align-items-start">
            <svg
              className="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            ></svg>
            <div>
              <h3 className="font-bold text-xl">
                Reservacion
              </h3>
              <br />
              <p>
               Accede a una amplia selección de hoteles en todo el mundo y realiza reservas instantáneas de forma segura.
              </p>
            </div>
          </li>
          <li className="col d-flex align-items-start">
            <svg
              className="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            ></svg>
            <div>
              <h3 className="font-bold text-xl">
                Filtros
              </h3>
              <br />
              <p>
                Busca hoteles según tus necesidades: ubicación, precio, servicios incluidos, clasificación por estrellas, y más.
              </p>
            </div>
          </li>
          <li className="col d-flex align-items-start">
            <svg
              className="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            ></svg>
            <div>
              <h3 className="font-bold text-xl">
                Ofertas
              </h3>
              <br />
              <p>
                Aprovecha descuentos especiales y paquetes únicos solo disponibles en nuestra plataforma.
              </p>
            </div>
          </li>
          <li className="col d-flex align-items-start">
            <svg
              className="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            ></svg>
            <div>
              <h3 className="font-bold text-xl">
                Pagos Flexibles
              </h3>
              <br />
              <p>
                Paga en línea con métodos seguros o selecciona opciones como pagos a plazos o al llegar al hotel.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/*CARTAS */}
      <div className="px-44 py-20" id="">
        <h1 className="pb-2 border-bottom text-left text-2xl font-bold">Descubre nuestros hoteles</h1>

        <div className="grid grid-cols-3 gap-20 w-full">
  <div className="bg-cover bg-center h-80 mb-20 rounded-3xl" style={{ backgroundImage: "url('https://cdn.forbes.co/2020/02/sofitel-legend-santa-clara-outdoor-pool.jpg')" }}>
    <div className="p-6 bg-black bg-opacity-50 h-full rounded-3xl  flex flex-col justify-between ">
      <h3 className="text-white text-2xl font-bold">BOUTIQUE</h3>
      <p className="text-white">
        Disfruta de una experiencia gastronómica única en nuestro restaurante elegante.
        Nuestro menú cuidadosamente seleccionado y ambiente sofisticado te esperan.
      </p>
    </div>
  </div>

  <div className="bg-cover bg-center h-80 rounded-3xl" style={{ backgroundImage: "url('https://cache.marriott.com/is/image/marriotts7prod/mc-baqmc-facade-29812:Wide-Hor?wid=1336&fit=constrain')" }}>
    <div className="p-6 bg-black bg-opacity-50 h-full rounded-3xl  flex flex-col justify-between ">
      <h3 className="text-white text-2xl font-bold">NEGOCIOS</h3>
      <p className="text-white">
        Diseñados para viajeros corporativos, con servicios como salas de reuniones, conexión Wi-Fi de alta velocidad y ubicaciones estratégicas cerca de centros empresariales o aeropuertos.
      </p>
    </div>
  </div>

  <div className="bg-cover bg-center h-80 rounded-3xl" style={{ backgroundImage: "url('https://sonesta.hoteles-santander.com/data/Images/OriginalPhoto/12839/1283906/1283906287/image-bucaramanga-sonesta-hotel-1.JPEG')" }}>
    <div className="p-6 bg-black bg-opacity-50 h-full rounded-3xl  flex flex-col justify-between ">
      <h3 className="text-white text-2xl font-bold">TODO INCLUIDO</h3>
      <p className="text-white">
       Perfectos para quienes quieren disfrutar sin preocuparse por los detalles. Incluyen alojamiento, comidas, bebidas y actividades recreativas en un solo paquete. Son comunes en destinos turísticos de playa o resorts.
      </p>
    </div>
  </div>
</div>

      </div>

      {/* FOOTER */}
      <Footer />
      </div>
    </>
  );
};
