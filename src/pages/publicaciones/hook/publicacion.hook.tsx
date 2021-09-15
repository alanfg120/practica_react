import { useContext, useEffect, useState } from "react";
import { PublicacionesRepositorio } from "../data/publicaciones.repositorio";
import { Publicacion } from "../model/publicacion.model";
import { EnumActionsPublicaciones } from "../state/piblicaciones.reducer";
import { PublicacionesContext } from "../state/publicaciones.provaider";

export const usePublicacion = () => {

  
  const { state, dispatch } = useContext(PublicacionesContext);
  const repositorio = PublicacionesRepositorio.getIntace();



  const getPublicaciones = async () => {
    const publicaciones = await repositorio.getPublicaciones(0);
    dispatch({
      action: EnumActionsPublicaciones.GET_PUBLICACIONES,
      payload: publicaciones,
    });
  };

  const addPublicacion = (publicacion: Publicacion) => {
    dispatch({
      action: EnumActionsPublicaciones.ADD_PUBLICACION,
      payload: publicacion,
    });
  };

  return {
    state,
    addPublicacion,
    getPublicaciones
  };
};
