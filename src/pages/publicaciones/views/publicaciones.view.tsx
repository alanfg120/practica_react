import React, { useEffect } from "react";
import { PublicacionCard } from "../componentes/publicacionCard";
import { usePublicacion } from "../hook/publicacion.hook";
import { Publicacion } from "../model/publicacion.model";

export const PublicacionesPage = () => {
  const { state, getPublicaciones } = usePublicacion();
  useEffect(() => {
    console.log("hola");
    getPublicaciones();
  }, []);
  return (
    <div>
      {state.publicaciones.map((publicacion) => (
        <PublicacionCard publicacion={publicacion} />
      ))}
    </div>
  );
};
