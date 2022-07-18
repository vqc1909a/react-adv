//!El lazy hace que el componente este en stand by hasta que se llame al componente o sea que no hace uso de los bytes que ocupa dicho componente y lo verás en network que cuando vas cambiando de ruta hará una carga dinamica de ese componente en un archivo llamado chunk.js (podemos cambiar le nombre del chunk), a difenrencia de que no use lazy te carga todos los componentes de todas las rutas en una

//!Una anotación es que lo de arriba cumple para las rutas para un nivel, si tu tratas de poner rutas dentro de un ruta padre, puede manejar el lazy con suspense para esas rutas hijas sin ningun problema, envolviendo las rutas hijas dentro de otro suspense 

//!Así es como le gusta trabajar a fernando herrera un modulo que me carge todas mis rutas que quiera

import { lazy, LazyExoticComponent} from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    //!Es una función que retorna un JSX.Element, si quieres ve al componente LazyPage1 y lo verás
    // Component: () => JSX.Element,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}

//!De esta manera se cambia el nombre de los chunks
// const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */"../01-lazyload/pages/LazyPage1"));
// const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */"../01-lazyload/pages/LazyPage2"));
// const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */"../01-lazyload/pages/LazyPage3"));

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout"*/"../01-lazyload/layout/LazyLayout"));


const routes: Route[] = [
    // {
    //     to: "/lazy1",
    //     path: "lazy1",
    //     Component: Lazy1,
    //     name: "Lazy1"
    // },
    // {
    //     to: "/lazy2",
    //     path: "lazy2",
    //     Component: Lazy2,
    //     name: "Lazy2"
    // },
    // {
    //     to: "/lazy3",
    //     path: "lazy3",
    //     Component: Lazy3,
    //     name: "Lazy3"
    // },
    {
      to: "/lazyload",
      path: "/lazyload/*",
      Component: LazyLayout,
      name: "Lazy Layout Page"  
    },
    {
        to: "/no-lazy",
        path: "no-lazy",
        Component: NoLazy,
        name: "No Lazy"
    }

]
export default routes