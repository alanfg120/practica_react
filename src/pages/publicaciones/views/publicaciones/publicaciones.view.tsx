import React, { useCallback, useEffect } from "react";
import { PublicacionCard } from "../../componentes/publicacionCard";
import { usePublicacion } from "../../hook/publicacion.hook";
import './publicaciones.css'

export const PublicacionesPage = () => {

  const { state } = usePublicacion();

  return (
    <div className="publicaciones">
      {state.publicaciones.map((publicacion) => (
        <PublicacionCard publicacion={publicacion} key={publicacion.id}/>
      ))}
    </div>
  );
};
