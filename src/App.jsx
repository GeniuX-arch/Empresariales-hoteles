import { Home } from './views/home';
import Hotel from './views/Hotel'
import Hoteles from './views/Hoteles'
import Perfil from './views/Perfil'
import { Register } from './views/Register';
import { Restaurants } from './componentes/restaurants';
import { Login } from './views/Login';
import { Routes, Route } from  'react-router-dom'
import { Profile } from './componentes/profile';
import { Privacy } from './componentes/privacy';
import { Preferences } from './componentes/preferences';
import { Contacto } from './componentes/contact';
import { MoreInfo } from './componentes/restInfo';
import "./App.css"

export const App = () => {

    return(
        <>
            <Routes>
                <Route path="/perfil" element={<Perfil />}></Route>
                <Route path="/hoteles" element={<Hoteles />}></Route>
                <Route path="/" element={<Home />}>
                </Route>
                <Route path='/iniciar-sesion' element={<Login />}>
                </Route>

                <Route path='/hotel' element={<Hotel />}>
                </Route>
                <Route path='/registrarse' element={<Register />}> 
                </Route>
                <Route path='/perfil' element={<Profile />}> 
                </Route>
                <Route path='/privacidad' element={<Privacy />}> 
                </Route>
                <Route path='/preferencias' element={<Preferences />}> 
                </Route>
                <Route path='/restaurantes' element={<Restaurants />}> 
                </Route>
                <Route path='/contacto' element={<Contacto />}> 
                </Route>
                <Route path='/nombre-info' element={<MoreInfo />}> 
                </Route>
            </Routes>
        </>
    );
}