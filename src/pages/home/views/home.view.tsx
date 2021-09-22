import React, { Suspense, useEffect } from "react";
import { useState } from "react";
import { DrawerComponet } from "../componetes/drawer/drawer.componet";
import { NavBar } from "../componetes/navbar/navbar.componetn";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  BrowserRouter,
} from "react-router-dom";
import "./../css/home.css";
import { LoadinProgress } from "../../../componentes/loading/loadin.componet";
import { PublicacionesProvider } from "../../publicaciones/state/publicaciones.provaider";
import { PublicacionesPage } from "../../publicaciones/views/publicaciones/publicaciones.view";
import { usePublicacion } from "../../publicaciones/hook/publicacion.hook";

export let HomeView = () => {
  
 
  return (
    <div>
      <NavBar/>
      <div className="container">
        <DrawerComponet/>
        <div>
          <Switch>
            <Route path="/home/publicaciones"  component = {()=><PublicacionesPage/>}>
            
            </Route>
            <Route path="/home/tienda" component={() => <h1>Tienda</h1>} />
            <Route
              path="/home/categorias"
              component={() => <h1>Categorias</h1>}
            />
          </Switch>
     
        </div>
      </div>
    </div>
  );
};
