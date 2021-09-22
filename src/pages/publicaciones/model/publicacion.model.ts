import { Empresa } from "../../empresa/models/empresa.model";

export interface Publicacion {
  id: number,
  texto: string,
  fecha: Date,
  comentarios: number,
  likes: number,
  empresa: Empresa
  data_comentarios: [],
  imagenes: [],
  likes_usuarios: [],
  megusta: boolean,
  edit: boolean
}