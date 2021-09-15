import React from "react";
import { Publicacion } from "../model/publicacion.model";
interface Props {
    publicacion: Publicacion
}

export const PublicacionCard = ({publicacion}:Props) => {
    return (
     <div>{publicacion.titulo}</div>
    );
}