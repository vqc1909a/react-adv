//!La posición del suspense va a depnder de donde quiere hacer la carga de la pagina de espera, si va a ocupar toda la pagina o solamente la parte donde se renderiza el componente, si es el segundo el supense tiene que ir en la propiedad Element de Route, si es el primero, el Suspense tiene que envolver el BrowserRouter as Router y devlver ahi si un componente que ocupe toda la pagina, esto depende de tu pagina, será uno de los dos si o si, es recomendable el uso dentro del route como una carga de solamente el componente

// import { Suspense } from 'react';

import {
  Routes,
  Route,
  NavLink,
  Navigate
} from 'react-router-dom';
import logo from '../logo.svg';
import routes from './routes';

export const Navigation = () => {
  return (
      <div className="main-layout">
        <nav>
          <img src={ logo } alt="React Logo" />
          <ul>
            {routes.map(({name, to}) => (
              <li key={to}>
                <NavLink to={`${to}`} className={({isActive}) => isActive ? 'nav-active': ''}>{name}</NavLink>
              </li> 
            ))}           
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          {routes.map(({Component, path, to}) => (
            // <Route key={to} path={`${path}`} element={ <Suspense fallback="Cargando...">
            //   <Component />
            // </Suspense> } />  
            <Route key={to} path={`${path}`} element={<Component />} />  
          ))}        
          <Route path="*" element={<Navigate to={`${routes[0].to}`} replace></Navigate>}></Route> 
        </Routes>
      </div>
  );
}