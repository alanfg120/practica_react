import { useReducer } from "react";
import { Publicacion } from "../model/publicacion.model";

export enum EnumActionsPublicaciones {
  GET_PUBLICACIONES,
  ADD_PUBLICACION,
}

export type ActionPublicaciones =
  | {
      action: EnumActionsPublicaciones.GET_PUBLICACIONES;
      payload: Publicacion[];
    }
  | {
      action: EnumActionsPublicaciones.ADD_PUBLICACION;
      payload: Publicacion;
    };

export interface PublicacionesState {
  publicaciones: Publicacion[];
  loading: boolean;
}

export const initialState: PublicacionesState = {
  publicaciones: [],
  loading: true,
};

export const PublicacionesReducer = (
  state: PublicacionesState,
  event: ActionPublicaciones
): PublicacionesState => {
  switch (event.action) {
    case EnumActionsPublicaciones.GET_PUBLICACIONES:
      return { 
        ...state, 
        publicaciones: event.payload, 
        loading: false 
     };
    case EnumActionsPublicaciones.ADD_PUBLICACION:
      return {
        ...state,
        publicaciones: state.publicaciones.concat(event.payload),
      };
    default:
      return state;
  }
};
