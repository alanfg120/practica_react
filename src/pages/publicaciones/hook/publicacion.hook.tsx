import { useContext, useEffect, useState } from "react";
import { ErrorHttp } from "../../../interfaces/errorHttp.interface";
import { PublicacionesRepositorio } from "../data/publicaciones.repositorio";
import { Publicacion } from "../model/publicacion.model";
import { EnumActionsPublicaciones } from "../state/piblicaciones.reducer";
import { PublicacionesContext } from "../state/publicaciones.provaider";

export const usePublicacion = () => {
  const { state, dispatch } = useContext(PublicacionesContext);

  useEffect(() => {
    if (state.publicaciones.length === 0) getPublicaciones();
  }, []);

  const repositorio = PublicacionesRepositorio.getIntace();

  const getPublicaciones = async () => {
    const response = await repositorio.getPublicaciones(0);
    console.log(response);
    const error = response as ErrorHttp;
    if (error === ErrorHttp.dataInvalid) {
      alert("Ocurrio un error");
    } else
      dispatch({
        action: EnumActionsPublicaciones.GET_PUBLICACIONES,
        payload: response as Publicacion[],
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
    getPublicaciones,
  };
};
