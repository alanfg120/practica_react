import React from "react";
import { Link } from "react-router-dom";
import { usePublicacion } from "../../publicaciones/hook/publicacion.hook";
import { Publicacion } from "../../publicaciones/model/publicacion.model";

export let LoginPage = () => {

  const { state ,addPublicacion} = usePublicacion();

  console.log('login Page');
  
  return (
    <div>
      {
          state.publicaciones.map(p=><h3>{p.titulo}</h3>)
      }

      <button onClick= {()=>addPublicacion(new Publicacion('nueva'))}>ADD</button>
      <Link to='/home'>Home</Link>
    </div>
  );
};
