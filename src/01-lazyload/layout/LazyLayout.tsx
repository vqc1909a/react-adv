import React, { lazy, Suspense } from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';

// import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';


const LazyPage1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ "../pages/LazyPage1"));
const LazyPage2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ "../pages/LazyPage2"));
const LazyPage3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ "../pages/LazyPage3"));


//!Una anotación importante es que las rutas anidadas no es necesario que vayan directamente dentro de la primera ruta padre (si es este caso basta con poner las rutas hijas dentro de este componente y harán el llamado del componente), caso contrario tienes que poner el componente <Outlet> aquí nmas sin ninguna ruta 

function LazyLayout() {
  return (
    <div>
        <h1>LazyLayout Page</h1>

        {/* Rutas hijas irán aquí */}
        <ul>
            <li>
                <NavLink to="lazy1">Lazy1</NavLink>
            </li>
            <li>
                <NavLink to="lazy2">Lazy2</NavLink>
            </li>
            <li>
                <NavLink to="lazy3">Lazy3</NavLink>
            </li>
        </ul>

        <Suspense fallback="Cargando Componente...">
            <Routes>
                <Route path='lazy1' element={<LazyPage1 />}></Route>
                <Route path='lazy2' element={<LazyPage2 />}></Route>
                <Route path='lazy3' element={<LazyPage3 />}></Route>
                <Route path='*' element={<Navigate to="lazy1" />}></Route>
            </Routes>
        </Suspense>
    </div>
  )
}

export default LazyLayout