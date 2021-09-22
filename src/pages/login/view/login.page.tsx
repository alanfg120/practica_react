import React from "react";
import { Link } from "react-router-dom";
import { usePublicacion } from "../../publicaciones/hook/publicacion.hook";
import { Publicacion } from "../../publicaciones/model/publicacion.model";

export let LoginPage = () => {
  const { state, addPublicacion } = usePublicacion();

  console.log("login Page");

  return (
    <div>
       <h1>Login</h1>
      <Link to="/home">Home</Link>
    </div>
  );
};
