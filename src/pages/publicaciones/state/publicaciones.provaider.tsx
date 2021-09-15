import React, { createContext, useReducer } from "react";
import { ActionPublicaciones, initialState, PublicacionesReducer, PublicacionesState } from "./piblicaciones.reducer";

interface props {
  children: JSX.Element | JSX.Element[];
}


interface ContextPropPublicaciones{
  state: PublicacionesState,
  dispatch: React.Dispatch<ActionPublicaciones>
}

export const PublicacionesContext = createContext<ContextPropPublicaciones>({} as ContextPropPublicaciones);

export const PublicacionesProvider = ({ children }: props) => {

const [state,dispatch] = useReducer(PublicacionesReducer,initialState)

return (<PublicacionesContext.Provider value={{state,dispatch}}>
          {children}
         </PublicacionesContext.Provider>);
};

