import { Card ,CardHeader} from "@material-ui/core";
import React from "react";
import { Publicacion } from "../model/publicacion.model";
import './cardpublicaciones.css'
interface Props {
    publicacion: Publicacion
}

export const PublicacionCard = ({publicacion}:Props) => {
    return (

     <Card className='card-publicacion'>
     <CardHeader>{publicacion.empresa.nombre}</CardHeader>
     </Card>
    );
}